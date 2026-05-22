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
      <section className="border-b border-border/60 bg-noir">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <p className="text-[10px] uppercase tracking-luxury text-gold">The Collection</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">Every Scent, A Story</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
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
