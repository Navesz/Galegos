import type { CartItem } from "@/types/menu";
import type { CustomerInfo } from "@/types/customer";
import { PAYMENT_OPTIONS } from "@/types/customer";
import { formatFullAddress } from "@/lib/customer-storage";
import { formatPrice, getCartLineTotal } from "./menu";

const WHATSAPP_NUMBER = "5524999914039";

function getPaymentLabel(method: CustomerInfo["paymentMethod"]) {
  return PAYMENT_OPTIONS.find((option) => option.id === method)?.label ?? method;
}

export function buildWhatsAppUrl(items: CartItem[], customer: CustomerInfo) {
  const lines = items.flatMap((item) => {
    const itemLine = `• ${item.product.name} x${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`;
    const extraLines = item.extras.map((extra) => {
      const extraTotal =
        extra.product.price * extra.quantity * item.quantity;
      const perUnit = item.quantity > 1 ? ` (${extra.quantity} em cada)` : "";
      return `   + ${extra.product.name} x${extra.quantity}${perUnit} — ${formatPrice(extraTotal)}`;
    });

    return extraLines.length > 0 ? [itemLine, ...extraLines] : [itemLine];
  });

  const total = items.reduce((sum, item) => sum + getCartLineTotal(item), 0);

  const message = [
    "Olá! Gostaria de fazer um pedido:",
    "",
    "*Itens:*",
    ...lines,
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "*Dados para entrega:*",
    `Nome: ${customer.name.trim()}`,
    `Endereço:`,
    formatFullAddress(customer),
    `Pagamento: ${getPaymentLabel(customer.paymentMethod)}`,
    "",
    "Pedido feito pelo cardápio Galegos.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_PHONE_DISPLAY = "+55 24 99991-4039";
