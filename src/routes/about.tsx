import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/config/brand";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — VELDIOR" },
      {
        name: "description",
        content:
          "Learn about VELDIOR, a perfume brand focused on quality ingredients, small-batch production, and personal customer support.",
      },
      { property: "og:title", content: "About VELDIOR" },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="bg-noir">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] uppercase tracking-luxury text-gold">Our Story</p>

          <h1 className="mt-4 font-display text-5xl md:text-7xl">
            About VELDIOR
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            {BRAND.name} started in {BRAND.city.split(" · ")[0]} with a goal of
            creating quality fragrances using carefully selected ingredients and
            small-batch production.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:gap-24">
        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold">
            Craftsmanship
          </p>

          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Made with care.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Every VELDIOR fragrance is blended in small batches to maintain
            consistency and quality in every bottle.
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold">
            Ingredients
          </p>

          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Carefully selected.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            We use quality ingredients including oud, rose, amber, woods, and
            spices sourced from trusted suppliers.
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold">
            Small Batch Production
          </p>

          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Limited quantities.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Our fragrances are produced in limited quantities to help maintain
            attention to detail and product quality.
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold">
            Customer Support
          </p>

          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Real support on WhatsApp.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Need help choosing a fragrance or placing an order? Message us on
            WhatsApp and our team will assist you directly.
          </p>
        </div>
      </section>
    </>
  );
}