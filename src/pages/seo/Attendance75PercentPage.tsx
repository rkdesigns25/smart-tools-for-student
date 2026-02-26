import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function Attendance75PercentPage() {
  return (
    <SEOPageTemplate
      title="Attendance Calculator 75 Percent Rule — Minimum Classes Needed"
      metaDescription="Free 75% attendance calculator. Find how many classes you need to attend or can miss to maintain 75% attendance. Used by college students across India."
      h1="Attendance Calculator — 75 Percent Rule Explained"
      subtitle="Calculate your attendance against the 75% minimum requirement instantly."
      breadcrumb="75% Attendance"
      faqs={[
        { q: "Why is 75% attendance mandatory?", a: "UGC guidelines mandate 75% minimum attendance for Indian universities. It ensures students attend enough classes to learn effectively and be exam-eligible." },
        { q: "How to calculate 75% attendance?", a: "If 100 classes are held, you need to attend at least 75. Formula: Required classes = 0.75 × Total classes held." },
        { q: "What if my college requires 80% instead of 75%?", a: "Simply change the threshold in our calculator. It works for any percentage requirement — 75%, 80%, 85%, or custom." },
        { q: "Can medical leave save my attendance?", a: "Varies by institution. Some universities count medical leave as present. Check your college rules and adjust numbers accordingly." },
        { q: "How many classes to attend to reach 75% from 60%?", a: "Use our attendance recovery calculator. Enter your current numbers and it will show exactly how many consecutive classes you need." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Understanding the 75% Attendance Rule</h2>
        <p className="text-muted-foreground leading-relaxed">The 75% attendance rule means you must attend at least 75 out of every 100 classes held. This is mandated by UGC for most Indian universities and colleges. Falling below can result in exam debarment, fines, or semester detention.</p>
        <h3 className="text-lg font-semibold">Consequences of Low Attendance</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Debarred from appearing in semester exams</li>
          <li>Required to pay attendance shortage fine</li>
          <li>May need to repeat the semester</li>
          <li>Loss of scholarship eligibility</li>
          <li>Negative impact on overall academic record</li>
        </ul>
      </section>
    </SEOPageTemplate>
  );
}
