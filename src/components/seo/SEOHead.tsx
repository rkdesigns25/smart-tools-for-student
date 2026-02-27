import { useEffect } from "react";
import { SITE_URL } from "@/lib/site";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object | object[];
}

export default function SEOHead({ title, description, canonical, jsonLd }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const currentUrl = canonical || `${SITE_URL}${window.location.pathname}`;

    setMeta("description", description);
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Smart Student Toolkit", "property");
    setMeta("og:image", `${SITE_URL}/og-image.png`, "property");
    setMeta("og:url", currentUrl, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${SITE_URL}/og-image.png`);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = currentUrl;

    // JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo="true"]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "true");
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('script[data-seo="true"]').forEach((s) => s.remove());
    };
  }, [title, description, canonical, jsonLd]);

  return null;
}
