import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuoteStore } from "@/lib/quote-store";
import type { Product } from "@/lib/products";

export function AddToQuote({ product, size = "default" }: { product: Product; size?: "default" | "sm" }) {
  const add = useQuoteStore((s) => s.add);
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [notes, setNotes] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    add({
      slug: product.slug,
      name: product.name,
      qty: qty.trim() || "1",
      size: itemSize.trim() || product.sizes,
      notes: notes.trim(),
    });
    toast.success("Added to quotation list", { description: product.name });
    setOpen(false);
    setQty("");
    setItemSize("");
    setNotes("");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={size} variant="default">
          Add to quotation
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add to quotation</DialogTitle>
          <DialogDescription>{product.name}</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor={`size-${product.slug}`}>Size</Label>
            <Input
              id={`size-${product.slug}`}
              value={itemSize}
              onChange={(e) => setItemSize(e.target.value)}
              placeholder={product.sizes}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`qty-${product.slug}`}>Quantity</Label>
            <Input
              id={`qty-${product.slug}`}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              placeholder="e.g. 20 pcs / 12 lengths"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`notes-${product.slug}`}>Notes</Label>
            <Input
              id={`notes-${product.slug}`}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Schedule, class, end connection…"
            />
          </div>
          <Button type="submit">Add to list</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
