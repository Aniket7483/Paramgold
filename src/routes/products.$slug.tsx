import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Download, MessageCircle, Sprout } from "lucide-react";
import { PRODUCTS, CATEGORIES, getProduct, getByCategory } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal, Stagger } from "@/components/site/Reveal";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — Paramgold Agritech` },
      { name: "description", content: loaderData?.product.tagline ?? "" },
      { property: "og:title", content: `${loaderData?.product.name} — Paramgold` },
      { property: "og:description", content: loaderData?.product.tagline ?? "" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
    links: [{ rel: "canonical", href: `/products/${loaderData?.product.slug}` }],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-5 pt-32">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-primary"><ArrowLeft className="h-4 w-4" /> Back to products</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="grid min-h-[60vh] place-items-center px-5 pt-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const cat = CATEGORIES.find((c) => c.id === product.category);
  const related = getByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4);
  const waMsg = encodeURIComponent(`Hello Paramgold, I'd like more information on ${product.name}.`);

  return (
    <>
      <section className="bg-gradient-soft pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All products</Link>
          <div className="mt-8 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <img src={product.image} alt={product.name} width={1024} height={1024} className="aspect-square w-full object-cover" />
              </div>
            </Reveal>
            <div>
              <span className="rounded-full border border-primary/20 bg-white/70 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">{cat?.name}</span>
              <h1 className="mt-4 text-4xl text-foreground lg:text-5xl">{product.name}</h1>
              <p className="mt-3 text-lg text-muted-foreground">{product.tagline}</p>
              <p className="mt-6 leading-relaxed text-foreground/85">{product.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`https://wa.me/919876543210?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-glow">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
                </a>
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow">
                  <Download className="h-4 w-4" /> Download Brochure
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Packaging</div>
                  <div className="mt-1 text-sm font-semibold text-foreground">{product.packaging.join(" · ")}</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Recommended Dose</div>
                  <div className="mt-1 text-sm font-semibold text-foreground">{product.dosage}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-xl font-bold text-foreground">Key Benefits</h2>
            <ul className="mt-5 space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/85"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-xl font-bold text-foreground">Technical Composition</h2>
            <table className="mt-5 w-full text-sm">
              <tbody>
                {product.composition.map((c) => (
                  <tr key={c.name} className="border-b border-border last:border-0">
                    <td className="py-3 text-muted-foreground">{c.name}</td>
                    <td className="py-3 text-right font-semibold text-foreground">{c.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Recommended Crops</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.crops.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                  <Sprout className="h-3 w-3 text-primary" /> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-gradient-soft px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">Related Products</h2>
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (<ProductCard key={p.slug} product={p} />))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
