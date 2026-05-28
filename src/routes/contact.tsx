import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";

import { Mail, MapPin, Clock3, MessageCircle } from "lucide-react";

import { BRAND } from "@/config/brand";
import { whatsappInquiryUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us — VELDIOR" },
      {
        name: "description",
        content:
          "Connect with VELDIOR for fragrance recommendations, gifting, and premium support.",
      },
      { property: "og:title", content: "Contact VELDIOR" },
    ],
  }),
});

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappUrl = whatsappInquiryUrl(
    `Hello ${BRAND.name},

I'm ${name || "—"}.

${message || "I'd like to learn more about your fragrances."}`,
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-noir pt-28 md:pt-36">
        {/* AMBIENT GLOW */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 pb-12 text-center md:pb-16">
          <p className="text-[10px] uppercase tracking-luxury text-gold">Personal Assistance</p>

          <h1 className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-7xl">
            Let's Talk
          </h1>

          <div className="mx-auto mt-8 h-px w-16 bg-gold/30" />

          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-8 text-muted-foreground">
            Need a fragrance recommendation, gifting assistance, or help placing an order? Connect
            with us directly through WhatsApp.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT INFO */}
          <div className="rounded-[2rem] border border-white/[0.06] bg-card/30 p-10 backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-luxury text-gold">Contact Information</p>

            <h2 className="mt-4 font-display text-4xl leading-tight">Get in Touch</h2>

            <div className="mt-8 space-y-7">
              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/40">
                  <Mail className="h-4 w-4 text-gold" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-luxury text-muted-foreground">
                    Email
                  </p>

                  <p className="mt-2 text-sm text-foreground/90">{BRAND.email}</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/40">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-luxury text-muted-foreground">
                    Location
                  </p>

                  <p className="mt-2 text-sm text-foreground/90">{BRAND.city}</p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/40">
                  <Clock3 className="h-4 w-4 text-gold" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-luxury text-muted-foreground">
                    Working Hours
                  </p>

                  <p className="mt-2 text-sm text-foreground/90">Mon — Sun · 9am — 9pm</p>
                </div>
              </div>
            </div>

            {/* QUOTE */}
            <div className="mt-12 border-t border-white/[0.06] pt-8">
              <p className="font-display text-2xl italic leading-relaxed text-foreground">
                “Luxury begins with attention to detail.”
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-white/[0.06] bg-card/30 p-10 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <MessageCircle className="h-5 w-5 text-primary-foreground" />
              </div>

              <div>
                <h2 className="font-display text-3xl text-foreground">Message Us</h2>

                <p className="mt-1 text-[10px] uppercase tracking-luxury text-muted-foreground">
                  Sends directly via WhatsApp
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {/* NAME */}
              <div>
                <label className="text-[10px] uppercase tracking-luxury text-muted-foreground">
                  Your Name
                </label>

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="
                    mt-3
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-border/60
                    bg-background/50
                    px-5
                    text-sm
                    text-foreground
                    outline-none
                    transition-colors
                    focus:border-gold/50
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-[10px] uppercase tracking-luxury text-muted-foreground">
                  Message
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  placeholder="I'd love a recommendation for an evening fragrance..."
                  className="
                    mt-3
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-border/60
                    bg-background/50
                    px-5
                    py-4
                    text-sm
                    text-foreground
                    outline-none
                    transition-colors
                    focus:border-gold/50
                  "
                />
              </div>

              {/* BUTTON */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gradient-gold
                  text-xs
                  uppercase
                  tracking-luxury
                  text-primary-foreground
                  transition-transform
                  duration-500
                  hover:scale-[1.01]
                "
              >
                Send on WhatsApp
                <MessageCircle className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
