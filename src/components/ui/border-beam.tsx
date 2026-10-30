import { cn } from "@/lib/utils";

/** Adapted from Linkify's MIT-licensed BorderBeam: masked border + offset-path beam. */
export function BorderBeam({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("border-beam", className)}>
      <div className="border-beam__glow" />
      <div className="border-beam__track" />
    </div>
  );
}