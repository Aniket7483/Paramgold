import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/PG.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Knowledge" },
  { to: "/dealer", label: "Dealer" },
  { to: "/certifications", label: "Certifications" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Paramgold Agritech"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const active =
              location.pathname === n.to ||
              (n.to !== "/" && location.pathname.startsWith(n.to));

            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary-deep"
                    : "text-foreground/75 hover:text-primary-deep"
                }`}
              >
                {n.label}

                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Phone className="h-4 w-4" />
            Call Sales
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-primary-deep lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}

            <a
              href="tel:+919876543210"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call Sales
            </a>
          </div>
        </div>
      )}
    </header>
  );
}