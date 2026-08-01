"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getOpcionais } from "@/lib/menu";
import type { CartItem } from "@/types/menu";

type ItemExtrasSheetProps = {
  item: CartItem;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ItemExtrasSheet({
  item,
  open,
  onOpenChange,
}: ItemExtrasSheetProps) {
  const { updateExtraQuantity } = useCart();
  const opcionais = getOpcionais();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-h-[85dvh] rounded-t-3xl">
        <SheetHeader className="text-left">
          <SheetTitle className="text-brand-brown">Extras</SheetTitle>
          <SheetDescription>
            {item.product.name}
            {item.quantity > 1 && " — quantidade por unidade"}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 space-y-2 overflow-y-auto pb-4">
          {opcionais.map((opcional) => {
            const extra = item.extras.find(
              (entry) => entry.product.id === opcional.id,
            );
            const quantity = extra?.quantity ?? 0;

            return (
              <div
                key={opcional.id}
                className="flex items-center justify-between rounded-2xl bg-brand-cream px-4 py-3"
              >
                <div>
                  <p className="text-sm font-bold text-brand-brown">
                    {opcional.name}
                  </p>
                  <p className="text-xs font-semibold text-brand-orange">
                    {formatPrice(opcional.price)}
                    {item.quantity > 1 && " / un."}
                  </p>
                </div>

                {quantity === 0 ? (
                  <Button
                    size="sm"
                    onClick={() =>
                      updateExtraQuantity(item.cartId, opcional, 1)
                    }
                    className="h-9 rounded-xl bg-brand-orange px-3 text-xs font-bold text-white hover:bg-brand-orange/90"
                  >
                    <Plus className="size-3.5" />
                    Adicionar
                  </Button>
                ) : (
                  <div className="flex items-center gap-1 rounded-xl bg-white p-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-8 rounded-lg"
                      onClick={() =>
                        updateExtraQuantity(
                          item.cartId,
                          opcional,
                          quantity - 1,
                        )
                      }
                      aria-label={`Menos ${opcional.name}`}
                    >
                      <Minus className="size-3.5" />
                    </Button>
                    <span className="min-w-6 text-center text-sm font-bold">
                      {quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-8 rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90"
                      onClick={() =>
                        updateExtraQuantity(
                          item.cartId,
                          opcional,
                          quantity + 1,
                        )
                      }
                      aria-label={`Mais ${opcional.name}`}
                    >
                      <Plus className="size-3.5" />
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Button
          onClick={() => onOpenChange(false)}
          className="mt-2 h-12 w-full rounded-2xl bg-brand-brown font-bold text-white hover:bg-brand-brown/90"
        >
          Confirmar extras
        </Button>
      </SheetContent>
    </Sheet>
  );
}
