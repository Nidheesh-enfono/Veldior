import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products, formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { whatsappInquiryUrl } from "@/lib/whatsapp";

function NotFoundProduct() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Fragrance not found</h1>
      <Link to="/shop" className="mt-8 inline-block text-gold underline-offset-8 hover:underline">
        Back to collection
      </Link>
    </div>
  );
}

function ProductErrorFallback({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Something went wrong</h1>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-8 border border-gold px-6 py-3 text-[11px] uppercase tracking-[0.32em] text-gold hover:bg-gold hover:text-ink"
      >
        Try again
      </button>
    </div>
  );
}

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  notFoundComponent: NotFoundProduct,
  errorComponent: ProductErrorFallback,
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Veldior` },
          { name: "description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  const inquiry = whatsappInquiryUrl(
    `Hello Veldior, I'd like to know more about ${product.name} (${product.size}) — ${formatPrice(
      product.price,
    )}.`,
  );

  return (
    <div>
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink">
            <img
              src={product.image}
              alt={product.name}
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.32em] text-gold">
              {product.family}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="text-[10px] uppercase tracking-[0.42em] text-gold">
            Extrait de Parfum · {product.size}
          </div>
          <h1 className="mt-4 font-display text-5xl leading-tight">{product.name}</h1>
          <p className="mt-3 text-lg italic text-muted-foreground">{product.tagline}</p>

          <div className="hairline my-8" />

          <p className="leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-10 space-y-6">
            {(["top", "heart", "base"] as const).map((k) => (
              <div key={k} className="grid grid-cols-[auto_1fr] gap-6">
                <div className="text-[10px] uppercase tracking-[0.32em] text-gold">{k} notes</div>
                <div className="text-sm text-foreground">{product.notes[k].join(" · ")}</div>
              </div>
            ))}
          </div>

          <div className="hairline my-10" />

          <div className="flex items-baseline justify-between">
            <div className="font-display text-4xl text-gold-gradient">
              {formatPrice(product.price)}
            </div>
            <div className="flex items-center border border-border">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="h-12 w-12 text-gold hover:bg-secondary"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="h-12 w-12 text-gold hover:bg-secondary"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => {
                add(product.id, qty);
                setAdded(true);
                setTimeout(() => setAdded(false), 2000);
              }}
              className="group inline-flex items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-ink transition-all hover:bg-transparent hover:text-gold"
            >
              {added ? "Added to cart ✓" : "Add to cart"}
            </button>
            <a
              href={inquiry}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-border px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-muted-foreground transition-all hover:border-gold hover:text-gold"
            >
              Inquire on WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/40 pt-6 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <div>Free shipping ₹3000+</div>
            <div>Ships in 48 hrs</div>
            <div>Hand-poured</div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="hairline mb-16" />
        <h2 className="font-display text-3xl">You may also love</h2>
        <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-3">
          {related.map((p) => (
            <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-ink">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-xl">{p.name}</h3>
                <span className="text-sm text-gold">{formatPrice(p.price)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
