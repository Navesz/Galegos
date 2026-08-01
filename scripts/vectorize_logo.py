#!/usr/bin/env python3
"""Converte a logo PNG em SVG usando vtracer."""

from __future__ import annotations

import shutil
from pathlib import Path

import vtracer
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "ChatGPT Image Aug 1, 2026, 06_37_57 PM.png"
OUTPUT_DIR = ROOT / "public" / "logo"


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


def create_icon(source: Path, output: Path, size: int = 512) -> None:
    image = Image.open(source).convert("RGBA")
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

    shutil.copy(SOURCE, OUTPUT_DIR / "logo.png")
    create_icon(SOURCE, OUTPUT_DIR / "icon.png")

    vectorize(SOURCE, OUTPUT_DIR / "logo-vertical.svg")
    vectorize(OUTPUT_DIR / "icon.png", OUTPUT_DIR / "icon.svg")

    print("Logo gerada em public/logo/")
    print("  - logo.png")
    print("  - logo-vertical.svg")
    print("  - icon.png")
    print("  - icon.svg")


if __name__ == "__main__":
    main()
