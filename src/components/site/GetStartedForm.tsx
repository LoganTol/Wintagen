import { useState } from "react";
import { Check, Phone, MessageSquare, Video, MessageCircle, Mail } from "lucide-react";

/** Video-call booking calendar (Google appointment page). */
export const BOOKING_URL = "https://calendar.app.google/Go6JD946vKGeDyid9";

/** Step 1 — edit these to change what visitors can pick from. */
export const NEEDS = [
  "A new website",
  "A web or mobile application",
  "Custom internal software",
  "Improving something we already have",
  "Product strategy and direction",
  "Automation and integrations",
  "Still figuring it out",
] as const;

/** Step 2 — feature interests. "Other" reveals a free-text field. */
export const FEATURES = [
  "User accounts and logins",
  "Payments or subscriptions",
  "Booking or scheduling",
  "Dashboards and reporting",
  "Content management",
  "Connecting to other tools",
  "AI-assisted features",
  "Other",
] as const;

/** Step 3 — contact methods. Each reveals the field it needs. */
export const CONTACT_METHODS = [
  {
    id: "phone",
    label: "Phone call",
    note: "A quick call, whenever suits you.",
    icon: Phone,
    field: "Phone number",
    type: "tel",
    placeholder: "(404) 555-0134",
  },
  {
    id: "text",
    label: "Text message",
    note: "Short, simple, no calendar needed.",
    icon: MessageSquare,
    field: "Mobile number",
    type: "tel",
    placeholder: "(404) 555-0134",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    note: "Handy if you're outside the US.",
    icon: MessageCircle,
    field: "WhatsApp number",
    type: "tel",
    placeholder: "+1 404 555 0134",
  },
  {
    id: "email",
    label: "Email",
    note: "Write it out, reply on your own time.",
    icon: Mail,
    field: "Email address",
    type: "email",
    placeholder: "you@company.com",
  },
  {
    id: "zoom",
    label: "Video call",
    note: "Pick a time on our calendar that suits you.",
    icon: Video,
    field: "Email for the invite",
    type: "email",
    placeholder: "you@company.com",
  },
] as const;

export type MethodId = (typeof CONTACT_METHODS)[number]["id"];

export function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={
        "flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " +
        (selected
          ? "border-brand/50 bg-brand-soft text-foreground"
          : "border-border bg-card text-muted-foreground hover:border-brand/30 hover:text-foreground")
      }
    >
      <span
        aria-hidden="true"
        className={
          "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border " +
          (selected ? "border-brand bg-brand text-brand-foreground" : "border-border")
        }
      >
        {selected && <Check className="h-3.5 w-3.5" />}
      </span>
      <span className="min-w-0 flex-1">{children}</span>
    </button>
  );
}

export const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand";

export function GetStartedForm({ idPrefix = "gs" }: { idPrefix?: string }) {
  const [needs, setNeeds] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [otherFeature, setOtherFeature] = useState("");
  const [method, setMethod] = useState<MethodId | null>(null);
  const [contactValue, setContactValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [notes, setNotes] = useState("");

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const chosen = CONTACT_METHODS.find((m) => m.id === method);
  /** Video call books straight through the calendar link — no contact field needed. */
  const isBooking = method === "zoom";
  const ready =
    needs.length > 0 &&
    !!method &&
    firstName.trim() &&
    lastName.trim() &&
    (isBooking || contactValue.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready || !chosen) return;
    const lines = [
      `Name: ${firstName.trim()} ${lastName.trim()}`,
      `What they need: ${needs.join(", ")}`,
      `Features: ${[...features.filter((f) => f !== "Other"), otherFeature.trim() ? `Other — ${otherFeature.trim()}` : ""].filter(Boolean).join(", ") || "Not specified"}`,
      `Preferred contact: ${chosen.label} — ${
        isBooking ? "Booking calendar link (https://calendar.app.google/Go6JD946vKGeDyid9)" : contactValue.trim()
      }`,
      notes.trim() ? `Notes: ${notes.trim()}` : "",
    ].filter(Boolean);
    // Configure the real destination here (e.g. a different inbox).
    window.location.href = `mailto:contact@wintagen.com?subject=${encodeURIComponent(
      `Project interest — ${firstName.trim()} ${lastName.trim()}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-14">
      {/* Step 1 */}
      <fieldset>
        <legend className="text-sm font-semibold tracking-[0.12em] text-brand uppercase">
          Step 1
        </legend>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">What do you need?</h2>
        <p className="mt-2 text-sm text-muted-foreground">Pick anything that applies.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {NEEDS.map((n) => (
            <OptionButton
              key={n}
              selected={needs.includes(n)}
              onClick={() => toggle(needs, setNeeds, n)}
            >
              {n}
            </OptionButton>
          ))}
        </div>
      </fieldset>

      {/* Step 2 */}
      <fieldset>
        <legend className="text-sm font-semibold tracking-[0.12em] text-brand uppercase">
          Step 2
        </legend>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Any features already in mind?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Optional — a rough sketch is plenty.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <OptionButton
              key={f}
              selected={features.includes(f)}
              onClick={() => toggle(features, setFeatures, f)}
            >
              {f}
            </OptionButton>
          ))}
        </div>
        {features.includes("Other") && (
          <div className="mt-4">
            <label className="text-sm font-medium" htmlFor={`${idPrefix}-other-feature`}>
              Tell us more
            </label>
            <input
              id={`${idPrefix}-other-feature`}
              value={otherFeature}
              onChange={(e) => setOtherFeature(e.target.value)}
              placeholder="What else should it do?"
              className={inputClass}
            />
          </div>
        )}
      </fieldset>

      {/* Step 3 */}
      <fieldset>
        <legend className="text-sm font-semibold tracking-[0.12em] text-brand uppercase">
          Step 3
        </legend>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          How would you like to hear from us?
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Your call, literally. A video meeting is never required here — if a text or a quick
          phone call gets you further, that works just as well for us.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {CONTACT_METHODS.map(({ id, label, note, icon: Icon }) => (
            <OptionButton
              key={id}
              selected={method === id}
              onClick={() => {
                setMethod(id);
                setContactValue("");
                // Video call hands the visitor straight to the booking calendar.
                if (id === "zoom" && typeof window !== "undefined") {
                  window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <span className="flex items-center gap-2 font-medium text-foreground">
                <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                {label}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">{note}</span>
            </OptionButton>
          ))}
        </div>

        {chosen && (
          <div className="mt-6 rounded-xl border border-brand/25 bg-brand-soft p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium" htmlFor={`${idPrefix}-first-name`}>
                  First name
                </label>
                <input
                  id={`${idPrefix}-first-name`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor={`${idPrefix}-last-name`}>
                  Last name
                </label>
                <input
                  id={`${idPrefix}-last-name`}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                  className={inputClass}
                />
              </div>
              {isBooking ? (
                <div className="sm:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Pick any open time on our calendar — your booking confirms instantly. And if
                    a video meeting ever feels like too much, a text or a quick call works just
                    as well.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-3 inline-flex items-center gap-2"
                  >
                    Open the booking calendar
                  </a>
                </div>
              ) : (
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium" htmlFor={`${idPrefix}-contact-value`}>
                    {chosen.field}
                  </label>
                  <input
                    id={`${idPrefix}-contact-value`}
                    type={chosen.type}
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    placeholder={chosen.placeholder}
                    className={inputClass}
                  />
                </div>
              )}
              <div className="sm:col-span-2">
                <label className="text-sm font-medium" htmlFor={`${idPrefix}-notes`}>
                  Anything else? <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id={`${idPrefix}-notes`}
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="A sentence or two about the project."
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}
      </fieldset>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={!ready} className="btn-primary disabled:opacity-50">
          Send my details
        </button>
        <p className="text-sm text-muted-foreground">
          Prefer plain email?{" "}
          <a className="font-medium text-brand underline" href="mailto:contact@wintagen.com">
            contact@wintagen.com
          </a>
        </p>
      </div>
    </form>
  );
}
