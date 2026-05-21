import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BRAND } from "@/config/brand";
import { whatsappInquiryUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Concierge — VELDIOR" },
      {
        name: "description",
        content:
          "Speak with the VELDIOR concierge on WhatsApp. Recommendations, custom blends, gifting and worldwide delivery.",
      },
      { property: "og:title", content: "VELDIOR Concierge" },
    ],
  }),
});

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    const text = `Hello ${BRAND.name},\n\nI'm ${name || "—"}.\n\n${message || "I'd like to learn more about your fragrances."}`;
    window.open(whatsappInquiryUrl(text), "_blank");
  };

  return (
    <>
      <section className="bg-noir">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <p className="text-[10px] uppercase tracking-luxury text-gold">Personal Concierge</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">Let's Talk Scent</h1>
          <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
            For recommendations, custom blends or gifting — message our concierge directly on WhatsApp.
            Every conversation is with a real perfumer.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-16 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Atelier</h2>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li>
              <span className="block text-[10px] uppercase tracking-luxury text-gold">Email</span>
              {BRAND.email}
            </li>
            <li>
              <span className="block text-[10px] uppercase tracking-luxury text-gold">Locations</span>
              {BRAND.city}
            </li>
            <li>
              <span className="block text-[10px] uppercase tracking-luxury text-gold">Hours</span>
              Mon — Sat · 10:00 – 19:00 CET
            </li>
          </ul>
        </div>

        <div className="border border-border bg-card/40 p-8">
          <h2 className="font-display text-3xl text-gold">Message Us</h2>
          <p className="mt-2 text-xs uppercase tracking-luxury text-muted-foreground">
            Sends directly via WhatsApp
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-luxury text-muted-foreground">
                Your Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="Élise VELDIOR"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-luxury text-muted-foreground">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="I'd love a recommendation for an evening fragrance…"
              />
            </div>
            <button
              onClick={send}
              className="w-full bg-gradient-gold py-4 text-xs uppercase tracking-luxury text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              Send on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
