"use client";

import { useEffect } from "react";
import { BottomNav } from "@/components/layout/bottom-nav";
import { CartView } from "@/components/views/cart-view";
import { HomeView } from "@/components/views/home-view";
import { MenuView } from "@/components/views/menu-view";
import { useNavigation } from "@/lib/navigation-context";

export function MobileShell() {
  const { activeTab } = useNavigation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeTab]);

  return (
    <div className="mx-auto min-h-dvh max-w-lg bg-brand-cream">
      <main className="pb-[calc(5.5rem+env(safe-area-inset-bottom))]">
        {activeTab === "inicio" && <HomeView />}
        {activeTab === "cardapio" && <MenuView />}
        {activeTab === "carrinho" && <CartView />}
      </main>
      <BottomNav />
    </div>
  );
}
