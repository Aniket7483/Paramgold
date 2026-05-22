import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Stagger, itemVariants } from "@/components/site/Reveal";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";
import sus from "@/assets/sustainable.jpg";
import af from "@/assets/about-farmer.jpg";

const POSTS = [
  { img: g5, cat: "Soil Health", title: "5 signs your soil needs a micronutrient correction", date: "May 12, 2026", excerpt: "Learn the visible field signals of zinc, iron and boron deficiency — and how to fix them fast." },
  { img: sus, cat: "Drip Irrigation", title: "Fertigation schedule for tomato — week by week", date: "Apr 28, 2026", excerpt: "A complete drip-fed nutrition plan from transplant to harvest for hybrid tomato." },
  { img: g3, cat: "Wheat", title: "Boosting wheat tillering with the right NPK", date: "Apr 14, 2026", excerpt: "Tiller count drives yield. Here's how nitrogen timing and PGRs change the outcome." },
  { img: af, cat: "Biofertilizers", title: "Why mycorrhiza is the secret to drought tolerance", date: "Mar 30, 2026", excerpt: "Microbial root partners extend reach by up to 100×. The science explained simply." },
  { img: g4, cat: "Polyhouse", title: "Pest-pressure planning for capsicum greenhouses", date: "Mar 18, 2026", excerpt: "Integrated nutrition and prophylactic protocols for protected cultivation." },
  { img: g6, cat: "Sustainability", title: "Cutting urea use by 25% without losing yield", date: "Mar 2, 2026", excerpt: "Combine Azato and balanced WSFs to keep nitrogen efficient and soil alive." },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [{ title: "Knowledge Center — Paramgold Agritech" }, { name: "description", content: "Agronomy insights, fertilizer guides and farming tips from Paramgold experts." }],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero eyebrow="Knowledge Center" title="Agronomy insights for modern farms." subtitle="Practical, field-tested guides written by our team of agronomists." />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <motion.article key={p.title} variants={itemVariants} whileHover={{ y: -6 }} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-glow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold uppercase tracking-wider text-primary">{p.cat}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Read article <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
