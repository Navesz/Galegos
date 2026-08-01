"use client";

import { useState } from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { CartItemRow } from "@/components/cart/cart-item";
import { CheckoutForm } from "@/components/cart/checkout-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCustomerInfo } from "@/hooks/use-customer-info";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useNavigation } from "@/lib/navigation-context";

export function CartView() {
  const { items, totalPrice } = useCart();
  const { setActiveTab } = useNavigation();
  const { customer, updateCustomer, isComplete } = useCustomerInfo();
  const [showErrors, setShowErrors] = useState(false);

  function handleCheckout() {
    if (items.length === 0) return;

    if (!isComplete) {
      setShowErrors(true);
      return;
    }

    window.open(
      buildWhatsAppUrl(items, customer),
      "_blank",
      "noopener,noreferrer",
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center px-4 pt-16 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-sm">
          <ShoppingBag className="size-9 text-brand-brown/25" />
        </div>
        <h2 className="mt-5 text-lg font-bold text-brand-brown">
          Carrinho vazio
        </h2>
        <p className="mt-2 max-w-xs text-sm text-brand-brown/55">
          Adicione itens do cardápio para montar seu pedido.
        </p>
        <Button
          onClick={() => setActiveTab("cardapio")}
          className="mt-8 h-12 w-full max-w-xs rounded-2xl bg-brand-orange font-bold text-white hover:bg-brand-orange/90"
        >
          Ir ao cardápio
        </Button>
      </div>
    );
  }

  return (
    <div className="px-4 pb-4">
      <div className="mb-4 pt-2">
        <h1 className="text-xl font-extrabold text-brand-brown">Seu pedido</h1>
        <p className="text-sm text-brand-brown/55">
          Toque em <strong>Extras</strong> para personalizar cada item
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-brand-brown/8 bg-white shadow-sm">
        {items.map((item) => (
          <CartItemRow key={item.cartId} item={item} />
        ))}
      </div>

      <CheckoutForm
        customer={customer}
        onChange={updateCustomer}
        showErrors={showErrors}
      />

      <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-brand-brown">Total</span>
          <span className="text-2xl font-extrabold text-brand-orange">
            {formatPrice(totalPrice)}
          </span>
        </div>

        <Separator className="my-4" />

        {!isComplete && (
          <p className="mb-3 text-center text-xs text-brand-brown/50">
            Preencha nome, endereço completo e pagamento para finalizar
          </p>
        )}

        {showErrors && !isComplete && (
          <p className="mb-3 text-center text-xs text-red-500">
            Complete os dados acima antes de enviar
          </p>
        )}

        <Button
          onClick={handleCheckout}
          size="lg"
          className="h-13 w-full rounded-2xl bg-[#25D366] text-base font-bold text-white hover:bg-[#20BD5A]"
        >
          <MessageCircle className="size-5" />
          Finalizar no WhatsApp
        </Button>
      </div>
    </div>
  );
}
