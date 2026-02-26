import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function RequiredMarksPage() {
  return (
    <SEOPageTemplate
      title="Required Marks Calculator to Pass — Know What You Need to Score"
      metaDescription="Calculate the minimum marks required to pass your exams. Free required marks calculator for students — know exactly what you need to score."
      h1="Required Marks Calculator to Pass — Plan Your Exam Strategy"
      subtitle="Find out exactly what marks you need in upcoming exams to pass or hit your target."
      breadcrumb="Required Marks"
      faqs={[
        { q: "How to calculate required marks to pass?", a: "Required = Target% × Total Marks ÷ 100 − Already Obtained. Our calculator handles weighted assessments too." },
        { q: "What is the passing percentage in most colleges?", a: "Generally 40% for pass, 50% for second class, 60% for first class. Engineering subjects may have 45% passing marks." },
        { q: "Can I calculate marks needed for distinction?", a: "Yes! Set your target to 75% or whatever your university defines as distinction. The calculator shows exact marks needed." },
        { q: "Does internal marks affect passing?", a: "Yes. Most universities split marks into internal (20-30%) and external (70-80%). Our goal calculator handles weighted components." },
        { q: "What if the required marks are more than maximum?", a: "If the calculator shows you need more than 100%, the target isn't achievable. Consider adjusting your target or focusing on other subjects." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">How to Calculate Required Marks</h2>
        <p className="text-muted-foreground leading-relaxed">Knowing the minimum marks you need to score helps you focus your preparation. Our required marks calculator works backwards from your target percentage, accounting for marks already obtained in internal assessments, assignments, and mid-terms.</p>
        <h3 className="text-lg font-semibold">Formula</h3>
        <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-3 rounded-lg">Required Score = ((Target% × Total Weight) − Earned Weighted Score) ÷ Remaining Weight × 100</p>
      </section>
    </SEOPageTemplate>
  );
}
