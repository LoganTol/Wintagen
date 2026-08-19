import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = { children: ReactNode; className?: string; delay?: number };

/** Fades content up once it scrolls into view. Disabled under prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none " +
        (shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0") +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}
