import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function MinimumAttendancePage() {
  return (
    <SEOPageTemplate
      title="Minimum Attendance Calculator — How Many Classes to Attend"
      metaDescription="Calculate the minimum number of classes you need to attend to meet your college's attendance requirement. Free minimum attendance calculator for students."
      h1="Minimum Attendance Calculator — Classes You Must Attend"
      subtitle="Find out the bare minimum classes needed to meet your attendance threshold."
      breadcrumb="Minimum Attendance"
      faqs={[
        { q: "How to calculate minimum attendance?", a: "Minimum classes to attend = Required% × Total classes ÷ 100. For 75% with 80 total classes: 0.75 × 80 = 60 classes minimum." },
        { q: "What is the minimum attendance for university exams?", a: "Most Indian universities require 75% minimum. Engineering colleges under AICTE follow the same rule. Some universities may require 80%." },
        { q: "Can I appear for exams with less than 75% attendance?", a: "Generally no. However, some universities allow condonation of attendance shortage with a fee. Check your institution's policy." },
        { q: "How to recover from low attendance?", a: "Attend every remaining class. Use our recovery calculator to find exactly how many consecutive classes will get you back to the required percentage." },
        { q: "Does lab attendance count separately?", a: "Many universities count lab and theory attendance separately. You may need 75% in both. Calculate each using our attendance tool." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">How to Calculate Minimum Required Attendance</h2>
        <p className="text-muted-foreground leading-relaxed">Knowing the minimum number of classes you must attend helps you plan your semester strategically. Our minimum attendance calculator computes the exact number based on total classes held and your college's attendance requirement.</p>
        <h3 className="text-lg font-semibold">Formula</h3>
        <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-3 rounded-lg">Minimum Classes = (Required% ÷ 100) × Total Classes Held</p>
      </section>
    </SEOPageTemplate>
  );
}
