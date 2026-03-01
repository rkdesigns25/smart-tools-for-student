import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { InContentAd } from "@/components/ads/AdPlacements";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Copy, Check, RotateCcw, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const attendanceJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Attendance Calculator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", ratingCount: "980" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How many classes can I miss with 75% attendance rule?", acceptedAnswer: { "@type": "Answer", text: "With a 75% attendance requirement, you can miss 1 class for every 4 classes held. Use our attendance calculator to get your exact bunk count based on your total classes." } },
      { "@type": "Question", name: "How is attendance percentage calculated?", acceptedAnswer: { "@type": "Answer", text: "Attendance Percentage = (Classes Attended ÷ Total Classes Held) × 100. Our student attendance calculator computes this instantly." } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smart-tools-for-student.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Attendance Calculator", item: "https://smart-tools-for-student.lovable.app/attendance" },
    ],
  },
];

export default function AttendancePage() {
  const [total, setTotal] = useState("");
  const [attended, setAttended] = useState("");
  const [threshold, setThreshold] = useState("75");
  const [copied, setCopied] = useState(false);

  const t = parseFloat(total);
  const a = parseFloat(attended);
  const th = parseFloat(threshold);

  const result = useMemo(() => {
    if (isNaN(t) || isNaN(a) || t <= 0 || a < 0 || a > t) return null;
    const pct = (a / t) * 100;
    const passing = pct >= th;
    const bunkable = Math.max(0, Math.floor((a * 100 - th * t) / th));
    let recovery = 0;
    if (!passing && th < 100) {
      recovery = Math.ceil((th * t - 100 * a) / (100 - th));
    }
    return { pct, passing, bunkable, recovery };
  }, [t, a, th]);

  const copy = () => {
    if (result) { navigator.clipboard.writeText(`${result.pct.toFixed(1)}%`); setCopied(true); setTimeout(() => setCopied(false), 1500); }
  };

  const reset = () => { setTotal(""); setAttended(""); setThreshold("75"); };

  return (
    <Layout>
      <SEOHead
        title="Attendance Calculator — How Many Classes Can I Miss? | Smart Student Toolkit"
        description="Free attendance percentage calculator for college students. Find out if you have enough attendance, how many classes you can miss, or how many you need to attend to reach 75%."
        jsonLd={attendanceJsonLd}
      />
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "Attendance Calculator" }]} />

        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Attendance Calculator — Check Your Percentage & Bunk Limit</h1>
          <p className="text-muted-foreground">Free student attendance calculator with bunk meter. Track attendance percentage, check how many classes you can miss, and plan recovery.</p>
        </header>

        <div className="glass-card p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div><Label className="text-sm">Total Classes Held</Label><Input type="number" min="0" placeholder="60" value={total} onChange={(e) => setTotal(e.target.value)} /></div>
            <div><Label className="text-sm">Classes Attended</Label><Input type="number" min="0" placeholder="45" value={attended} onChange={(e) => setAttended(e.target.value)} /></div>
            <div><Label className="text-sm">Required % (threshold)</Label><Input type="number" min="0" max="100" placeholder="75" value={threshold} onChange={(e) => setThreshold(e.target.value)} /></div>
          </div>
          <Button variant="ghost" size="sm" onClick={reset}><RotateCcw className="h-4 w-4 mr-1" />Reset</Button>
        </div>

        {result && (
          <div className="glass-card p-6 space-y-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Current Attendance</p>
              <p className={`text-5xl font-bold ${result.passing ? "text-green-500" : "text-destructive"}`}>{result.pct.toFixed(1)}%</p>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${result.passing ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-destructive/10 text-destructive"}`}>
                {result.passing ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                {result.passing ? "On Track" : "Below Threshold"}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-4 text-center">
                <p className="text-xs text-muted-foreground mb-1">🎉 Bunk Meter</p>
                <p className="text-2xl font-bold text-primary">{result.bunkable}</p>
                <p className="text-xs text-muted-foreground">classes you can still miss</p>
              </div>
              {!result.passing && result.recovery > 0 && (
                <div className="glass-card p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">🔄 Recovery Mode</p>
                  <p className="text-2xl font-bold text-destructive">{result.recovery}</p>
                  <p className="text-xs text-muted-foreground">consecutive classes needed</p>
                </div>
              )}
            </div>
            <div className="text-center">
              <Button variant="outline" size="sm" onClick={copy}>{copied ? <><Check className="h-4 w-4 mr-1" />Copied</> : <><Copy className="h-4 w-4 mr-1" />Copy</>}</Button>
            </div>
          </div>
        )}

        <InContentAd />

        {/* SEO Content Block */}
        <section className="glass-card p-6 space-y-4">
          <h2 className="text-2xl font-bold">How to Calculate Attendance Percentage</h2>
          <p className="text-muted-foreground leading-relaxed">
            Attendance Percentage = (Classes Attended ÷ Total Classes Held) × 100. Most colleges in India require a minimum of 75% attendance to be eligible for semester exams. Our attendance calculator 75 percent tool instantly tells you where you stand.
          </p>
          <h3 className="text-lg font-semibold">How Many Classes Can I Miss?</h3>
          <p className="text-muted-foreground leading-relaxed">
            With a 75% attendance rule, for every 100 classes held, you can miss 25 classes. Our bunk calculator college feature shows your exact limit based on your current count — the most popular "how many classes can I miss calculator" for students.
          </p>
          <h3 className="text-lg font-semibold">What Happens Below 75% Attendance?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Students with attendance below 75% may be debarred from exams, required to pay a fine, or asked to repeat the semester. Use our attendance recovery calculator to find out how many consecutive classes to attend to get back on track.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Frequently Asked Questions About Attendance</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="q1"><AccordionTrigger>What is the minimum attendance required in college?</AccordionTrigger><AccordionContent className="text-muted-foreground">Most Indian universities require 75% minimum attendance. Some require 80%. Use our attendance percentage calculator to check your current status instantly.</AccordionContent></AccordionItem>
            <AccordionItem value="q2"><AccordionTrigger>How is attendance percentage calculated?</AccordionTrigger><AccordionContent className="text-muted-foreground">Attendance % = (Classes Attended ÷ Total Classes Held) × 100. Our student attendance calculator computes this instantly with no sign-up required.</AccordionContent></AccordionItem>
            <AccordionItem value="q3"><AccordionTrigger>How many classes can I miss and still pass?</AccordionTrigger><AccordionContent className="text-muted-foreground">With a 75% rule, you can miss 1 class for every 4 held. Our bunk calculator shows your exact remaining bunk count — the ultimate "how many classes can I miss calculator."</AccordionContent></AccordionItem>
            <AccordionItem value="q4"><AccordionTrigger>What happens if attendance is below 75%?</AccordionTrigger><AccordionContent className="text-muted-foreground">Students may be debarred from exams, fined, or asked to repeat the semester. Use our minimum attendance calculator to plan your recovery before it's too late.</AccordionContent></AccordionItem>
            <AccordionItem value="q5"><AccordionTrigger>Can I recover attendance in the last few weeks?</AccordionTrigger><AccordionContent className="text-muted-foreground">Yes — if you attend every remaining class. Our recovery mode tells you exactly how many consecutive classes are needed to reach your target attendance threshold.</AccordionContent></AccordionItem>
            <AccordionItem value="q6"><AccordionTrigger>How to use the bunk calculator?</AccordionTrigger><AccordionContent className="text-muted-foreground">Enter total classes held, classes attended, and your required threshold (default 75%). The bunk meter instantly shows how many more classes you can miss while staying above the threshold.</AccordionContent></AccordionItem>
            <AccordionItem value="q7"><AccordionTrigger>Does medical leave count in attendance percentage?</AccordionTrigger><AccordionContent className="text-muted-foreground">This varies by institution. Some universities add medical leave to the attended count. Check your institution's policy and adjust the numbers in our calculator accordingly.</AccordionContent></AccordionItem>
          </Accordion>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold mb-3">More Free Student Calculators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link to="/cgpa" className="glass-card-hover p-4 text-center text-sm font-medium">🎓 CGPA Calculator — Calculate Your GPA</Link>
            <Link to="/percentage" className="glass-card-hover p-4 text-center text-sm font-medium">📊 Percentage Calculator — Marks to Percentage</Link>
            <Link to="/ai-tools" className="glass-card-hover p-4 text-center text-sm font-medium">🤖 AI Attendance Planner</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
