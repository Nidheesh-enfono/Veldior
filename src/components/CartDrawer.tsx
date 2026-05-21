import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { BRAND } from "@/config/brand";
import { whatsappCheckoutUrl } from "@/lib/whatsapp";
import { useEffect } from "react";

export function CartDrawer() {
  const { isOpen, setOpen, detailed, subtotal, setQty, remove, count } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const checkout = () => {
    if (!detailed.length) return;
    window.open(whatsappCheckoutUrl(detailed, subtotal), "_blank");
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="text-[10px] uppercase tracking-luxury text-muted-foreground">Your Selection</p>
            <h3 className="font-display text-2xl text-gold">Atelier Bag</h3>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-gold"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {detailed.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-2xl text-foreground">Your bag is empty</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Discover a fragrance worthy of your story.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 border-b border-gold pb-1 text-xs uppercase tracking-luxury text-gold"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {detailed.map((i) => (
                <li key={i.id} className="flex gap-4 py-5">
                  <img
                    src={i.product.image}
                    alt={i.product.name}
                    className="h-24 w-20 flex-shrink-0 object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-display text-lg leading-tight">{i.product.name}</p>
                        <p className="text-[10px] uppercase tracking-luxury text-muted-foreground">
                          {i.product.family} · 100ml
                        </p>
                      </div>
                      <button
                        onClick={() => remove(i.id)}
                        className="text-muted-foreground hover:text-gold"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => setQty(i.id, i.qty - 1)}
                          className="px-2 py-1 hover:text-gold"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-8 text-center text-sm">{i.qty}</span>
                        <button
                          onClick={() => setQty(i.id, i.qty + 1)}
                          className="px-2 py-1 hover:text-gold"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="font-display text-lg text-gold">
                        {BRAND.currencySymbol}
                        {(i.qty * i.product.price).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {count > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-luxury text-muted-foreground">Subtotal</span>
              <span className="font-display text-3xl text-gold">
                {BRAND.currencySymbol}
                {subtotal.toFixed(0)}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Final confirmation, shipping & payment handled on WhatsApp.
            </p>
            <button
              onClick={checkout}
              className="mt-4 flex w-full items-center justify-center gap-3 bg-gradient-gold py-4 text-xs font-medium uppercase tracking-luxury text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.519 5.265l-.999 3.648 3.969-.612zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}
