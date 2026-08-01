"use client";

import { CATEGORIES } from "@/lib/menu";
import { useNavigation } from "@/lib/navigation-context";
import { cn } from "@/lib/utils";

export function CategoryGrid() {
  const { openMenuCategory } = useNavigation();

  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => openMenuCategory(category.id)}
          className={cn(
            "flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl",
            "border border-brand-brown/8 bg-white px-2 shadow-sm",
            "transition-all active:scale-[0.97] hover:border-brand-orange/30",
          )}
        >
          <span className="text-3xl" aria-hidden>
            {category.emoji}
          </span>
          <span className="text-center text-xs leading-tight font-bold text-brand-brown">
            {category.label}
          </span>
        </button>
      ))}
    </div>
  );
}
