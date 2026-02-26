import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function CgpaSemesterWisePage() {
  return (
    <SEOPageTemplate
      title="CGPA Calculator Semester Wise — Track Your Progress Each Semester"
      metaDescription="Calculate CGPA semester wise with our free tool. Track your cumulative GPA progression across all semesters. Perfect for college and university students."
      h1="CGPA Calculator Semester Wise — Track Every Semester"
      subtitle="Monitor your CGPA progression across semesters and plan for improvement."
      breadcrumb="Semester Wise CGPA"
      faqs={[
        { q: "How to calculate CGPA semester wise?", a: "Enter SGPA and credits for each semester. CGPA = Σ(SGPA × Credits) ÷ Σ(Credits). Our tool calculates this automatically." },
        { q: "Does every semester count equally for CGPA?", a: "No — semesters with more credit hours have greater impact on your CGPA. That's why credit-weighted calculation matters." },
        { q: "How can I track CGPA improvement over semesters?", a: "Use our semester-wise calculator to see how each semester affects your cumulative GPA. Plan high grades in high-credit semesters for maximum impact." },
        { q: "What if I want to exclude a semester?", a: "Simply don't add that semester's data. The calculator only uses the semesters you enter." },
        { q: "How many semesters does BTech have?", a: "BTech typically has 8 semesters (4 years). Each semester's SGPA contributes to your final CGPA based on credit hours." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Why Track CGPA Semester Wise?</h2>
        <p className="text-muted-foreground leading-relaxed">Tracking your CGPA each semester helps you understand your academic trajectory. If your CGPA is dropping, you can identify weak semesters and plan improvement strategies. Our free semester-wise CGPA calculator lets you visualize your progress and plan ahead.</p>
        <h3 className="text-lg font-semibold">Tips for Improving CGPA Each Semester</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Focus on high-credit subjects — they impact CGPA more</li>
          <li>Target consistent grades rather than occasional spikes</li>
          <li>Use the AI GPA Predictor to plan target grades</li>
          <li>Attend classes regularly — attendance often correlates with grades</li>
          <li>Review previous semester performance to identify weak areas</li>
        </ul>
      </section>
    </SEOPageTemplate>
  );
}
