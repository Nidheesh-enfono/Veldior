import { Link } from "@tanstack/react-router";

import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, setOpen } = useCart();

  // ORIGINAL PRICE
  const originalPrice = Math.round(product.price * 1.25);

  // DISCOUNT %
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <article className="group flex flex-col">
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-white/[0.03] bg-secondary">
          {/* IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={900}
            height={1200}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1400ms]
              group-hover:scale-[1.04]
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* FAMILY */}
          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              border
              border-gold/40
              bg-background/40
              px-3
              py-1.5
              text-[9px]
              uppercase
              tracking-luxury
              text-gold
              backdrop-blur-xl
            "
          >
            {product.family}
          </span>

          {/* DISCOUNT */}
          <span
            className="
              absolute
              right-4
              top-4
              rounded-full
              bg-gradient-gold
              px-3
              py-1.5
              text-[9px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-primary-foreground
              shadow-gold
            "
          >
            {discount}% OFF
          </span>

          {/* SIZE */}
          <span
            className="
              absolute
              bottom-4
              right-4
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-white/70
            "
          >
            {product.size}
          </span>
        </div>
      </Link>

      {/* CONTENT */}
      <div className="mt-5 flex flex-1 flex-col">
        <Link to="/product/$id" params={{ id: product.id }} className="block">
          {/* TITLE */}
          <h3
            className="
              font-display
              text-2xl
              text-foreground
              transition-colors
              duration-500
              group-hover:text-gold
            "
          >
            {product.name}
          </h3>

          {/* TAGLINE */}
          <p className="mt-1 text-sm italic text-muted-foreground">{product.tagline}</p>

          {/* PRICE */}
          <div className="mt-4 flex items-center gap-3">
            {/* SALE PRICE */}
            <span className="text-lg font-medium text-gold">{formatPrice(product.price)}</span>

            {/* ORIGINAL PRICE */}
            <span
              className="
                text-sm
                text-muted-foreground
                line-through
                opacity-70
              "
            >
              {formatPrice(originalPrice)}
            </span>
          </div>
        </Link>

        {/* BUTTON */}
        <button
          type="button"
          onClick={() => {
            add(product.id);
            setOpen(true);
          }}
          className="
            mt-5
            overflow-hidden
            rounded-full
            border
            border-border
            bg-card/30
            py-3
            text-[11px]
            uppercase
            tracking-luxury
            text-foreground
            backdrop-blur-xl
            luxury-transition
            hover:border-gold/40
            hover:bg-gradient-gold
            hover:text-primary-foreground
          "
        >
          Add to Bag
        </button>
      </div>
    </article>
  );
}
