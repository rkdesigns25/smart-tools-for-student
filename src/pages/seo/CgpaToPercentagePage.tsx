import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function CgpaToPercentagePage() {
  return (
    <SEOPageTemplate
      title="CGPA to Percentage Calculator — Convert CGPA to Percentage Instantly"
      metaDescription="Convert CGPA to percentage using standard formulas. Supports ×9.5, ×10, and custom multipliers. Free CGPA to percentage calculator for Indian universities."
      h1="CGPA to Percentage Calculator — Instant Conversion"
      subtitle="Convert your CGPA to percentage using the standard formula used by Indian universities and colleges."
      breadcrumb="CGPA to Percentage"
      faqs={[
        { q: "What is the formula for CGPA to percentage conversion?", a: "Most Indian universities use: Percentage = CGPA × 9.5. Some universities use CGPA × 10. Always verify with your institution." },
        { q: "Is CGPA to percentage the same for all universities?", a: "No. Different universities use different multipliers. CBSE uses ×9.5, some state universities use ×10, and some have their own conversion tables." },
        { q: "How to convert 8.5 CGPA to percentage?", a: "Using the standard formula: 8.5 × 9.5 = 80.75%. If your university uses ×10: 8.5 × 10 = 85%." },
        { q: "What percentage is 7.0 CGPA?", a: "Using ×9.5 formula: 7.0 × 9.5 = 66.5%. Using ×10 formula: 7.0 × 10 = 70%." },
        { q: "Can I use this for engineering college CGPA?", a: "Yes. Most engineering colleges in India follow the ×9.5 or ×10 formula. This CGPA to percentage calculator works for all scales." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">How to Convert CGPA to Percentage</h2>
        <p className="text-muted-foreground leading-relaxed">
          Converting CGPA to percentage is simple using the standard formula adopted by most Indian universities and CBSE board. The most common conversion is <strong>Percentage = CGPA × 9.5</strong>. This CGPA to percentage calculator gives you instant, accurate results for any CGPA value.
        </p>
        <h3 className="text-lg font-semibold">Standard Conversion Formulas</h3>
        <div className="text-muted-foreground text-sm bg-muted/50 p-3 rounded-lg space-y-1 font-mono">
          <p>CBSE Formula: Percentage = CGPA × 9.5</p>
          <p>Alternative: Percentage = CGPA × 10</p>
          <p>VTU Formula: Percentage = (CGPA - 0.75) × 10</p>
        </div>
        <h3 className="text-lg font-semibold">Quick Reference Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-muted-foreground">
            <thead><tr className="border-b border-border"><th className="text-left py-2">CGPA</th><th className="text-left py-2">×9.5</th><th className="text-left py-2">×10</th></tr></thead>
            <tbody>
              {[10, 9.5, 9, 8.5, 8, 7.5, 7, 6.5, 6].map(c => (
                <tr key={c} className="border-b border-border/50"><td className="py-1.5 font-medium">{c}</td><td>{(c * 9.5).toFixed(1)}%</td><td>{(c * 10).toFixed(1)}%</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="glass-card p-6 space-y-3">
        <h2 className="text-xl font-bold">Why Convert CGPA to Percentage?</h2>
        <p className="text-muted-foreground leading-relaxed">Many job applications, competitive exams, and higher education admissions require percentage instead of CGPA. Use our free CGPA to percentage calculator to convert your grades instantly — no sign-up needed.</p>
      </section>
    </SEOPageTemplate>
  );
}
