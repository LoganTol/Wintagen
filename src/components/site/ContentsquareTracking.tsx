import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

type TrackingWindow = Window & {
  _uxa?: unknown[][];
};

const TAG_URL = "https://t.contentsquare.net/uxa/e9670d0f6ddcd.js";
const TAG_ELEMENT_ID = "wintagen-contentsquare";

/** Load once globally; report actual page changes without contact data or query strings. */
export function ContentsquareTracking() {
  const router = useRouter();

  useEffect(() => {
    const trackingWindow = window as TrackingWindow;
    trackingWindow._uxa = trackingWindow._uxa || [];
    const queue = trackingWindow._uxa;
    let lastPath = window.location.pathname;
    let loaded = false;
    let script = document.getElementById(TAG_ELEMENT_ID) as HTMLScriptElement | null;

    const trackCurrentPage = () => {
      const path = window.location.pathname;
      if (!loaded || path === lastPath) return;
      trackingWindow._uxa?.push(["setQuery", ""]);
      trackingWindow._uxa?.push(["trackPageview", path]);
      lastPath = path;
    };
    const onLoad = () => {
      loaded = true;
      if (script) script.dataset["loaded"] = "true";
      trackCurrentPage();
    };

    if (!script) {
      queue.push(["setQuery", ""]);
      queue.push(["setPath", lastPath, { lifespan: "onNextPageviewOnly" }]);
      script = document.createElement("script");
      script.id = TAG_ELEMENT_ID;
      script.async = true;
      script.src = TAG_URL;
      script.addEventListener("load", onLoad);
      document.head.appendChild(script);
    } else {
      loaded = script.dataset["loaded"] === "true";
      script.addEventListener("load", onLoad);
    }

    const unsubscribe = router.subscribe("onResolved", trackCurrentPage);
    return () => {
      unsubscribe();
      script?.removeEventListener("load", onLoad);
    };
  }, [router]);

  return null;
}