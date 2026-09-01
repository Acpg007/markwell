import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/company";
import { formatQuoteMessage, useQuoteStore } from "@/lib/quote-store";

export function QuoteForm() {
  const items = useQuoteStore((s) => s.items);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function payload() {
    return formatQuoteMessage(items, {
      name,
      company: companyName,
      email,
      phone,
      message,
    });
  }

  function onEmail(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please add your name");
      return;
    }
    const subject = encodeURIComponent(`Quotation request — ${companyName || name}`);
    const body = encodeURIComponent(payload());
    window.location.href = `mailto:${company.emails[0]}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app");
  }

  function onWhatsApp() {
    if (!name.trim()) {
      toast.error("Please add your name");
      return;
    }
    const text = encodeURIComponent(payload());
    window.open(`${company.mobiles[0].wa}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onEmail} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="rfq-name">Your name</Label>
          <Input id="rfq-name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="rfq-company">Company</Label>
          <Input
            id="rfq-company"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            autoComplete="organization"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="rfq-email">Email</Label>
          <Input
            id="rfq-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="rfq-phone">Phone</Label>
          <Input
            id="rfq-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="rfq-message">Message</Label>
        <Textarea
          id="rfq-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="List sizes, schedules, quantities and delivery site…"
        />
      </div>
      {items.length > 0 ? (
        <p className="text-sm text-muted-foreground">
          {items.length} line {items.length === 1 ? "item" : "items"} from your quotation list will be included.
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          You can send a general enquiry, or add products from the catalogue first.
        </p>
      )}
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button type="submit" className="sm:flex-1">
          <Mail className="size-4" />
          Email request
        </Button>
        <Button type="button" variant="secondary" className="sm:flex-1" onClick={onWhatsApp}>
          <MessageCircle className="size-4" />
          WhatsApp
        </Button>
      </div>
    </form>
  );
}
