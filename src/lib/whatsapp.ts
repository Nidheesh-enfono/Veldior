import { BRAND } from "@/config/brand";
import type { Product } from "@/data/products";
import type { CartItem } from "@/lib/cart";

/** Digits only, international format (no + or leading 0). */
export function normalizeWhatsAppNumber(number: string): string {
  const digits = number.replace(/\D/g, "");
  if (digits.startsWith("00")) return digits.slice(2);
  return digits;
}

function buildWhatsAppUrl(text: string): string {
  const phone = normalizeWhatsAppNumber(BRAND.whatsappNumber);
  if (!phone) return "#";

  const params = new URLSearchParams({
    phone,
    text,
  });

  // api.whatsapp.com is more reliable than wa.me across desktop & mobile browsers
  return `https://api.whatsapp.com/send?${params.toString()}`;
}

export function whatsappCheckoutUrl(items: (CartItem & { product: Product })[], subtotal: number) {
  const lines = [
    `*New Order — ${BRAND.name}*`,
    "",
    ...items.map(
      (i) =>
        `• ${i.product.name} × ${i.qty}  —  ${BRAND.currencySymbol}${(i.qty * i.product.price).toFixed(0)}`,
    ),
    "",
    `*Subtotal:* ${BRAND.currencySymbol}${subtotal.toFixed(0)} ${BRAND.currency}`,
    "",
    "Please confirm availability and share delivery details. Thank you.",
  ];
  return buildWhatsAppUrl(lines.join("\n"));
}

export function whatsappInquiryUrl(message: string) {
  return buildWhatsAppUrl(message);
}
