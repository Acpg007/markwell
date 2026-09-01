import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, ClipboardList } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { company, navItems } from "@/lib/company";
import { useQuoteStore } from "@/lib/quote-store";
import { cn } from "@/lib/utils";
import { QuoteDrawer } from "@/components/quote/quote-drawer";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const count = useQuoteStore((s) => s.items.length);
  const hydrated = useQuoteStore((s) => s.hydrated);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/20 bg-ink text-paper">
      <div className="h-0.5 w-full bg-primary" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="shrink-0" aria-label="Markwell International home">
          <Logo inverted compact={false} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium tracking-wide transition-colors",
                  active ? "bg-paper/10 text-paper" : "text-paper/70 hover:bg-paper/10 hover:text-paper",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phone.href}
            className="hidden items-center gap-2 rounded-md px-2 py-2 text-sm text-paper/80 hover:text-paper md:flex"
          >
            <Phone className="size-4" />
            <span className="tabular-nums">{company.phone.display}</span>
          </a>

          <QuoteDrawer>
            <Button variant="default" size="sm" className="relative h-10">
              <ClipboardList className="size-4" />
              <span className="hidden sm:inline">Quotation</span>
              {hydrated && count > 0 ? (
                <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-paper text-xs font-semibold leading-none text-ink">
                  {count}
                </span>
              ) : null}
            </Button>
          </QuoteDrawer>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-paper hover:bg-paper/10 lg:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-ink text-paper">
        <SheetHeader>
          <SheetTitle className="text-paper">
            <Logo inverted />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
          {navItems.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium",
                  active ? "bg-paper/10 text-paper" : "text-paper/75 hover:bg-paper/10",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={company.phone.href} className="mt-4 flex items-center gap-2 px-3 py-3 text-paper/80">
            <Phone className="size-4" />
            {company.phone.display}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
