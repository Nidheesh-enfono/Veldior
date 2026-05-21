import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/config/brand";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "Maison — VELDIOR" },
      {
        name: "description",
        content:
          "The VELDIOR story — a maison founded on rare essences, slow craft and obsessive devotion to the art of perfumery.",
      },
      { property: "og:title", content: "The VELDIOR Maison" },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="bg-noir">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] uppercase tracking-luxury text-gold">Established 2014</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">The Maison</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            {BRAND.name} was born in a small atelier in {BRAND.city.split(" · ")[0]} — a single perfumer,
            an obsession with raw materials, and a quiet refusal of the ordinary.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:gap-24">
        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold">Slow Craft</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Months, not minutes.</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Every VELDIOR fragrance is aged for a minimum of six months in dark oak. The essences settle,
            soften, and reveal a depth that rushed production simply cannot achieve.
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold">Rare Essences</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Sourced by hand.</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Bulgarian rose from the Valley of Roses. Cambodian oud from sustainable producers.
            Ambergris ethically gathered from the Atlantic shore. We source what we love.
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold">Small Batches</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">300 bottles, no more.</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Each fragrance is produced in batches of three hundred. When a batch sells out, we begin the
            slow craft again. Nothing is rushed. Nothing is mass.
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-luxury text-gold">Personal Concierge</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">A real human, on WhatsApp.</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Every order is confirmed personally. Want a recommendation? A custom blend? Gift wrapping?
            Message our concierge. You'll always speak with a perfumer, never a bot.
          </p>
        </div>
      </section>
    </>
  );
}
