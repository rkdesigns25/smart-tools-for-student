import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function HowToImproveCgpaPage() {
  return (
    <SEOPageTemplate
      title="How to Improve CGPA — Tips & Calculator for Final Semester Students"
      metaDescription="Learn proven strategies to improve your CGPA. Use our free calculator to find exactly what grades you need. Tips for raising CGPA in final semester."
      h1="How to Improve CGPA — Strategies & Required Grade Calculator"
      subtitle="Proven tips to raise your CGPA and a free calculator to know exactly what you need."
      breadcrumb="Improve CGPA"
      faqs={[
        { q: "Can I improve my CGPA in the final semester?", a: "Yes! Focus on high-credit courses. Even a 0.5 improvement in SGPA of a high-credit semester can raise your CGPA by 0.1-0.2 points." },
        { q: "How much can CGPA change in one semester?", a: "Depends on remaining credits vs completed credits. More remaining credits = more potential change. Use our GPA Predictor for exact numbers." },
        { q: "What grades do I need to raise my CGPA by 0.5?", a: "This depends on your completed credits. Use our AI GPA Predictor — enter current CGPA, completed credits, and target CGPA to get the exact required GPA." },
        { q: "Does retaking courses improve CGPA?", a: "Many universities allow course retakes with the new grade replacing the old one. Check your institution's policy on grade replacement." },
        { q: "Is 7.0 CGPA enough for placements?", a: "Most mass-recruiting companies accept 6.0-6.5+. Product companies typically need 7.0-7.5+. Dream companies often require 8.0+." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Proven Strategies to Raise Your CGPA</h2>
        <div className="space-y-3">
          {[
            { title: "1. Target High-Credit Subjects", desc: "A grade improvement in a 4-credit course impacts CGPA twice as much as a 2-credit course." },
            { title: "2. Use the AI GPA Predictor", desc: "Calculate exactly what GPA you need in remaining semesters to hit your target CGPA." },
            { title: "3. Maintain 90%+ Attendance", desc: "Students with higher attendance statistically score better. Use our attendance calculator to stay on track." },
            { title: "4. Study Smart with Time Estimation", desc: "Use our study time estimator to allocate hours based on subject difficulty." },
            { title: "5. Focus on Weak Subjects First", desc: "Improving from C to B has more CGPA impact than improving from A to A+ in most grading systems." },
          ].map(s => (
            <div key={s.title} className="glass-card p-4">
              <h3 className="font-semibold text-sm">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SEOPageTemplate>
  );
}
