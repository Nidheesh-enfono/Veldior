import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "Collection — VELDIOR" },
      {
        name: "description",
        content:
          "Explore the complete VELDIOR fragrance collection — oriental, floral, woody and fresh. Order with our WhatsApp support.",
      },
      { property: "og:title", content: "VELDIOR Collection" },
    ],
  }),
});

const families = ["All", "Oriental", "Floral", "Woody", "Fresh"] as const;

function Shop() {
  const [filter, setFilter] = useState<(typeof families)[number]>("All");
  const list = filter === "All" ? products : products.filter((p) => p.family === filter);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-noir">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,color-mix(in_oklab,var(--gold)_12%,transparent),transparent_65%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-8 text-center md:pb-16 md:pt-10">
          <p className="text-[10px] uppercase tracking-luxury text-gold">The Collection</p>

          <div className="mx-auto my-4 flex max-w-xs items-center justify-center gap-3 md:my-5">
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-gold/50" />
            <span className="font-display text-[10px] text-gold/80">✦</span>
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-gold/50" />
          </div>

          <h1 className="font-display text-5xl font-light leading-[1.08] tracking-display md:text-7xl">
            Every Scent, <span className="italic text-gold">A Story</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed tracking-wide text-muted-foreground md:mt-5">
            Six fragrances, each composed around a single defining note. Add to your bag and
            complete your order instantly through WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {families.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`border px-5 py-2 text-[10px] uppercase tracking-luxury transition-colors ${
                filter === f
                  ? "border-gold bg-gradient-gold text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
