"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Category } from "@/types/menu";

export type AppTab = "inicio" | "cardapio" | "carrinho";

type NavigationContextValue = {
  activeTab: AppTab;
  menuCategory: Category;
  setActiveTab: (tab: AppTab) => void;
  openMenuCategory: (category: Category) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTabState] = useState<AppTab>("cardapio");
  const [menuCategory, setMenuCategory] = useState<Category>("sanduiches");

  const setActiveTab = useCallback((tab: AppTab) => {
    setActiveTabState(tab);
  }, []);

  const openMenuCategory = useCallback((category: Category) => {
    setMenuCategory(category);
    setActiveTabState("cardapio");
  }, []);

  const value = useMemo(
    () => ({
      activeTab,
      menuCategory,
      setActiveTab,
      openMenuCategory,
    }),
    [activeTab, menuCategory, setActiveTab, openMenuCategory],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation deve ser usado dentro de NavigationProvider");
  }

  return context;
}
