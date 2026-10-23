import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { GetStartedForm } from "@/components/site/GetStartedForm";

/** Set to "" to show the prompt on every visit; "session" shows it once per browser session. */
const FREQUENCY: "session" | "always" = "session";
const STORAGE_KEY = "wintagen-get-started-prompt";
const DELAY_MS = 900;

/**
 * Welcome prompt for the Get Started journey. Opens shortly after the homepage
 * loads, with an always-visible close button in the top right of the panel.
 */
export function GetStartedModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (FREQUENCY === "session") {
      try {
        if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;
      } catch {
        // Storage unavailable — still show once for this page view.
      }
    }
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage failures.
    }
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 py-10 sm:p-8"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-foreground/45 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-300"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-started-modal-title"
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-soft motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95 motion-safe:duration-300"
      >
        {/* Sticky header: brand eyebrow, title, and the close button. */}
        <div className="sticky top-0 z-10 border-b border-border bg-background/95 px-5 py-4 backdrop-blur-sm sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.12em] text-brand uppercase sm:text-sm">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-accent" />
                Get started
              </p>
              <h2
                id="get-started-modal-title"
                className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Tell us what you're working on.
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close and continue browsing"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">
            Three short steps. No pressure, no commitment — and a video meeting is never
            required.
          </p>
        </div>

        {/* Scrollable journey body. */}
        <div className="max-h-[calc(100dvh-14rem)] overflow-y-auto px-5 py-8 sm:px-8">
          <GetStartedForm idPrefix="modal" />
        </div>
      </div>
    </div>
  );
}
