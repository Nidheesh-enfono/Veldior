import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, setOpen } = useCart();

  return (
    <article className="group flex flex-col">
      <Link to="/product/$id" params={{ id: product.id }} className="block">
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
          <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            {product.size}
          </span>
        </div>
      </Link>
      <div className="mt-5 flex flex-1 flex-col">
        <Link to="/product/$id" params={{ id: product.id }} className="block">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-gold">
              {product.name}
            </h3>
            <span className="text-sm text-gold">{formatPrice(product.price)}</span>
          </div>
          <p className="mt-1 text-sm italic text-muted-foreground">{product.tagline}</p>
        </Link>
        <button
          type="button"
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
