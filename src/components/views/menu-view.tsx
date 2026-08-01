"use client";

import { useEffect, useState } from "react";
import { CategoryBar } from "@/components/layout/category-bar";
import { ProductList } from "@/components/menu/product-list";
import { getProductsByCategory, TRIO_PROMO_NOTE } from "@/lib/menu";
import { useNavigation } from "@/lib/navigation-context";
import type { Category } from "@/types/menu";

export function MenuView() {
  const { menuCategory } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<Category>(menuCategory);
  const products = getProductsByCategory(activeCategory);

  useEffect(() => {
    setActiveCategory(menuCategory);
  }, [menuCategory]);

  return (
    <div className="min-w-0 px-4">
      <div className="mb-4 pt-2">
        <h1 className="text-xl font-extrabold text-brand-brown">Cardápio</h1>
        <p className="text-sm text-brand-brown/55">
          Toque para adicionar · use + e − para quantidade
        </p>
      </div>

      <CategoryBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {activeCategory === "trios" && (
        <p className="mt-4 rounded-2xl border border-brand-orange/15 bg-white px-4 py-3 text-xs leading-relaxed text-brand-brown/70">
          {TRIO_PROMO_NOTE}
        </p>
      )}

      <div className="mt-4">
        <ProductList products={products} />
      </div>
    </div>
  );
}
