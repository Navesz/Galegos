"use client";

import { CartProvider } from "@/lib/cart-context";
import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Toaster position="top-center" richColors />
    </CartProvider>
  );
}
