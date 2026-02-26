import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function AiGpaPredictorPage() {
  return (
    <SEOPageTemplate
      title="AI GPA Predictor — Calculate Required GPA to Reach Your Target"
      metaDescription="Free AI GPA predictor for students. Enter your current CGPA and target — find exactly what GPA you need in remaining semesters. Smart academic planning tool."
      h1="AI GPA Predictor — Know What GPA You Need"
      subtitle="Predict the exact GPA required in your remaining credits to reach your target CGPA."
      breadcrumb="AI GPA Predictor"
      faqs={[
        { q: "How does the AI GPA predictor work?", a: "It uses the weighted average formula: Required GPA = (Target CGPA × Total Credits − Current CGPA × Completed Credits) ÷ Remaining Credits." },
        { q: "Is this GPA prediction accurate?", a: "The math is exact. The 'AI' part helps you understand what's achievable. If the required GPA exceeds your scale maximum, the target isn't achievable." },
        { q: "Can I predict my CGPA after next semester?", a: "Yes! Enter your expected grades for next semester as if they're 'remaining credits' and see what CGPA you'd achieve." },
        { q: "What if the required GPA is too high?", a: "If the required GPA exceeds your grading scale (e.g., needs 11.0 on a 10.0 scale), consider adjusting your target CGPA to something realistic." },
        { q: "How to raise CGPA in final semester?", a: "Use this tool to know exactly what you need. Then focus on high-credit courses and subjects where improvement is easiest." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Predict Your Required GPA</h2>
        <p className="text-muted-foreground leading-relaxed">Our AI GPA predictor takes the guesswork out of academic planning. Instead of wondering "can I reach 8.0 CGPA?", get an exact number — the GPA you need to score in your remaining credits. This helps you set realistic goals and focus your efforts.</p>
        <h3 className="text-lg font-semibold">Formula Used</h3>
        <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-3 rounded-lg">Required GPA = (Target × (Completed + Remaining) − Current × Completed) ÷ Remaining</p>
      </section>
    </SEOPageTemplate>
  );
}
