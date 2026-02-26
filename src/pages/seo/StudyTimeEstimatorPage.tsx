import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function StudyTimeEstimatorPage() {
  return (
    <SEOPageTemplate
      title="Study Time Estimator for Exams — Free Daily Study Planner"
      metaDescription="Free study time estimator for exam preparation. Get a personalized daily study schedule based on subject difficulty and available hours. Smart student planning."
      h1="Study Time Estimator — Personalized Exam Preparation Planner"
      subtitle="Calculate how many hours to study each subject daily based on difficulty and exam dates."
      breadcrumb="Study Time Estimator"
      faqs={[
        { q: "How does the study time estimator work?", a: "Enter your subjects, difficulty levels (1-5), days until exam, and daily available hours. It distributes time proportionally based on difficulty weights." },
        { q: "How many hours should I study per day?", a: "Research suggests 6-8 hours of focused study is optimal. Our estimator helps you divide this time effectively across subjects." },
        { q: "Does difficulty level affect study time?", a: "Yes! A subject rated 5/5 difficulty gets proportionally more time than one rated 2/5. This ensures harder subjects get adequate preparation." },
        { q: "Can I adjust the study plan?", a: "Change your available hours, difficulty ratings, or exam dates anytime. The plan recalculates instantly." },
        { q: "Is this better than studying all subjects equally?", a: "Yes. Difficulty-weighted planning ensures you spend more time on challenging subjects while maintaining coverage of easier ones." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Smart Study Planning for Exams</h2>
        <p className="text-muted-foreground leading-relaxed">Most students study without a plan, spending equal time on every subject regardless of difficulty. Our study time estimator creates a weighted schedule that allocates more hours to harder subjects — ensuring efficient preparation and better results.</p>
        <h3 className="text-lg font-semibold">Study Tips</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Study hardest subjects when you're most alert (usually mornings)</li>
          <li>Take 5-10 minute breaks every 45-50 minutes (Pomodoro technique)</li>
          <li>Review previous day's material for 15 minutes before starting new topics</li>
          <li>Practice problems &gt; passive reading for technical subjects</li>
          <li>Get 7-8 hours of sleep — it improves memory consolidation</li>
        </ul>
      </section>
    </SEOPageTemplate>
  );
}
