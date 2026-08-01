"use client";

import { CartProvider } from "@/lib/cart-context";
import { NavigationProvider } from "@/lib/navigation-context";
import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <NavigationProvider>
        {children}
        <Toaster position="top-center" richColors />
      </NavigationProvider>
    </CartProvider>
  );
}
