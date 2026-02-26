import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function SmartStudentToolsPage() {
  return (
    <SEOPageTemplate
      title="Smart Student Tools Free — All Academic Calculators in One Place"
      metaDescription="Free smart student tools: CGPA calculator, attendance tracker, percentage calculator, AI study planner, and more. Everything a student needs in one toolkit."
      h1="Smart Student Tools — Free Academic Calculators & Planners"
      subtitle="All the academic tools a student needs — CGPA, attendance, percentage, and AI planning — in one free platform."
      breadcrumb="Smart Student Tools"
      faqs={[
        { q: "What tools are available?", a: "CGPA calculator, SGPA calculator, SGPA to CGPA converter, attendance calculator, bunk calculator, percentage calculator, AI GPA predictor, attendance planner, goal calculator, and study time estimator." },
        { q: "Are all tools free?", a: "Yes, 100% free. No sign-up, no premium features, no ads blocking results. Every tool is completely free forever." },
        { q: "Do I need to create an account?", a: "No account needed. All tools work instantly in your browser without registration." },
        { q: "Is my data private?", a: "Absolutely. All calculations run locally in your browser. We don't collect, store, or transmit any data." },
        { q: "Can I use these on mobile?", a: "Yes! All tools are fully responsive and work perfectly on mobile phones, tablets, and desktops." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Your Complete Academic Toolkit</h2>
        <p className="text-muted-foreground leading-relaxed">Smart Student Toolkit is the only platform you need for all academic calculations. From calculating CGPA with credits to predicting required grades, tracking attendance, and planning study time — every tool is free, instant, and designed for real student needs.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "🎓 CGPA Calculator", "📊 SGPA Calculator", "🔄 SGPA to CGPA",
            "📋 Attendance Calculator", "🎉 Bunk Calculator", "📈 Percentage Calculator",
            "🎯 GPA Predictor", "📅 Attendance Planner", "⏰ Study Planner",
          ].map(t => (
            <div key={t} className="glass-card p-3 text-center text-sm font-medium">{t}</div>
          ))}
        </div>
      </section>
    </SEOPageTemplate>
  );
}
