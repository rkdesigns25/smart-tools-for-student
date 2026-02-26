import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function GpaCalculatorOnlinePage() {
  return (
    <SEOPageTemplate
      title="GPA Calculator Online Free 2025 — Calculate Your Grade Point Average"
      metaDescription="Free online GPA calculator. Calculate your grade point average instantly with support for 4.0, 5.0, and 10.0 scales. Works for college and university students worldwide."
      h1="GPA Calculator Online Free — Instant Grade Point Average"
      subtitle="Calculate your GPA instantly with our free online calculator. Supports multiple grading scales."
      breadcrumb="GPA Calculator"
      faqs={[
        { q: "How to calculate GPA online?", a: "Enter your subjects, select grades, and input credit hours. GPA = Σ(Grade Point × Credits) ÷ Σ(Credits). Our calculator computes this automatically." },
        { q: "What is the difference between GPA and CGPA?", a: "GPA usually refers to one semester or term. CGPA (Cumulative GPA) is the average across all semesters. Both use the same formula." },
        { q: "What GPA scale does my university use?", a: "US universities typically use 4.0 scale. Indian universities use 10.0 scale. Some international universities use 5.0 scale. Our calculator supports all three." },
        { q: "Is 3.5 GPA good on a 4.0 scale?", a: "Yes! 3.5/4.0 is equivalent to an A- average, which is excellent. It's competitive for most graduate school admissions and job applications." },
        { q: "Can I calculate weighted GPA?", a: "Yes, our calculator uses credit-weighted calculations by default. Courses with more credits have proportionally more impact on your GPA." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Free GPA Calculator for Students</h2>
        <p className="text-muted-foreground leading-relaxed">Whether you're in the US using a 4.0 scale, in India on a 10.0 scale, or anywhere else — our free GPA calculator online gives you instant, accurate results. Simply enter your courses, grades, and credits to calculate your grade point average.</p>
        <h3 className="text-lg font-semibold">GPA Scale Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-muted-foreground">
            <thead><tr className="border-b border-border"><th className="text-left py-2">Letter</th><th className="text-left py-2">4.0</th><th className="text-left py-2">10.0</th><th className="text-left py-2">%</th></tr></thead>
            <tbody>
              {[
                { l: "A+", a: "4.0", b: "10", p: "90-100%" },
                { l: "A", a: "4.0", b: "9", p: "80-89%" },
                { l: "B+", a: "3.3", b: "8", p: "70-79%" },
                { l: "B", a: "3.0", b: "7", p: "60-69%" },
                { l: "C", a: "2.0", b: "5", p: "50-59%" },
              ].map(r => (
                <tr key={r.l} className="border-b border-border/50"><td className="py-1.5 font-medium">{r.l}</td><td>{r.a}</td><td>{r.b}</td><td>{r.p}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SEOPageTemplate>
  );
}
