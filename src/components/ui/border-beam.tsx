import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

function BeamTrail() {
  return Array.from({ length: 48 }, (_, index) => (
    <span
      key={index}
      className={`border-beam__light ${index < 5 ? "border-beam__light--head" : index > 35 ? "border-beam__light--tail" : "border-beam__light--body"}`}
      style={{ "--trail-index": index, opacity: 1 - index / 48 } as CSSProperties}
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