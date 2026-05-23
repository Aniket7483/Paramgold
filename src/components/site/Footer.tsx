import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/Logo1.jpg";
import { CATEGORIES } from "@/data/products";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.18_0.04_152)] text-primary-foreground">
      <div className="absolute inset-0 leaf-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              
              <div>
                <div className="text-lg font-bold">Paramgold</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">Agritech Pvt. Ltd.</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
              Complete crop nutrition solutions — engineered for Indian farms. Nourishing crops. Empowering farmers.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-colors hover:bg-gradient-gold hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Categories</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/75">
              {CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link to="/products" className="hover:text-gold">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Company</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/75">
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-gold">Knowledge Center</Link></li>
              <li><Link to="/dealer" className="hover:text-gold">Become a Dealer</Link></li>
              <li><Link to="/certifications" className="hover:text-gold">Certifications</Link></li>
              <li><Link to="/career" className="hover:text-gold">Career</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Reach Us</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Plot 24, MIDC Industrial Area, Pune, Maharashtra 411019, India</li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> +91 98765 43210</li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> info@paramgold.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-primary-foreground/55 md:flex-row">
          <p>© {new Date().getFullYear()} Paramgold Agritech Pvt. Ltd. All rights reserved.</p>
          <p>Made with care for Indian farmers.</p>
        </div>
      </div>
    </footer>
  );
}