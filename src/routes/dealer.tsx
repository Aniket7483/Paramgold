import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Check, Handshake, TrendingUp, ShieldCheck, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CATEGORIES } from "@/data/products";

export const Route = createFileRoute("/dealer")({
  head: () => ({
    meta: [{ title: "Become a Dealer — Paramgold Agritech" }, { name: "description", content: "Apply to become an authorized Paramgold dealer or distributor in your region." }],
    links: [{ rel: "canonical", href: "/dealer" }],
  }),
  component: Dealer,
});

function Dealer() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Application received! We'll be in touch within 48 hours.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHero eyebrow="Dealer Inquiry" title="Partner with Paramgold." subtitle="Join 100+ authorized dealers across India. Premium products, healthy margins, complete marketing &amp; agronomy support." />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: Handshake, title: "Exclusive territory", text: "Protected zones to grow your business." },
                { icon: TrendingUp, title: "Best-in-class margins", text: "Transparent, performance-linked rewards." },
                { icon: BookOpen, title: "Agronomy training", text: "Quarterly product and crop-care training." },
                { icon: ShieldCheck, title: "Marketing support", text: "POS material, dealer board, digital assets." },
              ].map((b) => (
                <div key={b.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><b.icon className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{b.title}</div>
                    <p className="text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-soft lg:p-9">
              <h2 className="text-2xl font-bold text-foreground">Dealer Application</h2>
              <p className="mt-1 text-sm text-muted-foreground">Fill in the form — our team will respond within 48 hours.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Business Name" name="business" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" />
                <Field label="City" name="city" required />
                <Field label="State" name="state" required />
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product Interest</label>
                <select name="interest" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2">
                  {CATEGORIES.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
                </select>
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" rows={4} maxLength={1000} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2" placeholder="Tell us about your existing business…" />
              </div>
              <button type="submit" disabled={sent} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow disabled:opacity-60">
                {sent ? (<><Check className="h-4 w-4" /> Submitted</>) : (<><Send className="h-4 w-4" /> Submit Application</>)}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} maxLength={120}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2" />
    </div>
  );
}
