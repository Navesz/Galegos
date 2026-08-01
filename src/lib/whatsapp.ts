import type { CartItem } from "@/types/menu";
import { formatPrice } from "./menu";

const WHATSAPP_NUMBER = "5524999914039";

export function buildWhatsAppUrl(items: CartItem[]) {
  const lines = items.map(
    (item) =>
      `• ${item.product.name} x${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`,
  );

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const message = [
    "Olá! Gostaria de fazer um pedido:",
    "",
    ...lines,
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "Pedido feito pelo cardápio Galegos.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_PHONE_DISPLAY = "+55 24 99991-4039";
