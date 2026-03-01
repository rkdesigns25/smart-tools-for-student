import AdSlot from "./AdSense";

/* ── A. Header Banner (below navbar) ─────────────────────── */
export function HeaderAd() {
  return (
    <AdSlot
      adSlot="HEADER_AD_SLOT"
      adFormat="horizontal"
      className="border-b border-border/40 py-1"
      style={{ minHeight: 90 }}
    />
  );
}

/* ── B. In-Content Ad (between calculator sections) ──────── */
export function InContentAd({ className = "" }: { className?: string }) {
  return (
    <AdSlot
      adSlot="IN_CONTENT_AD_SLOT"
      adFormat="auto"
      className={`py-3 ${className}`}
      style={{ minHeight: 100 }}
    />
  );
}

/* ── C. Footer Ad (above footer) ─────────────────────────── */
export function FooterAd() {
  return (
    <AdSlot
      adSlot="FOOTER_AD_SLOT"
      adFormat="horizontal"
      className="border-t border-border/40 py-2"
      style={{ minHeight: 90 }}
    />
  );
}

/* ── E. Sidebar Ad (desktop only) ────────────────────────── */
export function SidebarAd() {
  return (
    <div className="hidden lg:block">
      <AdSlot
        adSlot="SIDEBAR_AD_SLOT"
        adFormat="vertical"
        responsive={false}
        style={{ minHeight: 600, width: 160 }}
      />
    </div>
  );
}
