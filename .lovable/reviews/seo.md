# Wintagen SEO review — November 20, 2026

**0 failing findings in the fresh SEO foundations scan.** Google indexing coverage still needs attention, as detailed below; passing technical checks do not mean every page is indexed.

| Finding | Level | State |
| --- | --- | --- |
| Home page is reachable | low | passing |
| AI assistants can see your site as markdown | low | passing |
| Search engines see your fully-rendered pages | low | passing |
| Crawler rules look good | low | passing |
| Sitemap looks good | low | passing |
| Page basics are set | low | passing |
| Site icon is set up for search | low | passing |
| Home page search metadata is set | low | passing |
| Social preview basics are set | low | passing |

The older content and detailed metadata reviews are stale and are not counted as current results. The old warning about a missing sitemap reference is no longer present: the live robots.txt includes it.

## What Google currently has indexed

Source: **Logan's Google Search Console**, verified property `sc-domain:wintagen.com`. These are readings of Google's indexed records, not live indexing requests.

| Page | Google-reported status |
| --- | --- |
| Homepage `/` | Submitted and indexed |
| `/about` | Discovered — currently not indexed |
| `/services` | Discovered — currently not indexed |
| `/products` | URL is unknown to Google |
| `/ui-ux-design` | URL is unknown to Google |
| `/get-started` | URL is unknown to Google |

Google last crawled the homepage on **November 19, 2026**, successfully, using its mobile crawler. Google's chosen canonical and the declared canonical both match `https://wintagen.com/`. The inspection did not provide a mobile usability verdict.

**The main gap is discovery and indexing of the inner pages, not a broken homepage.** These records do not explain why Google has not indexed them; a live successful page fetch does not establish that Google has crawled it.

## Sitemap health

The live [sitemap](https://wintagen.com/sitemap.xml) returns valid XML and lists six public pages:

- Homepage
- About
- Get Started
- Products
- Services
- UI/UX Design

All six pages return HTTP 200 and have no indexing block. Privacy and Terms intentionally carry `noindex` and are excluded from the sitemap.

Google reports **zero errors and zero warnings** for the actual XML sitemap. It was last submitted October 31 and last downloaded November 12. Google's record reports five submitted URLs, while the current live sitemap contains six; Google's recorded download predates the current inventory.

Three additional entries were submitted as if they were sitemaps: `/about`, `/services`, and `/get-started`. Each has one reported error. They are ordinary HTML pages, not XML sitemaps, so they should not be submitted in the Sitemaps section. The API supplies error counts but no exact error cause; that cause remains unknown.

**Recommended cleanup:** keep `https://wintagen.com/sitemap.xml` as the sitemap submission and remove the three ordinary-page submissions. Removing a sitemap entry does not delete its page from the website.

## Search performance

Google Search Console returned the following finalized data available for **October 23–November 19, 2026**. Recent days may not yet be fully reported.

| Metric | Reported value |
| --- | --- |
| Clicks | 31 |
| Impressions | 65 |
| Click-through rate | 47.7% |
| Average position | 3.34 |

This is a small sample. The average position does **not** mean Wintagen ranks third for general web design or software development searches. Only one query row was returned (`wintage`, one impression, no clicks, position 74); privacy filtering means query-level rows do not account for all totals. There is not enough visible query data to recommend a specific new keyword strategy from this report.

## On-page observations and next steps

Live checks found distinct titles and descriptions on all six public pages, one main heading per page, and Organization structured data on the homepage.

1. **Clean up the three incorrect sitemap submissions**, then refresh the actual XML sitemap submission once to reflect the changed page inventory.
2. **Use Google Search Console's URL Inspection to request indexing** for the five inner pages. The API used for this review cannot request indexing or run Google's live test; this step must be done in Search Console. Requests do not guarantee indexing.
3. **Add self-referencing canonical links** to About, Products, Services, and Get Started. They are currently missing on the live pages; this is a consistency improvement, not proof of the cause of non-indexing.
4. Recheck indexing after Google processes the updated inventory before making assumptions about rankings or adding new search-targeted content.

Google controls whether extra page links appear beneath your homepage in search results. A sitemap helps discovery but does not guarantee these sitelinks.

## Approved cleanup completed — November 20, 2026

- Removed the three incorrect HTML-page sitemap submissions from Logan's Google Search Console; Google returned HTTP 204 for each removal.
- Refreshed the XML sitemap submission once. A fresh read confirms it is the only remaining sitemap, last submitted at 04:28:31 UTC and downloaded at 04:28:32 UTC, with **six submitted URLs, zero errors, and zero warnings**. Submitted URL counts do not establish indexing.
- Added self-referencing canonical links and matching Open Graph page addresses to About, Products, Services, and Get Started. Verified the preview's server-rendered HTML: all four return HTTP 200 with exactly one correct canonical and page address. Sitemap tests pass and the preview build is healthy.

**Publication remains necessary:** the four page-address changes reach the live website on the next publish. No page content, crawler rules, or legal-page indexing exclusions were changed.

**Manual next step:** use URL Inspection in Google Search Console for the five inner pages listed above and choose Request indexing. The API cannot perform that action, and sitemap acceptance does not guarantee indexing. No new indexing verdict is claimed by this cleanup.

There were no failing current scanner findings to mark fixed; these were the additional cleanup recommendations approved after the review.