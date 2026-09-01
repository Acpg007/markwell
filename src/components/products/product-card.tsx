import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AddToQuote } from "@/components/products/add-to-quote";
import type { Product } from "@/lib/products";
import { getCategory } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-xl p-0">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="size-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline">{category?.name}</Badge>
          {product.ratings.slice(0, 2).map((r) => (
            <Badge key={r}>{r}</Badge>
          ))}
        </div>
        <Link to="/products/$slug" params={{ slug: product.slug }} className="hover:underline">
          <h3 className="font-display text-xl font-semibold leading-snug">{product.name}</h3>
        </Link>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
        <p className="text-xs font-medium tracking-wide text-steel uppercase">
          {product.materials.join(" · ")} · {product.sizes}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-1">
          <AddToQuote product={product} size="sm" />
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Specs
          </Link>
        </div>
      </div>
    </Card>
  );
}
