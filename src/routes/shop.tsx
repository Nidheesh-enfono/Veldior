import { createFileRoute } from "@tanstack/react-router";

import { SlidersHorizontal, Sparkles } from "lucide-react";

import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "The Collection — VELDIOR" },
      {
        name: "description",
        content:
          "Explore the VELDIOR fragrance collection crafted with oud, amber, woods, florals, and modern luxury compositions.",
      },
    ],
  }),
});

function Shop() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-noir pt-28 md:pt-36">
        {/* AMBIENT GLOW */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 pb-6 text-center md:pb-16">
          <p className="text-[10px] uppercase tracking-luxury text-gold">The Collection</p>

          <h1 className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-7xl">
            Our Fragrances
          </h1>

          <div className="mx-auto mt-8 h-px w-16 bg-gold/30" />

          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-8 text-muted-foreground">
            Explore refined fragrance compositions inspired by elegance, depth, woods, amber,
            florals, and timeless luxury.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* TOP BAR */}
        {/* <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-luxury text-gold">Curated Selection</p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">Discover The Collection</h2>
          </div>

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-border/60
              bg-card/30
              px-5
              py-3
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-4 w-4 text-gold" />

            <span className="text-[11px] uppercase tracking-luxury text-muted-foreground">
              {products.length} Fragrances
            </span>
          </div>
        </div> */}

        {/* GRID */}
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-24 text-center">
          <div className="mx-auto h-px w-20 bg-gold/20" />

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-muted-foreground">
            Every fragrance is crafted to create depth, elegance, and presence — designed for those
            who appreciate refined luxury.
          </p>
        </div>
      </section>
    </>
  );
}
