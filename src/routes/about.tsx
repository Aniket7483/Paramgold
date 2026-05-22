import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { motion } from "motion/react";
import { Target, Eye, Heart, Award, Leaf, Users } from "lucide-react";
import aboutImg from "@/assets/about-farmer.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Paramgold Agritech" },
      { name: "description", content: "Paramgold Agritech is an Indian agritech and fertilizer manufacturer driving sustainable crop nutrition." },
      { property: "og:title", content: "About Paramgold Agritech" },
      { property: "og:description", content: "Two decades of crop nutrition innovation for Indian farmers." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Paramgold"
        title={<>Engineering crop nutrition for a <span className="text-gradient-primary">stronger India</span>.</>}
        subtitle="Built by agronomists, trusted by farmers — we craft fertilizer programs that genuinely change yields on the ground."
      />

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img src={aboutImg} alt="Farmer" loading="lazy" width={1280} height={960} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
          </Reveal>
          <div>
            <SectionHeader align="left" eyebrow="Our Story" title="From a single formulation to a full crop-care house." description="Founded with a mission to deliver world-class fertilizer technology to the Indian smallholder, Paramgold Agritech today serves 50,000+ farmers across the country through a network of 100+ authorized dealers." />
            <p className="mt-5 text-muted-foreground">Our six-family product portfolio covers everything a modern grower needs — water-soluble NPKs, specialty blends, chelated micronutrients, plant growth regulators, biofertilizers and organic stimulants — formulated in our own facility and field-validated season after season.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="What drives us" title="Mission, vision &amp; values." />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", text: "To deliver scientifically engineered, eco-safe crop nutrition that improves yield, quality and profitability for every farmer we serve." },
              { icon: Eye, title: "Our Vision", text: "To become India's most trusted agritech brand by combining innovation, integrity and farmer-first thinking." },
              { icon: Heart, title: "Our Values", text: "Quality without compromise. Farmer always first. Science over slogans. Sustainability by design." },
            ].map((c) => (
              <motion.div key={c.title} variants={itemVariants} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><c.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader align="left" eyebrow="Leadership" title="A team of agronomists, chemists and field-experts." description="Behind every Paramgold product is a multidisciplinary team that combines decades of agricultural science with hands-on field experience." />
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Award, title: "20+ years", text: "Industry experience" },
                { icon: Leaf, title: "30+ products", text: "In active portfolio" },
                { icon: Users, title: "150+ team", text: "Across India" },
                { icon: Target, title: "5 regions", text: "Pan-India presence" },
              ].map((s) => (
                <motion.div key={s.title} variants={itemVariants} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <s.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-base font-bold text-foreground">{s.title}</div>
                  <div className="text-sm text-muted-foreground">{s.text}</div>
                </motion.div>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1}><img src={manufacturingImg} alt="Manufacturing" loading="lazy" width={1280} height={960} className="aspect-[5/4] w-full rounded-3xl object-cover shadow-soft" /></Reveal>
        </div>
      </section>
    </>
  );
}
