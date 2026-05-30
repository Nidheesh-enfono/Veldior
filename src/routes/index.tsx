import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { BRAND } from "@/config/brand";
import { whatsappInquiryUrl } from "@/lib/whatsapp";
import hero from "@/assets/hero-perfume.png";

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
      <section className="relative isolate overflow-hidden bg-noir pt-8 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-24 pb-32 lg:pt-32 lg:pb-40 md:grid-cols-2 md:items-center md:gap-6 md:pb-32 md:pt-20">
          <div>
            <p className="text-[11px] uppercase tracking-luxury text-gold">{BRAND.tagline}</p>

            <h1 className="mt-8 max-w-[10ch] font-display text-6xl font-semibold leading-[0.92] tracking-[-0.04em] text-foreground md:text-8xl lg:text-[7rem]">
              Crafted
              <span className="mt-2 block italic text-gold">For Presence</span>
            </h1>

            <p className="mt-8 max-w-sm text-[15px] leading-7 text-muted-foreground">
              Refined fragrances inspired by depth, warmth, and quiet confidence.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-gradient-gold px-8 py-4 text-xs uppercase tracking-luxury text-primary-foreground transition-all duration-500
                hover:-translate-y-0.5
                hover:shadow-gold"
              >
                Shop Collection
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={whatsappInquiryUrl(
                  `Hello ${BRAND.name}, I'd like a fragrance recommendation.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
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
              className="
              w-full object-cover
              scale-[1.04]
              drop-shadow-[0_40px_120px_rgba(0,0,0,0.6)]
              "
            />
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="hidden sm:flex items-center justify-center  gap-6 px-6 py-6 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <span>Hand-blended in {BRAND.city.split(" · ")[0]}</span>

            <span className="text-gold">◆</span>

            <span>WhatsApp Support</span>

            <span className="text-gold">◆</span>

            <span>Quality Ingredients</span>
          </div>

          <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:hidden">
            <span>Hand-blended in {BRAND.city.split(" · ")[0]}</span>
            <span>WhatsApp Support</span>
            <span>Quality Ingredients</span>
          </div>
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
