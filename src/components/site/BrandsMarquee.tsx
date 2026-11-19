import { useState } from "react";
import { Pause, Play } from "lucide-react";
import quicksiteLogo from "@/assets/quicksite-logo.png.asset.json";
import { Button } from "@/components/ui/button";

// Keep previously removed product URLs removed; add approved logos here later.
const BRANDS = [
  { id: "quicksite", name: "QuickSite", logo: quicksiteLogo.url },
  { id: "proplans", name: "ProPlans", logo: null },
  { id: "aether", name: "Aether", logo: null },
  { id: "ledger-connect", name: "Ledger Connect", logo: null },
] as const;

export function BrandsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="our-brands" className="brands-marquee" aria-labelledby="brands-heading">
      <div className="site-container brands-marquee__heading">
        <h2 id="brands-heading" className="section-label">Our Brands</h2>
        <Button
          variant="ghost"
          size="icon"
          className="brands-marquee__pause"
          aria-label={paused ? "Play brand carousel" : "Pause brand carousel"}
          title={paused ? "Play brand carousel" : "Pause brand carousel"}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        </Button>
      </div>
      <div className="brands-marquee__viewport">
        <div className={`brands-marquee__track${paused ? " is-paused" : ""}`}>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="brands-marquee__group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {BRANDS.map((brand) => (
                <div key={brand.id} className="brands-marquee__mark">
                  {brand.logo && (
                    <span
                      className="brands-marquee__symbol"
                      aria-hidden="true"
                      style={{ maskImage: `url(${brand.logo})`, WebkitMaskImage: `url(${brand.logo})` }}
                    />
                  )}
                  <span className="brands-marquee__name">{brand.name}</span>
                  <span className="brands-marquee__accent" aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}