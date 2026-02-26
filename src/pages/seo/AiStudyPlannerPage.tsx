import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function AiStudyPlannerPage() {
  return (
    <SEOPageTemplate
      title="AI Study Planner for Students — Free Smart Academic Planner"
      metaDescription="Free AI study planner for students. Plan your studies, predict GPA, estimate study hours, and track attendance — all in one smart toolkit."
      h1="AI Study Planner for Students — Plan Smarter, Score Better"
      subtitle="Free AI-powered academic planning tools for college and university students."
      breadcrumb="AI Study Planner"
      faqs={[
        { q: "What is an AI study planner?", a: "An AI study planner uses mathematical models to help you plan studies, predict required grades, estimate study time, and optimize your academic performance." },
        { q: "Is the AI study planner free?", a: "Yes, all tools are 100% free with no sign-up required. Use the GPA predictor, attendance planner, goal calculator, and study time estimator anytime." },
        { q: "How can AI help with studying?", a: "AI tools help by calculating optimal study time allocation, predicting required grades, planning attendance targets, and estimating what scores you need to pass." },
        { q: "Can it create a study schedule?", a: "Yes! The study time estimator creates a daily study plan based on your subjects, difficulty levels, exam dates, and available hours." },
        { q: "Do I need to create an account?", a: "No account needed. All calculations run in your browser. Your data stays private and is never stored on any server." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Smart Tools for Serious Students</h2>
        <p className="text-muted-foreground leading-relaxed">Our AI study planner combines four powerful tools into one platform. Whether you need to know what GPA to aim for, how to manage attendance, what marks to score, or how to divide study time — we've got you covered.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { emoji: "🎯", title: "GPA Predictor", desc: "Know exactly what grades you need" },
            { emoji: "📋", title: "Attendance Planner", desc: "Weekly attendance targets" },
            { emoji: "📝", title: "Goal Calculator", desc: "Required scores for target grade" },
            { emoji: "⏰", title: "Study Time Estimator", desc: "Difficulty-based daily schedule" },
          ].map(t => (
            <div key={t.title} className="glass-card p-4 text-center">
              <p className="text-2xl">{t.emoji}</p>
              <p className="font-semibold text-sm">{t.title}</p>
              <p className="text-xs text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SEOPageTemplate>
  );
}
