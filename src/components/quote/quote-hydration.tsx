import { useEffect } from "react";
import { useQuoteStore } from "@/lib/quote-store";

export function QuoteHydration() {
  useEffect(() => {
    const result = useQuoteStore.persist.rehydrate();
    void Promise.resolve(result).then(() => {
      useQuoteStore.getState().setHydrated(true);
    });
  }, []);
  return null;
}
