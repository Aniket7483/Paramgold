import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, FlaskConical, Leaf, BadgeCheck, FileCheck } from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "@/components/site/PageHero";
import { Stagger, itemVariants } from "@/components/site/Reveal";

const CERTS = [
  { icon: Award, name: "ISO 9001:2015", desc: "Quality management system certified across manufacturing and operations." },
  { icon: ShieldCheck, name: "FCO Registered", desc: "All products registered under the Fertilizer (Control) Order, Govt. of India." },
  { icon: FlaskConical, name: "GMP Certified", desc: "Good Manufacturing Practices for bio-stimulants and bio-fertilizers." },
  { icon: Leaf, name: "Eco-Safe", desc: "Heavy-metal-free, residue-tested formulations safe for sustainable agriculture." },
  { icon: BadgeCheck, name: "Make in India", desc: "Proudly manufactured in our Pune facility — built for Indian farms." },
  { icon: FileCheck, name: "Export Compliant", desc: "Products meeting global quality benchmarks for export markets." },
];

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [{ title: "Certifications — Paramgold Agritech" }, { name: "description", content: "Quality certifications and compliance credentials of Paramgold Agritech." }],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <>
      <PageHero eyebrow="Certifications" title="Quality you can verify." subtitle="Every Paramgold product is backed by stringent quality systems, government approvals and independent testing." />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c) => (
              <motion.div key={c.name} variants={itemVariants} className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-accent-foreground shadow-soft"><c.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
