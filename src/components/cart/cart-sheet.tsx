"use client";

import { MessageCircle, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CartItemRow } from "@/components/cart/cart-item";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CartSheet() {
  const { items, totalItems, totalPrice } = useCart();

  function handleCheckout() {
    if (items.length === 0) return;
    window.open(buildWhatsAppUrl(items), "_blank", "noopener,noreferrer");
  }

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            className="relative border-brand-orange/30 bg-white text-brand-brown hover:bg-brand-cream"
            aria-label="Abrir carrinho"
          />
        }
      >
        <ShoppingBag className="size-4" />
        <span className="hidden sm:inline">Carrinho</span>
        {totalItems > 0 && (
          <Badge className="absolute -top-2 -right-2 size-5 rounded-full bg-brand-orange p-0 text-[10px] text-white">
            {totalItems}
          </Badge>
        )}
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-brand-brown">Seu pedido</SheetTitle>
          <SheetDescription>
            Revise os itens e finalize pelo WhatsApp.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-2">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-muted-foreground">
              <p>Seu carrinho está vazio.</p>
              <p className="text-sm">Adicione itens do cardápio para começar.</p>
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow
                key={item.product.id}
                productId={item.product.id}
                name={item.product.name}
                price={item.product.price}
                quantity={item.quantity}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="space-y-4 pt-4">
            <Separator />
            <div className="flex items-center justify-between">
              <span className="font-medium text-brand-brown">Total</span>
              <span className="text-xl font-bold text-brand-orange">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-[#25D366] text-white hover:bg-[#20BD5A]"
              size="lg"
            >
              <MessageCircle className="size-5" />
              Finalizar no WhatsApp
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
