import { useEffect, useRef } from "react";

interface AdBannerProps {
  className?: string;
  slot?: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
}

export default function AdBanner({ className = "", slot = "YOUR_AD_SLOT_ID", format = "auto" }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
        pushed.current = true;
      }
    } catch {
      // AdSense not loaded — show placeholder
    }
  }, []);

  return (
    <div className={`w-full flex items-center justify-center py-3 ${className}`}>
      <div className="max-w-2xl w-full text-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
        {/* Fallback placeholder visible when AdSense hasn't loaded */}
        <noscript>
          <div className="glass-card px-6 py-3 text-xs text-muted-foreground opacity-60">
            📢 Ad Space — <span className="italic">Support Smart Student Toolkit</span>
          </div>
        </noscript>
      </div>
    </div>
  );
}
