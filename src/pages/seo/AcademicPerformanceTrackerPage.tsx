import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function AcademicPerformanceTrackerPage() {
  return (
    <SEOPageTemplate
      title="Academic Performance Tracker Online — Free Student Dashboard"
      metaDescription="Track your academic performance online for free. Monitor CGPA, attendance, percentages, and study progress with our comprehensive student toolkit."
      h1="Academic Performance Tracker — Monitor Your Grades Online"
      subtitle="Free online dashboard to track CGPA, attendance, and academic progress."
      breadcrumb="Performance Tracker"
      faqs={[
        { q: "What can I track with this tool?", a: "Track CGPA across semesters, monitor attendance percentage, calculate marks percentages, and plan study time — all in one platform." },
        { q: "Is my data stored anywhere?", a: "No. All calculations run locally in your browser. We don't store any academic data on servers." },
        { q: "Can I track performance for multiple semesters?", a: "Yes! Use the semester-wise CGPA calculator to track your progress across all completed semesters." },
        { q: "How does this compare to university portals?", a: "Our tools complement university portals by providing instant calculations, predictive analysis, and planning features that most university systems don't offer." },
        { q: "Is this free for all students?", a: "Yes, 100% free for all students worldwide. No sign-up, no premium features, no limitations." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Track Your Academic Journey</h2>
        <p className="text-muted-foreground leading-relaxed">Smart Student Toolkit serves as your academic performance tracker online. Unlike basic university portals, our tools help you predict future performance, plan improvement strategies, and make data-driven decisions about your studies.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "CGPA Tracking", icon: "🎓" },
            { label: "Attendance Monitor", icon: "📋" },
            { label: "Grade Prediction", icon: "🎯" },
            { label: "Study Planning", icon: "⏰" },
          ].map(f => (
            <div key={f.label} className="glass-card p-3 text-center">
              <p className="text-xl">{f.icon}</p>
              <p className="text-xs font-medium">{f.label}</p>
            </div>
          ))}
        </div>
      </section>
    </SEOPageTemplate>
  );
}
