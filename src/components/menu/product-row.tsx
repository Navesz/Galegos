"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu";
import type { Product } from "@/types/menu";
import { cn } from "@/lib/utils";

type ProductRowProps = {
  product: Product;
};

export function ProductRow({ product }: ProductRowProps) {
  const { getQuantity, addItem, decrementProduct } = useCart();
  const quantity = getQuantity(product.id);

  return (
    <article className="flex gap-3 border-b border-brand-brown/8 bg-white px-4 py-4 last:border-b-0">
      <div className="relative size-[72px] shrink-0 overflow-hidden rounded-2xl bg-brand-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="72px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
        <div>
          <h3 className="text-[15px] leading-tight font-bold text-brand-brown">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-brand-brown/55">
              {product.description}
            </p>
          )}
          <p className="mt-1.5 text-base font-extrabold text-brand-orange">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center self-center">
        {quantity === 0 ? (
          <Button
            size="icon"
            onClick={() => addItem(product)}
            className="size-10 rounded-xl bg-brand-orange text-white shadow-md shadow-brand-orange/30 hover:bg-brand-orange/90"
            aria-label={`Adicionar ${product.name}`}
          >
            <Plus className="size-5" />
          </Button>
        ) : (
          <div className="flex items-center gap-1 rounded-xl bg-brand-cream p-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => decrementProduct(product.id)}
              className="size-9 rounded-lg text-brand-brown hover:bg-white"
              aria-label="Diminuir quantidade"
            >
              <Minus className="size-4" />
            </Button>
            <span
              className={cn(
                "min-w-7 text-center text-sm font-bold text-brand-brown",
              )}
            >
              {quantity}
            </span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => addItem(product)}
              className="size-9 rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90"
              aria-label="Aumentar quantidade"
            >
              <Plus className="size-4" />
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}
