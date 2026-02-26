import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function HowToCalculateCgpaPage() {
  return (
    <SEOPageTemplate
      title="How to Calculate CGPA — Step by Step Guide 2025 | Smart Student Toolkit"
      metaDescription="Learn how to calculate CGPA step by step with examples. Understand the CGPA formula, grading scales, and credit-based calculation method used by universities."
      h1="How to Calculate CGPA — Complete Step-by-Step Guide"
      subtitle="Master the CGPA calculation formula with easy examples and free calculator."
      breadcrumb="How to Calculate CGPA"
      faqs={[
        { q: "What is the easiest way to calculate CGPA?", a: "Use our free CGPA calculator: enter grades and credits for each subject. It multiplies grade points by credits, sums them, and divides by total credits automatically." },
        { q: "What is credit-based CGPA?", a: "Credit-based CGPA weighs each subject by its credit hours. A 4-credit A matters more than a 2-credit A. This is the standard system used by most universities." },
        { q: "How do I calculate CGPA from marks?", a: "First convert marks to grade points using your university's grading table, then apply: CGPA = Σ(Grade Point × Credits) ÷ Σ(Credits)." },
        { q: "Is CGPA calculated out of 4 or 10?", a: "It depends on your university. US universities typically use 4.0 scale. Indian universities use 10.0 scale. Our calculator supports both." },
        { q: "Can CGPA be higher than SGPA?", a: "Yes, if your earlier semesters had higher SGPAs. CGPA is the weighted average of all semesters, so it can be higher or lower than any individual SGPA." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Step-by-Step CGPA Calculation</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <div className="flex gap-3"><span className="text-primary font-bold text-lg">1.</span><p><strong>List all subjects</strong> with their grade points and credit hours from your marksheet.</p></div>
          <div className="flex gap-3"><span className="text-primary font-bold text-lg">2.</span><p><strong>Multiply</strong> each subject's grade point by its credit hours to get quality points.</p></div>
          <div className="flex gap-3"><span className="text-primary font-bold text-lg">3.</span><p><strong>Add up</strong> all quality points to get total quality points.</p></div>
          <div className="flex gap-3"><span className="text-primary font-bold text-lg">4.</span><p><strong>Add up</strong> all credit hours to get total credits.</p></div>
          <div className="flex gap-3"><span className="text-primary font-bold text-lg">5.</span><p><strong>Divide</strong> total quality points by total credits = Your CGPA!</p></div>
        </div>
        <h3 className="text-lg font-semibold">Example</h3>
        <div className="text-muted-foreground text-sm bg-muted/50 p-3 rounded-lg font-mono space-y-1">
          <p>Math: Grade A (9) × 4 credits = 36</p>
          <p>Physics: Grade B+ (7) × 3 credits = 21</p>
          <p>Chemistry: Grade A+ (10) × 3 credits = 30</p>
          <p>Total: (36+21+30) ÷ (4+3+3) = 87 ÷ 10 = <strong>8.7 CGPA</strong></p>
        </div>
      </section>
    </SEOPageTemplate>
  );
}
