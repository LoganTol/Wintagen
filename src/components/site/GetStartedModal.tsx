import { useEffect, useRef, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetStartedForm } from "@/components/site/GetStartedForm";

/** Set to "" to show the prompt on every visit; "session" shows it once per browser session. */
const FREQUENCY: "session" | "always" = "session";
const STORAGE_KEY = "wintagen-get-started-prompt";
const DELAY_MS = 900;
/** How long the panel takes to shrink into the corner tab. */
const FLIGHT_MS = 430;
/** Corner inset the panel flies to — matches the tab's own inset. */
const CORNER_INSET = 20;

type Flight = { dx: number; dy: number };

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Welcome prompt for the Get Started journey. Opens shortly after the homepage
 * loads, with an always-visible close button in the top right of the panel.
 * Closing it glides the panel down into the bottom-right corner, where it
 * lands as a small tab so a visitor can reopen the journey at any point.
 */
export function GetStartedModal() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [flight, setFlight] = useState<Flight | null>(null);
  const [entered, setEntered] = useState(false);
  const [landed, setLanded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const flyingRef = useRef(false);
  const flightTimer = useRef<number | null>(null);

  useEffect(() => {
    let alreadySeen = false;
    if (FREQUENCY === "session") {
      try {
        alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
      } catch {
        // Storage unavailable — still show once for this page view.
      }
    }
    // A visitor who already closed the prompt this session gets the corner tab
    // straight away, so the journey is always reachable.
    if (alreadySeen) {
      setMinimized(true);
      return;
    }
    // The automatic popup is a homepage moment; everywhere else starts with
    // the corner tab so other pages stay uncluttered.
    const isHomepage = window.location.pathname === "/";
    if (!isHomepage) {
      setMinimized(true);
      return;
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
    // Once the opening animation has finished, drop its classes so the panel's
    // transform is free to drive the fly-to-corner motion.
    const enteredTimer = window.setTimeout(() => setEntered(true), 340);
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(enteredTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(
    () => () => {
      if (flightTimer.current !== null) window.clearTimeout(flightTimer.current);
    },
    [],
  );

  const finish = () => {
    flyingRef.current = false;
    setFlight(null);
    setOpen(false);
    setMinimized(true);
    setLanded(true);
  };

  /** Send the panel gliding into the corner tab instead of just vanishing. */
  const dismiss = () => {
    if (flyingRef.current) return;
    const panel = panelRef.current;
    if (!panel || prefersReducedMotion()) {
      finish();
      return;
    }
    const rect = panel.getBoundingClientRect();
    flyingRef.current = true;
    setFlight({
      dx: window.innerWidth - CORNER_INSET - rect.right,
      dy: window.innerHeight - CORNER_INSET - rect.bottom,
    });
    flightTimer.current = window.setTimeout(() => {
      flightTimer.current = null;
      finish();
    }, FLIGHT_MS);
  };

  const restore = () => {
    setLanded(false);
    setEntered(false);
    setOpen(true);
    restoreRef.current?.blur();
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 py-10 sm:p-8"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) dismiss();
          }}
        >
          <div
            aria-hidden="true"
            className={`fixed inset-0 bg-foreground/45 backdrop-blur-sm transition-opacity duration-300 ${
              flight
                ? "opacity-0"
                : `opacity-100 ${
                    entered
                      ? ""
                      : "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-300"
                  }`
            }`}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="get-started-modal-title"
            style={
              flight
                ? {
                    transform: `translate(${flight.dx}px, ${flight.dy}px) scale(0.14)`,
                    transformOrigin: "bottom right",
                    opacity: 0,
                    transition: `transform ${FLIGHT_MS}ms cubic-bezier(0.55, 0, 0.35, 1), opacity ${FLIGHT_MS}ms ease-in`,
                  }
                : undefined
            }
            className={`relative z-10 w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-background shadow-soft ${
              entered || flight
                ? ""
                : "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95 motion-safe:duration-300"
            }`}
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
                <Button
                  variant="outline"
                  size="icon"
                  ref={closeRef}
                  type="button"
                  onClick={dismiss}
                  aria-label="Close and continue browsing"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </Button>
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
      )}

      {/* Minimised journey: a corner tab that reopens the prompt. */}
      {!open && minimized && (
        <Button
          ref={restoreRef}
          size="lg"
          type="button"
          onClick={restore}
          aria-label="Open the Get started form"
          className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-[90] h-auto inline-flex items-center gap-2.5 rounded-full border border-brand/30 bg-brand px-5 py-3.5 text-sm font-semibold text-brand-foreground shadow-soft transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
            landed ? "motion-safe:pill-land" : "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:duration-300"
          }`}
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-accent" />
          Get started
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      )}
    </>
  );
}
