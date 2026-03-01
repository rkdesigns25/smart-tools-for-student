import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const isDev = import.meta.env.DEV;
const CLIENT_ID = import.meta.env.VITE_ADSENSE_CLIENT_ID || "ca-pub-YOUR_PUBLISHER_ID";

interface AdSlotProps {
  adSlot: string;
  adFormat?: "auto" | "horizontal" | "vertical" | "rectangle" | "fluid";
  adLayout?: string;
  className?: string;
  style?: React.CSSProperties;
  responsive?: boolean;
}

/**
 * Core AdSense slot renderer.
 * - Lazy-loads via IntersectionObserver (loads only when near viewport)
 * - Reserves space to prevent CLS
 * - Shows placeholder in dev mode
 * - Fallback when ads are blocked
 */
export default function AdSlot({
  adSlot,
  adFormat = "auto",
  adLayout,
  className = "",
  style,
  responsive = true,
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  const pushAd = useCallback(() => {
    if (pushed.current || isDev) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense blocked or not loaded
    }
  }, []);

  useEffect(() => {
    if (isDev || pushed.current) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pushAd();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pushAd]);

  if (isDev) {
    return (
      <div className={`w-full flex items-center justify-center ${className}`}>
        <div
          className="w-full border-2 border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground text-xs"
          style={{ minHeight: 90, ...style }}
        >
          📢 Ad Slot: {adSlot} ({adFormat})
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        {...(adLayout ? { "data-ad-layout": adLayout } : {})}
        {...(responsive ? { "data-full-width-responsive": "true" } : {})}
      />
    </div>
  );
}
