import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function CgpaForEngineeringPage() {
  return (
    <SEOPageTemplate
      title="CGPA Calculator for Engineering Students 2025 — Free Online Tool"
      metaDescription="Free CGPA calculator designed for engineering students. Supports 10-point, 4-point scales. Calculate semester-wise CGPA with credits for BTech, BE students."
      h1="CGPA Calculator for Engineering Students — Semester-Wise Results"
      subtitle="Purpose-built CGPA calculator for BTech, BE, and engineering college students across India."
      breadcrumb="CGPA for Engineering"
      faqs={[
        { q: "How to calculate CGPA for engineering students?", a: "Enter grade points and credit hours for each subject. CGPA = Σ(Grade × Credits) ÷ Σ(Credits). Our calculator supports 10-point and 4-point scales used by engineering colleges." },
        { q: "What is a good CGPA in engineering?", a: "8.0+ is excellent for placements. 7.0-8.0 is good. Most IT companies require minimum 6.5 CGPA. Top companies like Google may require 8.0+." },
        { q: "How is CGPA calculated in VTU?", a: "VTU uses a 10-point scale. CGPA is the weighted average of all semester SGPAs. Percentage = (CGPA - 0.75) × 10." },
        { q: "Can I improve my engineering CGPA in final year?", a: "Yes! Focus on high-credit subjects. Use our AI GPA Predictor to calculate exactly what grades you need in remaining semesters." },
        { q: "What CGPA is required for campus placements?", a: "Most companies require 6.0-7.0 minimum CGPA. Product-based companies often require 7.5+. Use our calculator to track your progress." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Engineering CGPA Calculation Guide</h2>
        <p className="text-muted-foreground leading-relaxed">Engineering students need accurate CGPA calculations for campus placements, higher studies applications, and scholarship eligibility. Our free CGPA calculator for engineering students handles all major grading scales used by Indian technical universities including AICTE, VTU, JNTU, Anna University, and more.</p>
        <h3 className="text-lg font-semibold">CGPA Required for Top Companies</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { company: "Google / Microsoft", cgpa: "8.0+" },
            { company: "TCS / Infosys", cgpa: "6.0+" },
            { company: "Amazon / Flipkart", cgpa: "7.0+" },
            { company: "Government Jobs (GATE)", cgpa: "6.5+" },
          ].map(c => (
            <div key={c.company} className="glass-card p-3 text-center">
              <p className="text-sm font-medium">{c.company}</p>
              <p className="text-lg font-bold text-primary">{c.cgpa}</p>
            </div>
          ))}
        </div>
      </section>
    </SEOPageTemplate>
  );
}
