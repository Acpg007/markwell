import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useQuoteStore } from "@/lib/quote-store";

export function QuoteDrawer({ children }: { children: ReactNode }) {
  const items = useQuoteStore((s) => s.items);
  const remove = useQuoteStore((s) => s.remove);
  const update = useQuoteStore((s) => s.update);
  const clear = useQuoteStore((s) => s.clear);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Quotation list</SheetTitle>
          <SheetDescription>
            Add sizes and quantities, then send the list by email or WhatsApp.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">
            Your list is empty. Browse the catalogue and tap “Add to quotation”.
          </p>
        ) : (
          <ul className="mt-6 flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.slug} className="rounded-lg border border-border bg-paper p-3">
                <div className="flex items-start justify-between gap-2">
                  <Link
                    to="/products/$slug"
                    params={{ slug: item.slug }}
                    className="font-medium leading-snug hover:underline"
                  >
                    {item.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => remove(item.slug)}
                    className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Input
                    value={item.size}
                    placeholder="Size"
                    aria-label={`Size for ${item.name}`}
                    onChange={(e) => update(item.slug, { size: e.target.value })}
                  />
                  <Input
                    value={item.qty}
                    placeholder="Qty"
                    aria-label={`Quantity for ${item.name}`}
                    onChange={(e) => update(item.slug, { qty: e.target.value })}
                  />
                </div>
                <Input
                  className="mt-2"
                  value={item.notes}
                  placeholder="Notes"
                  aria-label={`Notes for ${item.name}`}
                  onChange={(e) => update(item.slug, { notes: e.target.value })}
                />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-6">
          {items.length > 0 ? (
            <Button variant="ghost" onClick={() => clear()}>
              Clear list
            </Button>
          ) : null}
          <Button asChild>
            <Link to="/quote">Send quotation request</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
