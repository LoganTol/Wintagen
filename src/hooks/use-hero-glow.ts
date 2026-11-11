import { useEffect, useRef } from "react";

/** Update paint-only coordinates without rerendering content or resetting on children. */
export function useHeroGlow() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let x = 50;
    let y = 68;
    let targetX = x;
    let targetY = y;
    let frame = 0;
    let previous = 0;

    const animate = (time: number) => {
      const dt = previous ? Math.min(time - previous, 64) : 16;
      previous = time;
      const ease = 1 - Math.exp(-dt / 240);
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      element.style.setProperty("--glow-x", `${x}%`);
      element.style.setProperty("--glow-y", `${y}%`);
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.02) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = 0;
        previous = 0;
      }
    };
    const start = () => {
      if (!frame) frame = requestAnimationFrame(animate);
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return;
      const bounds = element.getBoundingClientRect();
      targetX = Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100));
      targetY = Math.max(0, Math.min(100, (event.clientY - bounds.top) / bounds.height * 100));
      start();
    };
    const leave = () => {
      targetX = 50;
      targetY = 68;
      start();
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      x = targetX = 50;
      y = targetY = 68;
      element.style.removeProperty("--glow-x");
      element.style.removeProperty("--glow-y");
    };
    element.addEventListener("pointerenter", move);
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", leave);
    media.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointerenter", move);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
      media.removeEventListener("change", reset);
    };
  }, []);
  return ref;
}