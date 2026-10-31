import { describe, expect, test } from "bun:test";
import { createRootRoute, createRoute, createRouter, createMemoryHistory } from "@tanstack/react-router";
import { sitemapStaticPaths, sitemapXML } from "./sitemap";

describe("router-derived sitemap", () => {
  test("includes eligible pages and excludes noindex decisions and private subtrees", () => {
    const root = createRootRoute({ staticData: { sitemap: false } });
    const page = (path: string, sitemap: boolean) => createRoute({ getParentRoute: () => root, path, staticData: { sitemap } });
    const privateLayout = createRoute({ getParentRoute: () => root, path: "private", staticData: { sitemap: "exclude-subtree" } });
    const privateChild = createRoute({ getParentRoute: () => privateLayout, path: "details", staticData: { sitemap: true } });
    const router = createRouter({
      history: createMemoryHistory(),
      routeTree: root.addChildren([
        page("/", true), page("about", true), page("products", true),
        page("services", true), page("get-started", true), page("privacy", false),
        page("terms", false), page("sitemap.xml", false),
        privateLayout.addChildren([privateChild]),
      ]),
    });
    expect(sitemapStaticPaths(router)).toEqual(["/", "/about", "/get-started", "/products", "/services"]);
  });

  test("uses the public origin without manufacturing content timestamps", () => {
    const xml = sitemapXML("https://wintagen.com", [{ path: "/" }, { path: "/products" }, { path: "/products" }]);
    expect(xml).toContain("<loc>https://wintagen.com/products</loc>");
    expect(xml.match(/<url>/g)?.length).toBe(2);
    expect(xml).not.toContain("<lastmod>");
  });

  test("rejects external destinations", () => {
    expect(() => sitemapXML("https://wintagen.com", [{ path: "//other.example/products" }])).toThrow("Invalid sitemap path");
  });
});