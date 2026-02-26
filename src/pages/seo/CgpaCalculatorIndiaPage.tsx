import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function CgpaCalculatorIndiaPage() {
  return (
    <SEOPageTemplate
      title="CGPA Calculator India — Free for Indian University Students 2025"
      metaDescription="Free CGPA calculator for Indian university students. Supports 10-point scale, CBSE, VTU, JNTU, Anna University. Calculate CGPA with credits instantly."
      h1="CGPA Calculator India — For All Indian Universities"
      subtitle="Free CGPA calculator supporting 10-point scale used by Indian colleges and universities."
      breadcrumb="CGPA India"
      faqs={[
        { q: "Which Indian universities does this calculator support?", a: "All Indian universities using 10-point, 5-point, or 4-point scales. Works for VTU, JNTU, Anna University, Mumbai University, Delhi University, and more." },
        { q: "How is CGPA calculated in Indian universities?", a: "Most Indian universities use: CGPA = Σ(Grade Point × Credits) ÷ Σ(Credits) on a 10-point scale. Our calculator follows this standard." },
        { q: "What is the CGPA to percentage formula for CBSE?", a: "CBSE formula: Percentage = CGPA × 9.5. Example: 8.0 CGPA = 76% percentage." },
        { q: "What is the VTU CGPA formula?", a: "VTU uses: Percentage = (CGPA − 0.75) × 10. The grading is on a 10-point scale with O, A+, A, B+, B, C, P grades." },
        { q: "Is 7.5 CGPA good in India?", a: "Yes, 7.5/10 is considered good. It translates to ~71% (×9.5 formula) and qualifies you for most campus placements." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">CGPA Calculation for Indian Students</h2>
        <p className="text-muted-foreground leading-relaxed">Indian universities predominantly use the 10-point CGPA system introduced by UGC. Our free CGPA calculator India supports the standard grade-to-point mapping used across engineering colleges, arts & science colleges, and central universities.</p>
        <h3 className="text-lg font-semibold">Indian 10-Point Grading Scale</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-muted-foreground">
            <thead><tr className="border-b border-border"><th className="text-left py-2">Grade</th><th className="text-left py-2">Points</th><th className="text-left py-2">Marks Range</th></tr></thead>
            <tbody>
              {[
                { g: "O (Outstanding)", p: "10", m: "90-100%" },
                { g: "A+ (Excellent)", p: "9", m: "80-89%" },
                { g: "A (Very Good)", p: "8", m: "70-79%" },
                { g: "B+ (Good)", p: "7", m: "60-69%" },
                { g: "B (Above Average)", p: "6", m: "50-59%" },
                { g: "C (Average)", p: "5", m: "40-49%" },
                { g: "P (Pass)", p: "4", m: "35-39%" },
                { g: "F (Fail)", p: "0", m: "Below 35%" },
              ].map(r => (
                <tr key={r.g} className="border-b border-border/50"><td className="py-1.5 font-medium">{r.g}</td><td className="text-primary font-bold">{r.p}</td><td>{r.m}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SEOPageTemplate>
  );
}
