import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function SgpaToCgpaPage() {
  return (
    <SEOPageTemplate
      title="SGPA to CGPA Calculator Online Free 2025 — Convert Semester GPA"
      metaDescription="Free SGPA to CGPA converter. Enter each semester's SGPA and credits to calculate your cumulative GPA instantly. Works for all university grading systems."
      h1="SGPA to CGPA Calculator Online Free — Multi-Semester Converter"
      subtitle="Convert multiple semester SGPAs to a cumulative CGPA using weighted average formula."
      breadcrumb="SGPA to CGPA"
      faqs={[
        { q: "What is the formula to convert SGPA to CGPA?", a: "CGPA = Σ(SGPA × Semester Credits) ÷ Σ(Total Credits). This weighted average gives your cumulative grade point average across all semesters." },
        { q: "Is SGPA the same as GPA?", a: "SGPA (Semester GPA) covers one semester only. CGPA (Cumulative GPA) averages all semesters. GPA is a general term that can refer to either." },
        { q: "Can one bad semester ruin my CGPA?", a: "One bad semester will lower your CGPA, but you can recover by scoring well in subsequent semesters, especially in high-credit courses." },
        { q: "How many semesters are used for CGPA?", a: "All completed semesters are included. Our calculator lets you add as many semesters as needed for an accurate CGPA calculation." },
        { q: "Is this SGPA to CGPA converter free?", a: "Yes, 100% free with no sign-up required. Calculate your CGPA from SGPAs unlimited times." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">How to Convert SGPA to CGPA</h2>
        <p className="text-muted-foreground leading-relaxed">Converting SGPA to CGPA requires a weighted average calculation. Simply multiply each semester's SGPA by its total credits, sum them up, and divide by total credits across all semesters. Our free SGPA to CGPA calculator online does this instantly.</p>
        <h3 className="text-lg font-semibold">Formula</h3>
        <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-3 rounded-lg">CGPA = (SGPA₁ × Credits₁ + SGPA₂ × Credits₂ + ...) ÷ (Credits₁ + Credits₂ + ...)</p>
        <h3 className="text-lg font-semibold">Example Calculation</h3>
        <p className="text-muted-foreground leading-relaxed">Semester 1: SGPA 8.5, 24 credits. Semester 2: SGPA 7.8, 22 credits. CGPA = (8.5×24 + 7.8×22) ÷ (24+22) = (204 + 171.6) ÷ 46 = 8.16</p>
      </section>
    </SEOPageTemplate>
  );
}
