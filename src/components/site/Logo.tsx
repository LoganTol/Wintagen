type LogoProps = { className?: string };

export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className ?? "h-7 w-7"}
      fill="none"
    >
      <rect x="2" y="2" width="12" height="12" rx="3" fill="var(--brand)" />
      <rect x="18" y="2" width="12" height="12" rx="6" fill="var(--brand)" opacity="0.45" />
      <rect x="2" y="18" width="12" height="12" rx="6" fill="var(--brand)" opacity="0.45" />
      <rect x="18" y="18" width="12" height="12" rx="3" fill="var(--brand)" />
    </svg>
  );
}

export function Wordmark({ className }: LogoProps) {
  return (
    <span className={"flex items-center gap-2.5 " + (className ?? "")}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight text-brand">Wintagen</span>
    </span>
  );
}
