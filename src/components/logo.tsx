import { cn } from "@/lib/utils";

export function MarkwellMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22.5" className="fill-ink stroke-primary" strokeWidth="2" />
      <path
        d="M12 33V15h4.2l5.3 11.4L26.8 15H31v18h-3.6V20.4L22.2 33h-3.4L13.6 20.4V33H12Z"
        className="fill-paper"
      />
      <rect x="32.2" y="15" width="4.2" height="18" className="fill-primary" />
    </svg>
  );
}

export function Logo({ compact = false, inverted = false }: { compact?: boolean; inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <MarkwellMark className="size-9" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-wide uppercase",
            inverted ? "text-paper" : "text-ink",
          )}
        >
          Markwell
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-0.5 text-xs font-medium tracking-[0.18em] uppercase leading-none",
              inverted ? "text-paper/70" : "text-muted-foreground",
            )}
          >
            International W.L.L.
          </span>
        ) : null}
      </span>
    </span>
  );
}
