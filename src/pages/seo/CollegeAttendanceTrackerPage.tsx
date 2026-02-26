import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function CollegeAttendanceTrackerPage() {
  return (
    <SEOPageTemplate
      title="College Attendance Tracker Free — Monitor Your Attendance Online"
      metaDescription="Free online college attendance tracker. Monitor your attendance percentage, check bunk limits, and plan recovery — all in one place. No sign-up required."
      h1="College Attendance Tracker — Free Online Tool"
      subtitle="Track your college attendance, monitor bunk limits, and plan your attendance strategy."
      breadcrumb="Attendance Tracker"
      faqs={[
        { q: "How does the attendance tracker work?", a: "Enter your total classes and attended classes. The tracker shows your current percentage, how many classes you can miss, and recovery plan if needed." },
        { q: "Can I track attendance for multiple subjects?", a: "Use the calculator separately for each subject to track individual attendance percentages. This helps identify which subjects need more attention." },
        { q: "Is this attendance tracker free?", a: "Yes, 100% free with no sign-up. Track your attendance as many times as needed throughout the semester." },
        { q: "How often should I check my attendance?", a: "Check weekly to stay on top of your attendance. This helps you plan bunks strategically and avoid last-minute panic." },
        { q: "Does this work for online classes?", a: "Yes! The attendance calculation is the same for online and offline classes. Enter your numbers for accurate tracking." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Why Track Your College Attendance?</h2>
        <p className="text-muted-foreground leading-relaxed">Regular attendance tracking prevents unpleasant surprises at exam time. Many students realize too late that they're below the minimum threshold. Our free college attendance tracker helps you stay informed and make smart decisions about class attendance throughout the semester.</p>
        <h3 className="text-lg font-semibold">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="glass-card p-3 text-center"><p className="font-bold text-primary">📊</p><p className="text-sm font-medium">Instant Percentage</p></div>
          <div className="glass-card p-3 text-center"><p className="font-bold text-primary">🎉</p><p className="text-sm font-medium">Bunk Meter</p></div>
          <div className="glass-card p-3 text-center"><p className="font-bold text-primary">🔄</p><p className="text-sm font-medium">Recovery Mode</p></div>
        </div>
      </section>
    </SEOPageTemplate>
  );
}
