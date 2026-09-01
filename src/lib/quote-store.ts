import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type QuoteItem = {
  slug: string;
  name: string;
  qty: string;
  size: string;
  notes: string;
};

type QuoteState = {
  items: QuoteItem[];
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  add: (item: QuoteItem) => void;
  remove: (slug: string) => void;
  update: (slug: string, patch: Partial<Omit<QuoteItem, "slug">>) => void;
  clear: () => void;
};

export const useQuoteStore = create<QuoteState>()(
  persist(
    (set, get) => ({
      items: [],
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      add: (item) => {
        const existing = get().items.find((i) => i.slug === item.slug);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.slug === item.slug
                ? {
                    ...i,
                    qty: item.qty || i.qty,
                    size: item.size || i.size,
                    notes: [i.notes, item.notes].filter(Boolean).join(" · "),
                    name: item.name,
                  }
                : i,
            ),
          });
          return;
        }
        set({ items: [...get().items, item] });
      },
      remove: (slug) => set({ items: get().items.filter((i) => i.slug !== slug) }),
      update: (slug, patch) =>
        set({
          items: get().items.map((i) => (i.slug === slug ? { ...i, ...patch } : i)),
        }),
      clear: () => set({ items: [] }),
    }),
    {
      name: "markwell-quote",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ items: s.items }),
      skipHydration: true,
    },
  ),
);

export function formatQuoteMessage(
  items: QuoteItem[],
  extra?: { name?: string; company?: string; phone?: string; email?: string; message?: string },
) {
  const lines = ["Quotation request — Markwell International W.L.L.", ""];
  if (extra?.name) lines.push(`Name: ${extra.name}`);
  if (extra?.company) lines.push(`Company: ${extra.company}`);
  if (extra?.phone) lines.push(`Phone: ${extra.phone}`);
  if (extra?.email) lines.push(`Email: ${extra.email}`);
  if (extra?.name || extra?.company) lines.push("");
  lines.push("Items:");
  if (items.length === 0) {
    lines.push("— (no line items attached)");
  } else {
    items.forEach((item, i) => {
      lines.push(
        `${i + 1}. ${item.name}` +
          (item.size ? ` | Size: ${item.size}` : "") +
          (item.qty ? ` | Qty: ${item.qty}` : "") +
          (item.notes ? ` | Notes: ${item.notes}` : ""),
      );
    });
  }
  if (extra?.message) {
    lines.push("", "Message:", extra.message);
  }
  return lines.join("\n");
}
