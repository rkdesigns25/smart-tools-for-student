import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqSections = [
  {
    title: "🎓 CGPA Calculator FAQs",
    faqs: [
      { q: "What is the formula to calculate CGPA?", a: "CGPA = Σ(Grade Points × Credit Hours) ÷ Σ(Credit Hours). Our free CGPA calculator does this instantly — enter grades and credits to get your cumulative GPA." },
      { q: "How do I convert SGPA to CGPA?", a: "Use our SGPA to CGPA converter: enter each semester's SGPA and credit count. It calculates a weighted average to give your cumulative CGPA." },
      { q: "What is a good CGPA for getting a job?", a: "Most companies require 6.5–7.0 on a 10-point scale (or 3.0+ on 4.0). Top firms may require 8.0+. Use our CGPA calculator to track your progress." },
      { q: "Is the CGPA calculator free to use?", a: "Yes! Smart Student Toolkit's CGPA calculator is 100% free — no sign-up, no hidden charges. Calculate CGPA online instantly." },
      { q: "Can I calculate CGPA for different grading scales (4.0, 10.0)?", a: "Absolutely. Our calculator supports 4.0, 5.0, and 10.0 grading scales used by universities in India, US, and worldwide." },
      { q: "How to improve my CGPA in the final semester?", a: "Focus on high-credit courses where you can score well. Use our AI GPA Predictor to calculate exactly what GPA you need in remaining credits to reach your target CGPA." },
      { q: "What is the difference between CGPA and SGPA?", a: "SGPA (Semester Grade Point Average) covers one semester. CGPA (Cumulative Grade Point Average) is the weighted average across all semesters." },
    ],
  },
  {
    title: "📋 Attendance Calculator FAQs",
    faqs: [
      { q: "What is the minimum attendance required in college?", a: "Most Indian universities require 75% minimum attendance. Some require 80%. Use our attendance percentage calculator to check your status." },
      { q: "How is attendance percentage calculated?", a: "Attendance % = (Classes Attended ÷ Total Classes Held) × 100. Our student attendance calculator computes this instantly." },
      { q: "How many classes can I miss and still pass?", a: "With a 75% rule, you can miss 1 class for every 4 held. Our bunk calculator college tool shows your exact remaining bunk count." },
      { q: "What happens if attendance is below 75%?", a: "Students may be debarred from exams, fined, or asked to repeat the semester. Use our attendance recovery calculator to plan your comeback." },
      { q: "Can I recover attendance in the last few weeks?", a: "Yes — if you attend every remaining class. Our minimum attendance calculator tells you exactly how many consecutive classes are needed." },
      { q: "How to use the bunk calculator?", a: "Enter total classes held, classes attended, and your required threshold (default 75%). The bunk meter instantly shows how many more classes you can miss." },
      { q: "Does medical leave count in attendance percentage?", a: "This varies by institution. Some universities add medical leave to attended count. Check your institution's policy and adjust the numbers accordingly." },
    ],
  },
  {
    title: "📊 Percentage Calculator FAQs",
    faqs: [
      { q: "How do I calculate my percentage of marks obtained?", a: "Percentage = (Marks Obtained ÷ Total Marks) × 100. Use our marks percentage calculator for students to get instant results." },
      { q: "What is the formula for percentage calculation?", a: "There are three common formulas: X% of Y = (X/100)×Y, 'What percent is X of Y' = (X/Y)×100, and percentage change = ((New−Old)/|Old|)×100." },
      { q: "How to find what percentage one number is of another?", a: "Divide the part by the whole and multiply by 100. Example: 45 out of 60 = (45/60)×100 = 75%. Our percentage calculator does this instantly." },
      { q: "How to calculate percentage increase in marks?", a: "Percentage increase = ((New Score − Old Score) / Old Score) × 100. Use our percentage change calculator for quick results." },
      { q: "Is 75% considered a good percentage in India?", a: "75% is generally considered good (First Class in many universities). 60%+ is First Division, and 85%+ is Distinction. Requirements vary by institution." },
    ],
  },
  {
    title: "🤖 AI Study Tools FAQs",
    faqs: [
      { q: "How does the AI GPA Predictor work?", a: "Enter your current CGPA, completed credits, target CGPA, and remaining credits. It calculates the exact GPA needed in remaining subjects using weighted averages." },
      { q: "What is the study time estimator?", a: "Input your subjects, difficulty levels (1-5), days until exam, and available hours per day. It creates a personalized daily study schedule distributing time by difficulty." },
      { q: "Is the attendance planner accurate?", a: "Yes — it uses mathematical projections based on your current attendance and planned classes to give you a weekly attendance target." },
      { q: "Can I calculate what marks I need to pass?", a: "Yes! Our goal calculator (grade needed to pass calculator) reverse-engineers the exact score you need in upcoming assessments based on your current scores and weights." },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.flatMap((s) =>
    s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <Layout>
      <SEOHead
        title="FAQ — CGPA, Attendance & Percentage Calculator Questions | Smart Student Toolkit"
        description="Frequently asked questions about CGPA calculation, attendance percentage, bunk calculator, percentage of marks, and AI study tools. Get answers instantly."
        jsonLd={faqJsonLd}
      />
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "FAQ" }]} />

        <section className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Everything you need to know about our free student calculators and AI study tools.</p>
        </section>

        {faqSections.map((section, si) => (
          <section key={si} className="space-y-3">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <Accordion type="single" collapsible>
              {section.faqs.map((faq, fi) => (
                <AccordionItem key={fi} value={`${si}-${fi}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}

        <section>
          <h2 className="text-xl font-bold mb-3">Explore Our Free Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link to="/cgpa" className="glass-card-hover p-4 text-center text-sm font-medium">🎓 CGPA Calculator</Link>
            <Link to="/attendance" className="glass-card-hover p-4 text-center text-sm font-medium">📋 Attendance Calculator</Link>
            <Link to="/percentage" className="glass-card-hover p-4 text-center text-sm font-medium">📊 Percentage Calculator</Link>
            <Link to="/ai-tools" className="glass-card-hover p-4 text-center text-sm font-medium">🤖 AI Study Tools</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
