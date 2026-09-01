import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Printer } from "lucide-react";
import { QuoteForm } from "@/components/quote/quote-form";
import { company } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — Markwell International" }] }),
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-display text-sm tracking-[0.22em] text-primary uppercase">Contact</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Talk to Markwell</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Phone, WhatsApp or email — send sizes and we will quote. {company.country}.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ul className="space-y-4">
            <li className="rounded-xl border border-border bg-card p-5">
              <p className="flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase">
                <Phone className="size-3.5" /> Phone
              </p>
              <a href={company.phone.href} className="mt-2 block font-display text-2xl font-semibold">
                {company.phone.display}
              </a>
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <p className="flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase">
                <Printer className="size-3.5" /> Fax
              </p>
              <p className="mt-2 font-display text-2xl font-semibold">{company.fax.display}</p>
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">Mobile / WhatsApp</p>
              <ul className="mt-2 space-y-1">
                {company.mobiles.map((m) => (
                  <li key={m.href} className="flex items-center justify-between gap-3">
                    <a href={m.href} className="font-medium hover:underline">
                      {m.display}
                    </a>
                    <a href={m.wa} className="text-sm text-primary hover:underline" target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <p className="flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase">
                <Mail className="size-3.5" /> Email
              </p>
              <ul className="mt-2 space-y-1">
                {company.emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`} className="break-all text-sm font-medium hover:underline">
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 lg:col-span-3">
          <h2 className="font-display text-2xl font-semibold">Send an enquiry</h2>
          <p className="mt-1 mb-6 text-sm text-muted-foreground">
            Opens your email or WhatsApp with the message filled in — nothing is stored on this site.
          </p>
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
