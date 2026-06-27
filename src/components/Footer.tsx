import { Link } from "@tanstack/react-router";

import { Instagram, MessageCircle, Mail } from "lucide-react";

import logo from "@/assets/veldior-logo-only.png";

import { BRAND } from "@/config/brand";
import { whatsappInquiryUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div className="md:col-span-2">
            <Link to="/" className="group inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <img
                  src={logo}
                  alt={BRAND.name}
                  className="relative h-14 w-14 object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <span
                className="
                  font-display
                  text-2xl
                  tracking-[0.25em]
                  text-gold
                  transition-colors
                  duration-500
                  group-hover:text-foreground
                "
              >
                VELDIOR
              </span>
            </Link>

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                leading-7
                text-muted-foreground
              "
            >
              Refined fragrances inspired by depth, warmth, and quiet confidence. Crafted to stay
              remembered.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappInquiryUrl(`Hello ${BRAND.name}, I'd like to learn more.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border/60
                  bg-card/30
                  backdrop-blur-xl
                  luxury-transition
                  hover:border-gold/40
                  hover:bg-gold/[0.04]
                "
              >
                <MessageCircle className="h-4 w-4 text-muted-foreground transition-colors duration-500 group-hover:text-gold" />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border/60
                  bg-card/30
                  backdrop-blur-xl
                  luxury-transition
                  hover:border-gold/40
                  hover:bg-gold/[0.04]
                "
              >
                <Mail className="h-4 w-4 text-muted-foreground transition-colors duration-500 group-hover:text-gold" />
              </a>

              <a
                href="https://www.instagram.com/veldior.fragrance_/"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border/60
                  bg-card/30
                  backdrop-blur-xl
                  luxury-transition
                  hover:border-gold/40
                  hover:bg-gold/[0.04]
                "
              >
                <Instagram className="h-4 w-4 text-muted-foreground transition-colors duration-500 group-hover:text-gold" />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-gold">Explore</h4>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/shop" className="transition-colors duration-500 hover:text-gold">
                  Collection
                </Link>
              </li>

              <li>
                <Link to="/about" className="transition-colors duration-500 hover:text-gold">
                  Our Story
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition-colors duration-500 hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-gold">Contact</h4>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors duration-500 hover:text-gold"
                >
                  {BRAND.email}
                </a>
              </li>

              <li>
                <a
                  href={whatsappInquiryUrl(`Hello ${BRAND.name}, I'd like to learn more.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:text-gold"
                >
                  WhatsApp Contact
                </a>
              </li>

              <li>{BRAND.city}</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-border/60
            pt-8
            text-xs
            uppercase
            tracking-luxury
            text-muted-foreground
            md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} {BRAND.name}.
          </p>

          <p>Crafted For Presence</p>
        </div>
      </div>
    </footer>
  );
}
