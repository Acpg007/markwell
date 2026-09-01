import { createFileRoute, Link } from "@tanstack/react-router";
import { QuoteForm } from "@/components/quote/quote-form";
import { useQuoteStore } from "@/lib/quote-store";

export const Route = createFileRoute("/quote")({
  component: QuotePage,
  head: () => ({ meta: [{ title: "Request a quote — Markwell International" }] }),
});

function QuotePage() {
  const items = useQuoteStore((s) => s.items);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">RFQ</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Request a quotation</h1>
      <p className="mt-3 text-muted-foreground">
        Include size, schedule (40 / 80), class (150), pressure (1000–6000 psi) and quantity. We reply from Bahrain.
      </p>

      {items.length > 0 ? (
        <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
          {items.map((item) => (
            <li key={item.slug} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between">
              <Link to="/products/$slug" params={{ slug: item.slug }} className="font-medium hover:underline">
                {item.name}
              </Link>
              <span className="text-sm text-muted-foreground">
                {[item.size, item.qty && `Qty ${item.qty}`, item.notes].filter(Boolean).join(" · ")}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-xl border border-dashed border-border bg-card px-4 py-6 text-sm text-muted-foreground">
          No line items yet.{" "}
          <Link to="/products" className="font-medium text-foreground underline">
            Add products from the catalogue
          </Link>{" "}
          or describe what you need below.
        </p>
      )}

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <QuoteForm />
      </div>
    </main>
  );
}
