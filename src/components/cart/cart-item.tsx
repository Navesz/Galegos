"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu";

type CartItemRowProps = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

export function CartItemRow({
  productId,
  name,
  price,
  quantity,
}: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-start justify-between gap-3 border-b border-border py-4">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-brand-brown">{name}</p>
        <p className="text-sm text-muted-foreground">
          {formatPrice(price)} cada
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => updateQuantity(productId, quantity - 1)}
          aria-label="Diminuir quantidade"
        >
          <Minus className="size-3.5" />
        </Button>
        <span className="w-6 text-center text-sm font-semibold">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => updateQuantity(productId, quantity + 1)}
          aria-label="Aumentar quantidade"
        >
          <Plus className="size-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-destructive"
          onClick={() => removeItem(productId)}
          aria-label="Remover item"
        >
          <Trash2 className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
