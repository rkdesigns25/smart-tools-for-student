import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function BunkCalculatorPage() {
  return (
    <SEOPageTemplate
      title="Bunk Calculator for College — How Many Classes Can I Miss?"
      metaDescription="Free bunk calculator for college students. Find out exactly how many classes you can miss while maintaining 75% attendance. Instant results."
      h1="Bunk Calculator for College — Know Your Skip Limit"
      subtitle="Find out exactly how many classes you can bunk while staying above the attendance threshold."
      breadcrumb="Bunk Calculator"
      faqs={[
        { q: "How does the bunk calculator work?", a: "Enter total classes held and classes attended. The calculator shows how many more classes you can miss while maintaining your required attendance percentage (default 75%)." },
        { q: "How many classes can I miss with 75% attendance?", a: "For every 4 classes held, you can miss 1. With 100 total classes, you can miss 25. Our bunk calculator gives your exact number based on current attendance." },
        { q: "What is the 75% attendance rule?", a: "Most Indian colleges require 75% minimum attendance to be eligible for exams. Some universities require 80%. Below this, you may be debarred from exams." },
        { q: "Can I bunk if I already have low attendance?", a: "If you're below the threshold, you need to attend consecutive classes to recover. Our calculator shows exactly how many classes you need to attend." },
        { q: "Does the bunk calculator work for online classes?", a: "Yes! The math is the same whether classes are online or offline. Enter your total and attended classes for accurate results." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">How Many Classes Can I Miss?</h2>
        <p className="text-muted-foreground leading-relaxed">Every college student asks this question. Our bunk calculator for college gives you the exact answer based on your current attendance. Simply enter your total classes and attended classes — the bunk meter shows how many you can safely skip.</p>
        <h3 className="text-lg font-semibold">Bunk Formula</h3>
        <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-3 rounded-lg">Bunkable Classes = Floor((Attended × 100 - Threshold × Total) ÷ Threshold)</p>
        <h3 className="text-lg font-semibold">Quick Reference (75% Rule)</h3>
        <div className="grid grid-cols-3 gap-2">
          {[
            { total: 40, can: 10 }, { total: 60, can: 15 }, { total: 80, can: 20 },
            { total: 100, can: 25 }, { total: 120, can: 30 }, { total: 150, can: 37 },
          ].map(r => (
            <div key={r.total} className="glass-card p-3 text-center">
              <p className="text-xs text-muted-foreground">{r.total} classes</p>
              <p className="text-lg font-bold text-primary">{r.can}</p>
              <p className="text-xs text-muted-foreground">can miss</p>
            </div>
          ))}
        </div>
      </section>
    </SEOPageTemplate>
  );
}
