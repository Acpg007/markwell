import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { company, navItems } from "@/lib/company";
import { categories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            Leading industrial supplier in Bahrain since {company.established}. {company.lines}.
          </p>
          <p className="mt-4 font-display text-sm tracking-[0.2em] text-paper/50 uppercase">
            Est. {company.established} · {company.country}
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-display text-sm tracking-[0.18em] text-paper/50 uppercase">Site</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="text-paper/80 hover:text-paper">
                Request a quote
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm tracking-[0.18em] text-paper/50 uppercase">Stock</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.id}>
                <Link
                  to="/products"
                  search={{ category: c.id }}
                  className="text-paper/80 hover:text-paper"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-sm tracking-[0.18em] text-paper/50 uppercase">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>
              <a href={company.phone.href} className="hover:text-paper">
                Ph {company.phone.display}
              </a>
            </li>
            <li>Fax {company.fax.display}</li>
            {company.mobiles.map((m) => (
              <li key={m.href}>
                <a href={m.href} className="hover:text-paper">
                  Mob {m.display}
                </a>
              </li>
            ))}
            {company.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="break-all hover:text-paper">
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Industrial & engineering products · {company.country}</p>
        </div>
      </div>
    </footer>
  );
}
