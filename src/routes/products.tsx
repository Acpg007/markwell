import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/products/product-card";
import { categories, products, type CategoryId } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductsSearch = {
  category?: string;
  q?: string;
};

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): ProductsSearch => ({
    category: typeof search.category === "string" ? search.category : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  component: ProductsPage,
  head: () => ({
    meta: [{ title: "Products — Markwell International" }],
  }),
});

function ProductsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(search.q ?? "");
  const category = (search.category as CategoryId | undefined) ?? "all";

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!query) return true;
      const hay = [p.name, p.summary, p.details, p.materials.join(" "), p.ratings.join(" "), p.sizes].join(" ").toLowerCase();
      return hay.includes(query);
    });
  }, [category, q]);

  function setCategory(id: string) {
    navigate({
      search: (prev) => ({
        ...prev,
        category: id === "all" ? undefined : id,
      }),
    });
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">Catalogue</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Products</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        MS welding fittings, CS threaded 1000–6000 psi, Sch 40 / 80 pipe, Class 150 flanges, valves and site supplies — as listed in our printed catalogue.
      </p>

      <div className="relative mt-8 max-w-md">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search size, material, schedule…"
          className="pl-10"
          aria-label="Search products"
        />
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        <FilterChip active={category === "all"} onClick={() => setCategory("all")}>
          All
        </FilterChip>
        {categories.map((c) => (
          <FilterChip key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
            {c.name}
          </FilterChip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-muted-foreground">No products match that filter. Try another material or category.</p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}

      <p className="mt-12 text-sm text-muted-foreground">
        Prefer the original print?{" "}
        <Link to="/catalogue" className="font-medium text-foreground underline">
          Open the scanned catalogue
        </Link>
        .
      </p>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-11 shrink-0 rounded-md border px-3 text-sm font-medium transition-colors",
        active
          ? "border-ink bg-ink text-paper"
          : "border-border bg-card text-foreground hover:bg-muted",
      )}
    >
      {children}
    </button>
  );
}
