import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { BRAND } from "@/config/brand";
import { whatsappInquiryUrl } from "@/lib/whatsapp";
import hero from "@/assets/hero-perfume.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VELDIOR — Premium Fragrances" },
      {
        name: "description",
        content:
          "Discover VELDIOR fragrances made with quality ingredients. Browse our collection and order directly through WhatsApp.",
      },
      { property: "og:image", content: hero },
    ],
  }),
});

function Index() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-noir">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:gap-6 md:pb-32 md:pt-24">
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">{BRAND.tagline}</p>

            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance text-foreground md:text-7xl lg:text-8xl">
              Find Your
              <span className="block italic text-gold">Signature Fragrance</span>
            </h1>

            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Explore our collection of carefully crafted fragrances made with quality ingredients.
              Order directly through WhatsApp.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-gradient-gold px-8 py-4 text-xs uppercase tracking-luxury text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Shop Collection
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={whatsappInquiryUrl(
                  `Hello ${BRAND.name}, I'd like a fragrance recommendation.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="border-b border-gold/60 pb-1 text-xs uppercase tracking-luxury text-gold hover:border-gold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/20 via-transparent to-transparent blur-3xl" />

            <img
              src={hero}
              alt="VELDIOR fragrance collection"
              width={1600}
              height={1200}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 py-6 text-[10px] uppercase tracking-luxury text-muted-foreground">
          <span>Hand-blended in {BRAND.city.split(" · ")[0]}</span>

          <span className="text-gold">◆</span>

          <span>WhatsApp Support</span>

          <span className="text-gold">◆</span>

          <span>Quality Ingredients</span>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-luxury text-gold">Our Collection</p>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">Featured Fragrances</h2>
          </div>

          <Link
            to="/shop"
            className="border-b border-gold/60 pb-1 text-xs uppercase tracking-luxury text-gold"
          >
            View All →
          </Link>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      {/* <section className="bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-[10px] uppercase tracking-luxury text-gold">
            About VELDIOR
          </p>

          <h2 className="mt-6 font-display text-4xl leading-tight text-balance md:text-5xl">
            Fragrances made with quality ingredients and attention to detail.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground">
            We focus on creating fragrances that are long-lasting, comfortable
            to wear, and suitable for everyday use. Each fragrance is carefully
            crafted to deliver a balanced and enjoyable experience.
          </p>
        </div>
      </section> */}
      {/* PHILOSOPHY */}
      <section className="bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-[10px] uppercase tracking-luxury text-gold">Philosophy</p>
          <h2 className="mt-6 font-display text-4xl italic leading-tight text-balance md:text-5xl">
            “A perfume is not what you wear —
            <br />
            it is the memory you leave behind.”
          </h2>
          {/* <p className="mt-8 text-sm uppercase tracking-luxury text-muted-foreground">
            — Élise VELDIOR, Founder
          </p> */}
        </div>
      </section>
    </>
  );
}
