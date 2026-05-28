import { createFileRoute, Link } from "@tanstack/react-router";
import { products, formatPrice } from "@/data/products";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "The Collection — Veldior" },
      {
        name: "description",
        content:
          "Browse the full Veldior collection of hand-composed luxury fragrances: oud, amber, rose and chypre compositions.",
      },
    ],
  }),
});

function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="flex flex-col gap-4 border-b border-border/40 pb-12">
        <div className="text-[10px] uppercase tracking-[0.42em] text-gold">The Collection</div>
        <h1 className="font-display text-5xl md:text-6xl">All Fragrances</h1>
        <p className="max-w-xl text-muted-foreground">
          Four compositions, each aged and bottled in our atelier. Concentrations are extrait de
          parfum unless noted.
        </p>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-ink">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={900}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.32em] text-gold">
                N° 0{i + 1}
              </span>
              <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {p.size}
              </span>
            </div>
            <div className="mt-6 flex items-baseline justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl">{p.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {p.family}
                </p>
              </div>
              <div className="text-sm text-gold">{formatPrice(p.price)}</div>
            </div>
            <p className="mt-3 text-sm italic text-muted-foreground">{p.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
