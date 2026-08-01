"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductGrid } from "@/components/menu/product-grid";
import { CATEGORIES, getProductsByCategory } from "@/lib/menu";

export function CategoryTabs() {
  return (
    <Tabs defaultValue="hamburgueres" className="w-full">
      <TabsList className="mb-6 h-auto w-full flex-wrap justify-start gap-2 bg-white p-2">
        {CATEGORIES.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="data-[state=active]:bg-brand-orange data-[state=active]:text-white"
          >
            <span className="mr-1.5">{category.emoji}</span>
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {CATEGORIES.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <ProductGrid products={getProductsByCategory(category.id)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
