import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight, Leaf, FlaskConical, Sprout, ShieldCheck, Award,
  Factory, Truck, Users, Star, CheckCircle2, Droplets, Sun, Tractor,
} from "lucide-react";
import heroImg from "@/assets/hero-fields.jpg";
import aboutImg from "@/assets/about-farmer.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import sustainableImg from "@/assets/sustainable.jpg";
import farmer1 from "@/assets/farmer1.jpg";
import farmer2 from "@/assets/farmer2.jpg";
import farmer3 from "@/assets/farmer3.jpg";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ProductCard } from "@/components/site/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paramgold Agritech — Complete Crop Nutrition Solutions" },
      { name: "description", content: "Premium water-soluble fertilizers, micronutrients, bio-fertilizers and PGRs from Paramgold Agritech. Nourishing crops. Empowering farmers." },
      { property: "og:title", content: "Paramgold Agritech — Complete Crop Nutrition Solutions" },
      { property: "og:description", content: "Premium crop nutrition for modern Indian farms." },
      { property: "og:image", content: "/assets/hero-fields.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Sustainable />
      <Manufacturing />
      <Testimonials />
      <Certifications />
      <DealerCta />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroImg} alt="Lush agricultural fields at golden hour" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-20 pt-32 lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur"
        >
          <Sprout className="h-3.5 w-3.5 text-[oklch(0.85_0.15_82)]" /> Complete Crop Nutrition Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Nourishing crops.<br />
          <span className="text-gradient-gold">Empowering farmers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6 max-w-xl text-base text-white/85 sm:text-lg"
        >
          Paramgold Agritech engineers premium water-soluble fertilizers, bio-stimulants, micronutrients and PGRs that lift yield, quality and farmer profitability — sustainably.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-accent-foreground shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Explore Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/dealer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Become a Dealer
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-white/60"
      >
        Scroll to discover
      </motion.div>
    </section>
  );
}

const STATS = [
  { value: "25+", label: "Years of expertise" },
  { value: "50K+", label: "Empowered farmers" },
  { value: "100+", label: "Authorized dealers" },
  { value: "30+", label: "Premium products" },
];

function Stats() {
  return (
    <section className="relative -mt-12 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-border shadow-glow lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-card p-6 text-center lg:p-8">
                <div className="text-3xl font-bold text-gradient-primary lg:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-muted-foreground lg:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-primary opacity-10 blur-2xl" />
            <img
              src={aboutImg}
              alt="Farmer with healthy crops"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -right-6 w-56 rounded-2xl bg-card p-5 shadow-glow ring-1 ring-border">
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">ISO 9001 : 2015</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Quality certified manufacturing across every batch.</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About Paramgold"
            title="A modern agritech house built around the Indian farmer."
            description="From our state-of-the-art manufacturing facility in Pune, we formulate scientifically engineered crop nutrition that solves real-field problems — improving yield, quality and farmer income, season after season."
          />
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: FlaskConical, title: "R&D backed", text: "In-house laboratory and field trials." },
              { icon: Leaf, title: "Sustainable", text: "Eco-safe formulations, residue-free crops." },
              { icon: ShieldCheck, title: "Quality first", text: "Every batch lab-tested before despatch." },
              { icon: Users, title: "Farmer led", text: "Built with feedback from 50K+ farmers." },
            ].map((f) => (
              <motion.div
                key={f.title}
                variants={itemVariants}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-glow"
              >
                <f.icon className="h-6 w-6 text-primary" />
                <div className="mt-3 text-sm font-semibold text-foreground">{f.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </motion.div>
            ))}
          </Stagger>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="bg-gradient-soft px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Product Categories"
          title="A full-spectrum portfolio for every crop and stage."
          description="From soil to fruit — our six product families cover the complete nutrition cycle."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => {
            const icons = [Droplets, Sprout, FlaskConical, Sun, Leaf, Tractor];
            const Icon = icons[i];
            return (
              <motion.div
                key={c.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-glow"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                  <Link
                    to="/products"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Browse range <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 8);
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Featured Products"
            title="Bestsellers trusted across India."
          />
          <Link
            to="/products"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep md:inline-flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    { icon: FlaskConical, title: "Science-backed formulations", text: "Every product is born in our R&D lab and proven across multi-location field trials." },
    { icon: Factory, title: "In-house manufacturing", text: "State-of-the-art plant with stringent QC at every stage of production." },
    { icon: Truck, title: "Pan-India supply chain", text: "100+ authorized dealers ensure timely product availability where it matters." },
    { icon: ShieldCheck, title: "Lab-tested quality", text: "Heavy-metal free, soluble, chloride-free — certified for export-grade quality." },
    { icon: Users, title: "Farmer-first support", text: "On-field agronomist support, dosage advisory and crop schedules." },
    { icon: Award, title: "Trusted brand", text: "Two decades of consistent product performance and farmer trust." },
  ];
  return (
    <section className="bg-gradient-soft px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Paramgold"
          title="Built on science. Trusted by farmers."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Sustainable() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeader
            align="left"
            eyebrow="Sustainable Farming"
            title="A regenerative future for Indian agriculture."
            description="We design fertilizer programs that build soil health rather than deplete it — combining mineral nutrition with bio-stimulants and microbial life for long-term productivity."
          />
          <ul className="mt-8 space-y-4">
            {[
              "Residue-free, food-safe nutrition",
              "Compatible with drip and fertigation",
              "Microbial biofertilizers for soil regeneration",
              "Reduces chemical fertilizer load by up to 30%",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <img
              src={sustainableImg}
              alt="Drip irrigation"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Manufacturing() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.18_0.04_152)] px-5 py-24 text-primary-foreground lg:px-8 lg:py-32">
      <div className="absolute inset-0 leaf-pattern opacity-20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={manufacturingImg}
            alt="Manufacturing facility"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[5/4] w-full rounded-3xl object-cover shadow-glow ring-1 ring-white/10"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Manufacturing Excellence
          </span>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
            A 60,000+ sq ft plant<br />engineered for purity.
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/75">
            Our integrated facility combines automated blending, granulation, packaging and a fully equipped QC lab — ensuring every Paramgold product meets stringent international quality standards.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { v: "60K", l: "sq ft plant" },
              { v: "12+", l: "production lines" },
              { v: "24/7", l: "QC monitoring" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                <div className="text-2xl font-bold text-gold">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-white/65">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { img: farmer1, name: "Ramesh Patil", role: "Grape farmer, Nashik", quote: "Power Root and NPK 13:40:13 transformed my vineyard. My yield is up 22% and the bunch quality is export-grade." },
    { img: farmer2, name: "Suresh Kale", role: "Authorized Dealer, Solapur", quote: "Paramgold's product consistency and farmer support are unmatched. My retail business has doubled in 2 seasons." },
    { img: farmer3, name: "Dr. Priya Joshi", role: "Agronomist, Pune", quote: "I recommend Super Gold and Mycorrhiza to my polyhouse clients. The micronutrient response is visible within 7 days." },
  ];
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Trusted Voices"
          title="What growers say about us."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-glow"
            >
              <div className="flex gap-1 text-[oklch(0.78_0.16_78)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Certifications() {
  const items = ["ISO 9001:2015", "FCO Registered", "GMP Certified", "Made in India", "Export Quality", "Heavy Metal Free"];
  return (
    <section className="bg-gradient-soft px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Certifications &amp; Compliance</p>
        </Reveal>
        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-3" delay={0.04}>
          {items.map((c) => (
            <motion.div
              key={c}
              variants={itemVariants}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-soft"
            >
              {c}
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function DealerCta() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-10 text-primary-foreground shadow-glow lg:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-gold opacity-25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  Partner With Us
                </span>
                <h2 className="mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                  Become an authorized Paramgold dealer.
                </h2>
                <p className="mt-4 max-w-xl text-white/80">
                  Join a fast-growing network of 100+ dealers across India. Get premium products, attractive margins, marketing support and agronomy training.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  to="/dealer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-gold transition-transform hover:-translate-y-0.5"
                >
                  Apply for Dealership <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
