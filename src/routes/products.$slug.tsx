import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AddToQuote } from "@/components/products/add-to-quote";
import { ProductCard } from "@/components/products/product-card";
import { getCategory, getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/products/$slug")({
  component: ProductDetail,
  head: ({ params }) => {
    const product = getProduct(params.slug);
    return {
      meta: [{ title: `${product?.name ?? "Product"} — Markwell International` }],
    };
  },
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);

  if (!product) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="font-display text-4xl font-semibold">Product not found</h1>
        <p className="mt-3 text-muted-foreground">That line is not in the current catalogue.</p>
        <Button asChild className="mt-6">
          <Link to="/products">Back to products</Link>
        </Button>
      </main>
    );
  }

  const category = getCategory(product.category);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link to="/products" search={{ category: product.category }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" />
        {category?.name ?? "Products"}
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
          <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">{category?.name}</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{product.details}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <Spec label="Materials" value={product.materials.join(", ")} />
            <Spec label="Size range" value={product.sizes} />
            <Spec label="Ratings" value={product.ratings.join(" · ")} />
            <Spec label="Connections" value={product.connections.join(", ")} />
          </dl>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {product.ratings.map((r) => (
              <Badge key={r} variant="crimson">
                {r}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <AddToQuote product={product} />
            <Button asChild variant="outline">
              <Link to="/quote">Send quotation</Link>
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold">Related in {category?.name}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <dt className="text-xs tracking-wide text-muted-foreground uppercase">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}
