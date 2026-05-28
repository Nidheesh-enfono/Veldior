import { createFileRoute } from "@tanstack/react-router";

import { BRAND } from "@/config/brand";

import aboutImage from "@/assets/hero-perfume.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — VELDIOR" },
      {
        name: "description",
        content:
          "Discover the philosophy behind VELDIOR fragrances — crafted with depth, elegance, and attention to detail.",
      },
      { property: "og:title", content: "About VELDIOR" },
    ],
  }),
});

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-noir pt-28 md:pt-36">
        {/* BACKGROUND GLOW */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 pb-24 text-center">
          <p className="text-[10px] uppercase tracking-luxury text-gold">Our Story</p>

          <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Crafted
            <span className="block italic text-gold">Beyond Scent</span>
          </h1>

          <div className="mx-auto mt-8 h-px w-16 bg-gold/30" />

          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-8 text-muted-foreground">
            {BRAND.name} was created with a vision to bring refined fragrances inspired by elegance,
            depth, and timeless luxury.
          </p>

          {/* <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-muted-foreground">
            Every fragrance is blended carefully using premium ingredients and crafted to leave a
            lasting impression.
          </p> */}

          {/* OPTIONAL MINI TAGLINE */}
          {/* <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-gold/20" />

            <span className="text-[10px] uppercase tracking-luxury text-muted-foreground">
              Crafted For Presence
            </span>

            <div className="h-px w-10 bg-gold/20" />
          </div> */}
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="border-y border-border/60 bg-card/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-6 px-6 py-6 text-[10px] uppercase tracking-luxury text-muted-foreground">
          <span>Small Batch Crafted</span>

          <span className="text-gold">◆</span>

          <span>Premium Ingredients</span>

          <span className="text-gold">◆</span>

          <span>Long Lasting Fragrances</span>

          <span className="text-gold">◆</span>

          <span>WhatsApp Support</span>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* CARD */}
          <div className="rounded-[2rem] border border-white/[0.06] bg-card/30 p-10 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-luxury text-gold">Craftsmanship</p>

            <h2 className="mt-4 font-display text-4xl leading-tight">
              Made with
              <span className="block italic text-gold">attention to detail</span>
            </h2>

            <div className="mt-6 h-px w-14 bg-gold/30" />

            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              Every VELDIOR fragrance is blended in small batches to maintain consistency, richness,
              and refinement in every bottle.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-[2rem] border border-white/[0.06] bg-card/30 p-10 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-luxury text-gold">Ingredients</p>

            <h2 className="mt-4 font-display text-4xl leading-tight">
              Carefully
              <span className="block italic text-gold">selected notes</span>
            </h2>

            <div className="mt-6 h-px w-14 bg-gold/30" />

            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              We use premium ingredients including oud, amber, rose, woods, spices, and musks
              sourced from trusted suppliers.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-[2rem] border border-white/[0.06] bg-card/30 p-10 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-luxury text-gold">Philosophy</p>

            <h2 className="mt-4 font-display text-4xl leading-tight">
              Luxury should
              <span className="block italic text-gold">feel personal</span>
            </h2>

            <div className="mt-6 h-px w-14 bg-gold/30" />

            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              Our fragrances are designed to create identity, confidence, and memory — not just
              scent.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-[2rem] border border-white/[0.06] bg-card/30 p-10 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-luxury text-gold">Support</p>

            <h2 className="mt-4 font-display text-4xl leading-tight">
              Real support
              <span className="block italic text-gold">through WhatsApp</span>
            </h2>

            <div className="mt-6 h-px w-14 bg-gold/30" />

            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              Need help choosing a fragrance? Our team provides direct WhatsApp support for
              recommendations and orders.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/[0.06] bg-card/30 px-10 py-20 text-center backdrop-blur-xl">
          <p className="font-display text-4xl italic leading-tight md:text-5xl">
            “A fragrance is not what you wear —
            <br />
            it is what people remember.”
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-gold/30" />

          <p className="mt-6 text-[10px] uppercase tracking-luxury text-gold">VELDIOR</p>
        </div>
      </section>
    </>
  );
}
