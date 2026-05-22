import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Stagger, itemVariants } from "@/components/site/Reveal";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";
import man from "@/assets/manufacturing.jpg";
import sus from "@/assets/sustainable.jpg";
import af from "@/assets/about-farmer.jpg";

const IMAGES = [g1, g2, g3, g4, g5, g6, man, sus, af];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [{ title: "Gallery — Paramgold Agritech" }, { name: "description", content: "Visual journey through Paramgold farms, products and manufacturing." }],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from the field." subtitle="Crops, products and manufacturing — captured across our partner farms in India." />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.map((src, i) => (
              <motion.button
                key={i} variants={itemVariants} onClick={() => setActive(src)} whileHover={{ y: -4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-soft"
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            ))}
          </Stagger>
        </div>
      </section>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-6 backdrop-blur"
          >
            <button onClick={() => setActive(null)} className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white"><X /></button>
            <motion.img initial={{ scale: 0.96 }} animate={{ scale: 1 }} src={active} alt="" className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
