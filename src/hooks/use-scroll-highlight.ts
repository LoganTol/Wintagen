import { useEffect } from "react";

/**
 * Touch-only: highlights elements matching `selector` while they pass through
 * the middle of the screen, so the hover look follows scroll progress instead
 * of being triggered by a finger resting on the card mid-scroll.
 */
export function useScrollHighlight(selector: string) {
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) e.target.classList.toggle("is-scroll-active", e.isIntersecting);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
