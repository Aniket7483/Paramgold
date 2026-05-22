import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Contact — Paramgold Agritech" }, { name: "description", content: "Get in touch with Paramgold Agritech for product, dealership and agronomy queries." }],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! We'll reply within one business day.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." subtitle="Sales, dealership, agronomy or media — pick the channel that suits you best." />

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Head Office", value: "Plot 24, MIDC Industrial Area, Pune, Maharashtra 411019, India" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, label: "Email", value: "info@paramgold.in", href: "mailto:info@paramgold.in" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: "https://wa.me/919876543210" },
              ].map((c) => (
                <a key={c.label} href={c.href ?? "#"} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-glow">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><c.icon className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 text-sm font-semibold text-foreground">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Paramgold location"
                src="https://www.google.com/maps?q=Pune,India&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-soft lg:p-9">
              <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Your Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Subject" name="subject" required />
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" rows={5} maxLength={1000} required
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2" />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow">
                <Send className="h-4 w-4" /> Send Message
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
      <input name={name} type={type} required={required} maxLength={150}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2" />
    </div>
  );
}
