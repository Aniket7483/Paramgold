import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { Stagger } from "@/components/site/Reveal";
import { CATEGORIES, PRODUCTS, type ProductCategory } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Paramgold Agritech" },
      { name: "description", content: "Browse Paramgold's full range of water-soluble fertilizers, micronutrients, biofertilizers and PGRs." },
      { property: "og:title", content: "Products — Paramgold Agritech" },
      { property: "og:description", content: "Complete portfolio of premium crop nutrition products." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const [cat, setCat] = useState<ProductCategory | "all">("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = cat === "all" || p.category === cat;
      const matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.tagline.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [cat, q]);

  return (
    <>
      <PageHero eyebrow="Our Products" title={<>Premium nutrition for every crop &amp; stage.</>} subtitle="Explore 30+ science-backed formulations across six families — engineered, manufactured and quality-tested in India." />

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products by name…"
                className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none ring-primary/30 focus:ring-2"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {([{ id: "all", name: "All Products" }, ...CATEGORIES] as { id: ProductCategory | "all"; name: string }[]).map((c) => {
              const active = cat === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "border-transparent bg-gradient-primary text-primary-foreground shadow-soft"
                      : "border-border bg-card text-foreground/75 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>

          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (<ProductCard key={p.slug} product={p} />))}
          </Stagger>

          {filtered.length === 0 && (
            <div className="mt-12 rounded-3xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
              No products match your search.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
