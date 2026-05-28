import { Link } from "@tanstack/react-router";
import logo from "@/assets/veldior-logo-only.png";
import { BRAND } from "@/config/brand";
import { whatsappInquiryUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-1">
              <img src={logo} alt={BRAND.name} className="h-14 w-14 object-contain mt-0.2" />
              <span className="font-display text-2xl tracking-[0.25em] text-gold">VELDIOR</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {BRAND.tagline} Hand-blended in small batches.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-luxury text-gold">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/shop" className="hover:text-gold">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-luxury text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>{BRAND.email}</li>
              <li>
                <a
                  href={whatsappInquiryUrl(`Hello ${BRAND.name}, I'd like to learn more.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp Contact
                </a>
              </li>
              <li>{BRAND.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs uppercase tracking-luxury text-muted-foreground md:flex-row">
          {/* <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p> */}
          <p>
            © {new Date().getFullYear()} {BRAND.name}.
          </p>
          <p>Creating scents · Defining luxury</p>
        </div>
      </div>
    </footer>
  );
}
