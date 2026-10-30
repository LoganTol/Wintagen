import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

const TRAIL_LENGTH = 24;

function BeamTrail() {
  return Array.from({ length: TRAIL_LENGTH }, (_, index) => (
    <span
      key={index}
      className="border-beam__light"
      style={{
        "--trail-index": index,
        opacity: 1 - index / TRAIL_LENGTH,
      } as CSSProperties}
    />
  ));
}

/** Adapted from Linkify's MIT-licensed BorderBeam: masked border + offset-path beam. */
export function BorderBeam({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("border-beam", className)}>
      <div className="border-beam__glow"><BeamTrail /></div>
      <div className="border-beam__track"><BeamTrail /></div>
    </div>
  );
}
