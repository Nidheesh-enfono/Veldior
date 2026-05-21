import { BRAND } from "@/config/brand";
import type { Product } from "@/data/products";
import type { CartItem } from "@/lib/cart";

export function whatsappCheckoutUrl(items: (CartItem & { product: Product })[], subtotal: number) {
  const lines = [
    `*New Order — ${BRAND.name}*`,
    "",
    ...items.map(
      (i) => `• ${i.product.name} × ${i.qty}  —  ${BRAND.currencySymbol}${(i.qty * i.product.price).toFixed(0)}`,
    ),
    "",
    `*Subtotal:* ${BRAND.currencySymbol}${subtotal.toFixed(0)} ${BRAND.currency}`,
    "",
    "Please confirm availability and share delivery details. Thank you.",
  ];
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function whatsappInquiryUrl(message: string) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
