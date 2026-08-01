"use client";

import { useEffect, useRef } from "react";
import { Cherry, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { CATEGORIES } from "@/lib/menu";
import type { Category } from "@/types/menu";

const CATEGORY_ICONS: Partial<Record<Category, LucideIcon>> = {
  acai: Cherry,
};

type CategoryBarProps = {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
};

export function CategoryBar({
  activeCategory,
  onCategoryChange,
}: CategoryBarProps) {
  const { direction, scrollY } = useScrollDirection();
  const visible = direction === "up" || scrollY < 24;
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    function onWheel(event: WheelEvent) {
      const node = scrollerRef.current;
      if (!node || node.scrollWidth <= node.clientWidth) return;

      const { deltaX, deltaY } = event;
      if (Math.abs(deltaX) > Math.abs(deltaY)) return;

      if (deltaY !== 0) {
        event.preventDefault();
        node.scrollLeft += deltaY;
      }
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const activeButton = scroller.querySelector<HTMLButtonElement>(
      `[data-category="${activeCategory}"]`,
    );

    activeButton?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeCategory]);

  return (
    <div
      className={cn(
        "sticky top-0 z-40 -mx-4 w-[calc(100%+2rem)] min-w-0 border-b border-brand-brown/8 bg-brand-cream/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "pointer-events-none -translate-y-full",
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-full min-w-0 gap-2 overflow-x-auto overscroll-x-contain scroll-smooth pb-1",
          "touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "md:[scrollbar-width:thin] md:[&::-webkit-scrollbar]:block md:[&::-webkit-scrollbar]:h-1.5",
          "md:[&::-webkit-scrollbar-thumb]:rounded-full md:[&::-webkit-scrollbar-thumb]:bg-brand-brown/25",
          "md:[&::-webkit-scrollbar-track]:bg-transparent",
        )}
      >
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          const Icon = CATEGORY_ICONS[category.id];

          return (
            <button
              key={category.id}
              type="button"
              data-category={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all active:scale-95",
                isActive
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                  : "bg-white text-brand-brown/70 shadow-sm",
              )}
            >
              <span className="mr-1.5 inline-flex size-4 items-center justify-center">
                {Icon ? (
                  <Icon
                    className={cn(
                      "size-4",
                      isActive ? "text-white" : "text-purple-700",
                    )}
                    strokeWidth={2.25}
                    aria-hidden
                  />
                ) : (
                  category.emoji
                )}
              </span>
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
