#!/usr/bin/env python3
"""Converte a logo PNG em SVG sem fundo usando vtracer."""

from __future__ import annotations

import re
import shutil
from pathlib import Path

import vtracer
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "ChatGPT Image Aug 1, 2026, 06_37_57 PM.png"
OUTPUT_DIR = ROOT / "public" / "logo"

CREAM_FILLS = {
    "#F8EBDB",
    "#F9EBDB",
    "#F9F3E8",
    "#F9F4E8",
    "#F8E8D7",
    "#F8E8D5",
    "#F9EEDF",
    "#F8EADB",
    "#F9ECDD",
    "#F9ECDC",
    "#F9E5D0",
    "#F9E4CF",
    "#F9EEE0",
    "#F9EFE0",
    "#F9F1E4",
    "#F8E9D9",
    "#F9F2E6",
}


def remove_cream_background(image: Image.Image, tolerance: int = 42) -> Image.Image:
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    width, height = rgba.size

    samples = [
        pixels[0, 0],
        pixels[width - 1, 0],
        pixels[0, height - 1],
        pixels[width - 1, height - 1],
        pixels[width // 2, 0],
        pixels[width // 2, height - 1],
    ]
    ref_r = sum(sample[0] for sample in samples) // len(samples)
    ref_g = sum(sample[1] for sample in samples) // len(samples)
    ref_b = sum(sample[2] for sample in samples) // len(samples)

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if (
                abs(r - ref_r) <= tolerance
                and abs(g - ref_g) <= tolerance
                and abs(b - ref_b) <= tolerance
                and r > 200
                and g > 180
            ):
                pixels[x, y] = (r, g, b, 0)

    return rgba


def vectorize(input_path: Path, output_path: Path) -> None:
    vtracer.convert_image_to_svg_py(
        str(input_path),
        str(output_path),
        colormode="color",
        hierarchical="stacked",
        mode="spline",
        filter_speckle=6,
        color_precision=8,
        layer_difference=16,
        corner_threshold=60,
        length_threshold=4.0,
        max_iterations=10,
        splice_threshold=45,
        path_precision=4,
    )


def strip_background_paths(svg_path: Path) -> None:
    content = svg_path.read_text(encoding="utf-8")
    path_pattern = re.compile(
        r'<path d="([^"]*)" fill="(#[0-9A-Fa-f]{6})"([^>]*)/>',
        re.MULTILINE,
    )

    def replacer(match: re.Match[str]) -> str:
        d = match.group(1)
        fill = match.group(2).upper()
        attrs = match.group(3)

        if fill in CREAM_FILLS:
            return ""

        if "1254 1254" in d and 'translate(0,0)' in attrs:
            return ""

        if d.startswith("M0 0 C") and "1254 0" in d and "0 1254" in d:
            return ""

        return match.group(0)

    cleaned = path_pattern.sub(replacer, content)
    svg_path.write_text(cleaned, encoding="utf-8")


def create_icon(source: Image.Image, output: Path, size: int = 512) -> None:
    image = source.convert("RGBA")
    width, height = image.size
    crop_size = min(width, height)
    left = (width - crop_size) // 2
    top = 0
    cropped = image.crop((left, top, left + crop_size, top + crop_size))
    resized = cropped.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(output, format="PNG", optimize=True)


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Logo não encontrada: {SOURCE}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    source_image = Image.open(SOURCE)
    transparent_logo = remove_cream_background(source_image)
    transparent_icon_source = remove_cream_background(source_image)

    transparent_logo_path = OUTPUT_DIR / "logo-transparent.png"
    transparent_logo.save(transparent_logo_path, format="PNG", optimize=True)

    shutil.copy(SOURCE, OUTPUT_DIR / "logo.png")
    create_icon(transparent_icon_source, OUTPUT_DIR / "icon.png")

    vectorize(transparent_logo_path, OUTPUT_DIR / "logo-vertical.svg")
    vectorize(OUTPUT_DIR / "icon.png", OUTPUT_DIR / "icon.svg")

    strip_background_paths(OUTPUT_DIR / "logo-vertical.svg")
    strip_background_paths(OUTPUT_DIR / "icon.svg")

    print("Logo gerada em public/logo/ (sem fundo)")
    print("  - logo-vertical.svg")
    print("  - icon.svg")
    print("  - logo-transparent.png")
    print("  - icon.png")


if __name__ == "__main__":
    main()
