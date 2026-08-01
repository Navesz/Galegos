"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AppTab = "inicio" | "cardapio" | "carrinho";

type NavigationContextValue = {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<AppTab>("cardapio");

  const value = useMemo(
    () => ({ activeTab, setActiveTab }),
    [activeTab],
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
