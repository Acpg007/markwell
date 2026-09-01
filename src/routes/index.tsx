import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { categories, products, ratingChips } from "@/lib/products";
import { ProductCard } from "@/components/products/product-card";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <main>
      <section className="relative min-h-[34rem] overflow-hidden bg-ink text-paper md:min-h-[38rem]">
        <img
          src="/images/products/hero-gate-valve.jpg"
          alt="Carbon steel gate valve"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="hero-shade-mobile absolute inset-0 md:hidden" />
        <div className="hero-shade absolute inset-0 hidden md:block" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end px-4 py-12 sm:px-6 md:min-h-[38rem] md:justify-center">
          <p className="font-display text-sm tracking-[0.28em] text-paper/70 uppercase">
            Est. {company.established} · {company.country}
          </p>
          <h1 className="mt-3 max-w-xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-paper sm:text-6xl md:text-7xl">
            Industrial supply, specified and stocked.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/80 sm:text-lg">
            MS welding fittings, CS threaded fittings 1000–6000 psi, Schedule 40 / 80 pipe, Class 150 flanges, and valves in MS, SS, CS and brass.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/products">
                Browse products
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-paper/30 bg-transparent text-paper hover:bg-paper/10 hover:text-paper">
              <Link to="/quote">Request a quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper-raised">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {ratingChips.slice(0, 4).map((chip) => (
            <div key={chip.label} className="bg-paper-raised px-4 py-5 sm:px-6">
              <p className="font-display text-2xl font-semibold tracking-tight text-ink">{chip.label}</p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{chip.hint}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-px border-t border-border bg-border">
          {ratingChips.slice(4).map((chip) => (
            <div key={chip.label} className="bg-paper-raised px-4 py-4 sm:px-6">
              <p className="font-display text-xl font-semibold text-ink">{chip.label}</p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{chip.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">Stock range</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">What we supply</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">
              Full catalogue
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/products"
              search={{ category: c.id }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={c.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-2xl font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">Specified lines</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Core products</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The lines our customers quote most often — welding fittings, high-pressure threaded CS, pipe schedules and Class 150 flanges.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">Profile</p>
          <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Bahrain stockist since 2006
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{company.profile}</p>
          <ul className="mt-6 space-y-2 text-sm text-foreground">
            <li className="border-l-2 border-primary pl-3">M.S, S.S, Brass and C.S valves</li>
            <li className="border-l-2 border-primary pl-3">MS, SS, MI, GI pipes and all fittings</li>
            <li className="border-l-2 border-primary pl-3">Flanges PN16 / Class 150, ½"–16"</li>
            <li className="border-l-2 border-primary pl-3">Quotations by phone, WhatsApp or email</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/about">About Markwell</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={company.cataloguePath} download>
                <FileDown className="size-4" />
                Download catalogue
              </a>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]">
          <img
            src="/images/products/pipes.jpg"
            alt="Stocked carbon and stainless steel pipes"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight">Need a price today?</h2>
            <p className="mt-2 max-w-xl text-paper/75">
              Send sizes, schedule and quantity. We reply with availability and a quotation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/quote">Request a quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-paper/30 bg-transparent text-paper hover:bg-paper/10 hover:text-paper">
              <a href={company.phone.href}>
                <Phone className="size-4" />
                {company.phone.display}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
