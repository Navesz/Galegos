"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
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
      <SheetContent
        side="bottom"
        className="flex max-h-[88dvh] flex-col gap-0 rounded-t-3xl px-0 pb-0"
      >
        <SheetHeader className="border-b border-brand-brown/8 px-5 pt-2 pb-4 text-left">
          <SheetTitle className="text-lg font-extrabold text-brand-brown">
            Extras
          </SheetTitle>
          <SheetDescription className="text-sm text-brand-brown/55">
            {item.product.name}
            {item.quantity > 1 && " — quantidade por unidade"}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <div className="overflow-hidden rounded-2xl border border-brand-brown/8 bg-white shadow-sm">
            {opcionais.map((opcional, index) => {
              const extra = item.extras.find(
                (entry) => entry.product.id === opcional.id,
              );
              const quantity = extra?.quantity ?? 0;

              return (
                <div
                  key={opcional.id}
                  className={cn(
                    "flex items-center gap-4 px-4 py-4",
                    index < opcionais.length - 1 &&
                      "border-b border-brand-brown/8",
                  )}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] leading-tight font-bold text-brand-brown">
                      {opcional.name}
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-brand-orange">
                      {formatPrice(opcional.price)}
                      {item.quantity > 1 && (
                        <span className="text-xs font-semibold text-brand-brown/45">
                          {" "}
                          / un.
                        </span>
                      )}
                    </p>
                  </div>

                  {quantity === 0 ? (
                    <Button
                      size="icon"
                      onClick={() =>
                        updateExtraQuantity(item.cartId, opcional, 1)
                      }
                      className="size-10 shrink-0 rounded-xl bg-brand-orange text-white shadow-md shadow-brand-orange/30 hover:bg-brand-orange/90"
                      aria-label={`Adicionar ${opcional.name}`}
                    >
                      <Plus className="size-5" />
                    </Button>
                  ) : (
                    <div className="flex shrink-0 items-center gap-1 rounded-xl bg-brand-cream p-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-9 rounded-lg text-brand-brown hover:bg-white"
                        onClick={() =>
                          updateExtraQuantity(
                            item.cartId,
                            opcional,
                            quantity - 1,
                          )
                        }
                        aria-label={`Menos ${opcional.name}`}
                      >
                        <Minus className="size-4" />
                      </Button>
                      <span className="min-w-7 text-center text-sm font-bold text-brand-brown">
                        {quantity}
                      </span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="size-9 rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90"
                        onClick={() =>
                          updateExtraQuantity(
                            item.cartId,
                            opcional,
                            quantity + 1,
                          )
                        }
                        aria-label={`Mais ${opcional.name}`}
                      >
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <SheetFooter className="border-t border-brand-brown/8 px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button
            onClick={() => onOpenChange(false)}
            className="h-12 w-full rounded-2xl bg-brand-brown text-base font-bold text-white hover:bg-brand-brown/90"
          >
            Confirmar extras
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
