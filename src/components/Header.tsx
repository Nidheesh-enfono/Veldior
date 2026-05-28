import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useCart } from "@/lib/cart";
import { BRAND } from "@/config/brand";

import logo from "@/assets/veldior-logo-only.png";

export function Header() {
  const { count, setOpen } = useCart();

  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Collection" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 luxury-transition ${
          scrolled
            ? "border-b border-white/5 bg-background/70 backdrop-blur-2xl"
            : "bg-background/20 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-18 md:h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <img
                src={logo}
                alt={BRAND.name}
                className="relative h-11 w-11 object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <span
              className="
                hidden
                font-display
                text-[1.55rem]
                font-medium
                uppercase
                tracking-[0.24em]
                text-foreground
                transition-colors
                duration-500
                group-hover:text-gold
                sm:inline
              "
            >
              VELDIOR
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="
                  group
                  relative
                  text-[11px]
                  uppercase
                  tracking-luxury
                  text-muted-foreground
                  transition-colors
                  duration-500
                  hover:text-foreground
                "
                activeProps={{
                  className: "text-gold",
                }}
              >
                {l.label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-0
                    bg-gold
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            {/* CART */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open cart"
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                luxury-transition
                hover:border-gold/40
                hover:bg-gold/[0.04]
              "
            >
              <ShoppingBag
                className="
                  h-[15px]
                  w-[15px]
                  text-foreground/80
                  transition-all
                  duration-500
                  group-hover:text-gold
                "
              />

              {count > 0 && (
                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-gold
                    px-1
                    text-[10px]
                    font-medium
                    text-primary-foreground
                    shadow-gold
                  "
                >
                  {count}
                </span>
              )}
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobile((v) => !v)}
              aria-label="Menu"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-gold/40
                hover:bg-gold/[0.04]
                md:hidden
              "
            >
              {mobile ? (
                <X className="h-4 w-4 text-gold" />
              ) : (
                <Menu className="h-4 w-4 text-foreground/80" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-700
            md:hidden
            ${mobile ? "max-h-[400px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav
            className="
              bg-background/95
              px-6
              py-6
              backdrop-blur-2xl
            "
          >
            <div className="flex flex-col gap-1">
              {links.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobile(false)}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/[0.04]
                    py-4
                    text-sm
                    uppercase
                    tracking-luxury
                    text-muted-foreground
                    transition-all
                    duration-500
                    hover:text-gold
                  "
                  activeProps={{
                    className: "text-gold",
                  }}
                  style={{
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <span>{l.label}</span>

                  <span
                    className="
                      translate-x-2
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* MOBILE BRAND TEXT */}
            <div className="mt-10 border-t border-white/[0.05] pt-6">
              <p
                className="
                  max-w-xs
                  text-sm
                  leading-7
                  text-muted-foreground
                "
              >
                Refined fragrances inspired by depth, warmth, and quiet confidence.
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
