"use client";

import { Home, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { useNavigation, type AppTab } from "@/lib/navigation-context";

const TABS: { id: AppTab; label: string; icon: typeof Home }[] = [
  { id: "inicio", label: "Início", icon: Home },
  { id: "cardapio", label: "Cardápio", icon: UtensilsCrossed },
  { id: "carrinho", label: "Carrinho", icon: ShoppingBag },
];

export function BottomNav() {
  const { activeTab, setActiveTab } = useNavigation();
  const { totalItems } = useCart();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-brown/10 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(61,43,31,0.08)] backdrop-blur-md">
      <div className="mx-auto grid max-w-lg grid-cols-3">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative flex flex-col items-center gap-1 px-2 py-3 text-[11px] font-semibold transition-colors",
                isActive ? "text-brand-orange" : "text-brand-brown/50",
              )}
            >
              <span className="relative">
                <Icon
                  className={cn("size-6", isActive && "stroke-[2.5px]")}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {tab.id === "carrinho" && totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex size-4 items-center justify-center rounded-full bg-brand-orange text-[9px] font-bold text-white">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </span>
              {tab.label}
              {isActive && (
                <span className="absolute top-0 inset-x-8 h-0.5 rounded-full bg-brand-orange" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
