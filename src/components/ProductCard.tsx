import { useCart } from "@/lib/cart";
import { BRAND } from "@/config/brand";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, setOpen } = useCart();
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 border border-gold/60 bg-background/40 px-2 py-1 text-[9px] uppercase tracking-luxury text-gold backdrop-blur">
          {product.family}
        </span>
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl text-foreground">{product.name}</h3>
          <span className="font-display text-xl text-gold">
            {BRAND.currencySymbol}
            {product.price}
          </span>
        </div>
        <p className="mt-1 text-sm italic text-muted-foreground">{product.tagline}</p>
        <p className="mt-3 text-[10px] uppercase tracking-luxury text-muted-foreground">
          {product.notes}
        </p>
        <button
          onClick={() => {
            add(product.id);
            setOpen(true);
          }}
          className="mt-5 border border-border py-3 text-[11px] uppercase tracking-luxury text-foreground transition-colors hover:border-gold hover:bg-gradient-gold hover:text-primary-foreground"
        >
          Add to Bag
        </button>
      </div>
    </article>
  );
}
