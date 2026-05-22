import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Product } from "@/data/products";
import { CATEGORIES } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const cat = CATEGORIES.find((c) => c.id === product.category);
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-glow"
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-soft">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-deep backdrop-blur">
          {cat?.name.split(" ")[0]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
        >
          View Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}