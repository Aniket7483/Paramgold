import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Stagger, itemVariants } from "@/components/site/Reveal";
import { motion } from "motion/react";

const ROLES = [
  { title: "Field Agronomist", loc: "Maharashtra", type: "Full-time", desc: "Drive on-field product trials and dealer training across assigned regions." },
  { title: "R&D Chemist", loc: "Pune HQ", type: "Full-time", desc: "Formulate next-generation water-soluble and bio-stimulant products." },
  { title: "Regional Sales Manager", loc: "Karnataka", type: "Full-time", desc: "Build and lead a high-performing dealer network in South India." },
  { title: "Digital Marketing Lead", loc: "Pune HQ", type: "Full-time", desc: "Own brand presence across digital channels and farmer communities." },
];

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [{ title: "Careers — Paramgold Agritech" }, { name: "description", content: "Build the future of Indian agriculture with us. Explore open roles at Paramgold." }],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: Career,
});

function Career() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Grow with Paramgold." subtitle="Join a team that is engineering the future of Indian crop nutrition." />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Stagger className="space-y-4">
            {ROLES.map((r) => (
              <motion.div key={r.title} variants={itemVariants} className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-glow sm:flex-row sm:items-center">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><Briefcase className="h-5 w-5" /></div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.loc}</span>
                    <span>· {r.type}</span>
                  </div>
                </div>
                <a href="mailto:careers@paramgold.in" className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  Apply <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
