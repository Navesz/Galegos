"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ItemExtrasSheet } from "@/components/cart/item-extras-sheet";
import { useCart } from "@/lib/cart-context";
import {
  formatPrice,
  getCartLineTotal,
  supportsExtras,
} from "@/lib/menu";
import type { CartItem } from "@/types/menu";

type CartItemRowProps = {
  item: CartItem;
};

export function CartItemRow({ item }: CartItemRowProps) {
  const { updateLineQuantity } = useCart();
  const [extrasOpen, setExtrasOpen] = useState(false);
  const lineTotal = getCartLineTotal(item);
  const canHaveExtras = supportsExtras(item.product);

  return (
    <>
      <div className="border-b border-brand-brown/8 px-4 py-4 last:border-b-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="font-bold text-brand-brown">{item.product.name}</p>
            <p className="text-xs text-brand-brown/50">
              {formatPrice(item.product.price)} cada
            </p>

            {item.extras.length > 0 && (
              <ul className="mt-2 space-y-0.5">
                {item.extras.map((extra) => (
                  <li
                    key={extra.product.id}
                    className="text-xs text-brand-brown/65"
                  >
                    + {extra.product.name} x{extra.quantity}
                    {item.quantity > 1 && " em cada"}
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-2 text-sm font-extrabold text-brand-orange">
              {formatPrice(lineTotal)}
            </p>

            {canHaveExtras && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExtrasOpen(true)}
                className="mt-2 h-8 rounded-lg border-brand-orange/30 px-3 text-xs font-bold text-brand-orange hover:bg-brand-orange/5"
              >
                Extras
                {item.extras.length > 0 && (
                  <span className="ml-1.5 rounded-full bg-brand-orange px-1.5 py-0.5 text-[10px] text-white">
                    {item.extras.reduce((sum, extra) => sum + extra.quantity, 0)}
                  </span>
                )}
              </Button>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-xl bg-brand-cream p-1">
            <Button
              variant="ghost"
              size="icon"
              className="size-9 rounded-lg hover:bg-white"
              onClick={() =>
                updateLineQuantity(item.cartId, item.quantity - 1)
              }
              aria-label="Diminuir quantidade"
            >
              <Minus className="size-4" />
            </Button>
            <span className="min-w-7 text-center text-sm font-bold">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="size-9 rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90"
              onClick={() =>
                updateLineQuantity(item.cartId, item.quantity + 1)
              }
              aria-label="Aumentar quantidade"
            >
              <Plus className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      {canHaveExtras && (
        <ItemExtrasSheet
          item={item}
          open={extrasOpen}
          onOpenChange={setExtrasOpen}
        />
      )}
    </>
  );
}
