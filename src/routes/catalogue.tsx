import { createFileRoute } from "@tanstack/react-router";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

const pages = [1, 2, 3, 4, 5, 6, 7, 8];

const captions = [
  "Cover — company profile",
  "Globe, ball and SS 316 valves",
  "SS / CS / GI pipes and flanges",
  "Threaded, butt-weld and camlock fittings",
  "Chrome ball, NRV, strainers and foot valves",
  "Fasteners, hose connectors and cutting wheels",
  "Pneumatic fittings, gaskets and site supplies",
  "Back cover — contact",
];

export const Route = createFileRoute("/catalogue")({
  component: CataloguePage,
  head: () => ({ meta: [{ title: "Printed catalogue — Markwell International" }] }),
});

function CataloguePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">Print</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Company catalogue
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            The original Markwell International profile — eight pages covering valves, pipes, fittings, flanges and workshop supplies.
          </p>
        </div>
        <Button asChild>
          <a href={company.cataloguePath} download>
            <FileDown className="size-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {pages.map((n) => (
          <figure key={n} className="overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
            <a href={company.cataloguePath} target="_blank" rel="noreferrer">
              <img
                src={`/images/catalogue/page-${n}.jpg`}
                alt={`Catalogue page ${n}: ${captions[n - 1]}`}
                className="w-full bg-muted object-contain"
              />
            </a>
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Page {n}.</span> {captions[n - 1]}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
