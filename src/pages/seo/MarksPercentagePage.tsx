import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function MarksPercentagePage() {
  return (
    <SEOPageTemplate
      title="How to Calculate Percentage of Marks — Formula & Calculator"
      metaDescription="Learn how to calculate percentage of marks obtained with formula and examples. Free marks percentage calculator for school and college students."
      h1="How to Calculate Percentage of Marks Obtained"
      subtitle="Simple formula, worked examples, and a free calculator for marks to percentage conversion."
      breadcrumb="Marks Percentage"
      faqs={[
        { q: "What is the formula for percentage of marks?", a: "Percentage = (Marks Obtained ÷ Total Marks) × 100. Example: 420 out of 500 = (420/500) × 100 = 84%." },
        { q: "How to calculate total percentage for multiple subjects?", a: "Add all marks obtained, add all total marks, then: Overall % = (Total Obtained ÷ Total Maximum) × 100." },
        { q: "What percentage is first class?", a: "In most Indian universities: 60%+ is First Class, 50-59% is Second Class, 40-49% is Pass Class. 75%+ is often Distinction." },
        { q: "How to calculate CGPA from percentage?", a: "Common formula: CGPA = Percentage ÷ 9.5 (for ×9.5 system). Example: 80% ÷ 9.5 = 8.42 CGPA." },
        { q: "Can I use this for board exam percentage?", a: "Yes! This works for CBSE, ICSE, state boards, and university exams. Enter your marks obtained and total marks." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Marks to Percentage Conversion</h2>
        <p className="text-muted-foreground leading-relaxed">Calculating the percentage of marks obtained is one of the most common academic calculations. Whether you're checking school results, college grades, or competitive exam scores, the formula is simple and universal.</p>
        <h3 className="text-lg font-semibold">Formula</h3>
        <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-3 rounded-lg">Percentage = (Marks Obtained ÷ Total Marks) × 100</p>
        <h3 className="text-lg font-semibold">Classification Table (Indian Universities)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-muted-foreground">
            <thead><tr className="border-b border-border"><th className="text-left py-2">Percentage</th><th className="text-left py-2">Class</th></tr></thead>
            <tbody>
              {[
                { p: "75%+", c: "Distinction" }, { p: "60-74%", c: "First Class" },
                { p: "50-59%", c: "Second Class" }, { p: "40-49%", c: "Pass Class" }, { p: "Below 40%", c: "Fail" },
              ].map(r => (
                <tr key={r.p} className="border-b border-border/50"><td className="py-1.5 font-medium">{r.p}</td><td>{r.c}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SEOPageTemplate>
  );
}
