import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({ meta: [{ title: "About — Markwell International" }] }),
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">Profile</p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
        Markwell International W.L.L.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A leading industrial supplier in Bahrain, established in early {company.established}, for industrial and engineering products.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <div className="overflow-hidden rounded-xl border border-border lg:col-span-3">
          <img
            src="/images/products/globe-valve.jpg"
            alt="Industrial globe valve from the Markwell range"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
        <aside className="rounded-xl border border-border bg-ink p-6 text-paper lg:col-span-2">
          <p className="font-display text-sm tracking-[0.2em] text-paper/50 uppercase">Title block</p>
          <dl className="mt-4 space-y-3 text-sm">
            <Row k="Company" v={company.legalName} />
            <Row k="Established" v={`Early ${company.established}`} />
            <Row k="Territory" v={company.country} />
            <Row k="Lines" v="Valves, pipes, fittings, flanges" />
            <Row k="Materials" v="MS · SS · CS · GI · MI · Brass" />
          </dl>
        </aside>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold">What we do</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{company.profile}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Contractors, maintenance teams and trading partners use us as a single source for specified pipework: Schedule 40 and Schedule 80 carbon and stainless pipe, Class 150 / PN16 flanges, MS welding fittings, and carbon-steel threaded fittings in 1000, 2000, 3000 and 6000 psi.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold">How to work with us</h2>
          <ol className="mt-4 space-y-3 text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">1. Send the spec.</span> Size, schedule or class, material, quantity and site.
            </li>
            <li>
              <span className="font-medium text-foreground">2. We confirm stock.</span> Availability against the printed catalogue range.
            </li>
            <li>
              <span className="font-medium text-foreground">3. Quotation.</span> Price and lead time by email, phone or WhatsApp.
            </li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/quote">Request a quote</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-paper/10 py-2">
      <dt className="text-paper/50">{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}
