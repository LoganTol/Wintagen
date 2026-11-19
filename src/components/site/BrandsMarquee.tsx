import quicksiteLogo from "@/assets/quicksite-wordmark.png.asset.json";
import proplansLogo from "@/assets/proplans-wordmark.png.asset.json";
import aetherLogo from "@/assets/aether-wordmark.png.asset.json";
import ledgerConnectLogo from "@/assets/ledger-connect-wordmark.png.asset.json";

// Keep previously removed product URLs removed; add approved logos here later.
const BRANDS = [
  { id: "quicksite", name: "QuickSite", logo: quicksiteLogo.url, wordmark: true },
  { id: "proplans", name: "ProPlans", logo: proplansLogo.url, wordmark: true },
  { id: "aether", name: "Aether", logo: aetherLogo.url, wordmark: true },
  { id: "ledger-connect", name: "Ledger Connect", logo: ledgerConnectLogo.url, wordmark: true },
] as const;

export function BrandsMarquee() {
  return (
    <section id="our-brands" className="brands-marquee" aria-label="Our products">
      <div className="brands-marquee__viewport">
        <div className="brands-marquee__track">
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
                      className={`brands-marquee__symbol${brand.wordmark ? " brands-marquee__symbol--wordmark" : ""}${brand.id === "aether" ? " brands-marquee__symbol--tall" : ""}`}
                      aria-hidden="true"
                      style={{ maskImage: `url(${brand.logo})`, WebkitMaskImage: `url(${brand.logo})` }}
                    />
                  )}
                  <span className={brand.wordmark ? "sr-only" : "brands-marquee__name"}>{brand.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}