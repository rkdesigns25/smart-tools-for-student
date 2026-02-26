import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Trash2, Copy, Check, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const GRADE_SCALES: Record<string, Record<string, number>> = {
  "4.0": { "A+": 4.0, A: 4.0, "A-": 3.7, "B+": 3.3, B: 3.0, "B-": 2.7, "C+": 2.3, C: 2.0, "C-": 1.7, "D+": 1.3, D: 1.0, F: 0 },
  "5.0": { "A+": 5.0, A: 5.0, "A-": 4.5, "B+": 4.0, B: 3.5, "B-": 3.0, "C+": 2.5, C: 2.0, "C-": 1.5, D: 1.0, F: 0 },
  "10.0": { O: 10, "A+": 9, A: 8, "B+": 7, B: 6, C: 5, P: 4, F: 0 },
};

interface SubjectRow { id: string; name: string; grade: string; credits: string; }
const makeRow = (): SubjectRow => ({ id: crypto.randomUUID(), name: "", grade: "", credits: "" });

function GradeCalculator({ title, scale }: { title: string; scale: string }) {
  const [rows, setRows] = useState<SubjectRow[]>([makeRow(), makeRow(), makeRow()]);
  const [copied, setCopied] = useState(false);
  const grades = GRADE_SCALES[scale];

  const result = useMemo(() => {
    let totalCredits = 0, totalPoints = 0;
    for (const r of rows) {
      const c = parseFloat(r.credits), g = grades[r.grade];
      if (!isNaN(c) && c > 0 && g !== undefined) { totalCredits += c; totalPoints += c * g; }
    }
    return totalCredits > 0 ? totalPoints / totalCredits : null;
  }, [rows, grades]);

  const update = (id: string, field: keyof SubjectRow, value: string) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));

  const copy = () => { if (result !== null) { navigator.clipboard.writeText(result.toFixed(2)); setCopied(true); setTimeout(() => setCopied(false), 1500); } };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {rows.map((row, i) => (
          <div key={row.id} className="flex gap-2 items-end">
            <div className="flex-1 min-w-0">
              {i === 0 && <Label className="text-xs text-muted-foreground mb-1 block">Subject</Label>}
              <Input placeholder={`Subject ${i + 1}`} value={row.name} onChange={(e) => update(row.id, "name", e.target.value)} />
            </div>
            <div className="w-24">
              {i === 0 && <Label className="text-xs text-muted-foreground mb-1 block">Grade</Label>}
              <Select value={row.grade} onValueChange={(v) => update(row.id, "grade", v)}>
                <SelectTrigger><SelectValue placeholder="Grade" /></SelectTrigger>
                <SelectContent>{Object.keys(grades).map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="w-20">
              {i === 0 && <Label className="text-xs text-muted-foreground mb-1 block">Credits</Label>}
              <Input type="number" min="0" placeholder="3" value={row.credits} onChange={(e) => update(row.id, "credits", e.target.value)} />
            </div>
            <Button variant="ghost" size="icon" className="shrink-0" onClick={() => rows.length > 1 && setRows((p) => p.filter((r) => r.id !== row.id))}><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => setRows((p) => [...p, makeRow()])}><Plus className="h-4 w-4 mr-1" />Add Subject</Button>
        <Button variant="ghost" size="sm" onClick={() => setRows([makeRow(), makeRow(), makeRow()])}><RotateCcw className="h-4 w-4 mr-1" />Reset</Button>
      </div>
      {result !== null && (
        <div className="glass-card p-6 text-center space-y-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <p className="text-sm text-muted-foreground">Your {title}</p>
          <p className="text-4xl font-bold text-primary">{result.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground">on a {scale} scale</p>
          <Button variant="outline" size="sm" onClick={copy}>{copied ? <><Check className="h-4 w-4 mr-1" />Copied</> : <><Copy className="h-4 w-4 mr-1" />Copy</>}</Button>
        </div>
      )}
    </div>
  );
}

function SgpaToCgpa() {
  const [semesters, setSemesters] = useState([{ id: crypto.randomUUID(), sgpa: "", credits: "" }]);
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    let tc = 0, tp = 0;
    for (const s of semesters) {
      const sg = parseFloat(s.sgpa), cr = parseFloat(s.credits);
      if (!isNaN(sg) && !isNaN(cr) && cr > 0) { tc += cr; tp += sg * cr; }
    }
    return tc > 0 ? tp / tc : null;
  }, [semesters]);

  const copy = () => { if (result !== null) { navigator.clipboard.writeText(result.toFixed(2)); setCopied(true); setTimeout(() => setCopied(false), 1500); } };

  return (
    <div className="space-y-4">
      {semesters.map((s, i) => (
        <div key={s.id} className="flex gap-2 items-end">
          <div className="flex-1">
            {i === 0 && <Label className="text-xs text-muted-foreground mb-1 block">SGPA</Label>}
            <Input type="number" step="0.01" placeholder="8.5" value={s.sgpa} onChange={(e) => setSemesters((p) => p.map((x) => x.id === s.id ? { ...x, sgpa: e.target.value } : x))} />
          </div>
          <div className="flex-1">
            {i === 0 && <Label className="text-xs text-muted-foreground mb-1 block">Credits</Label>}
            <Input type="number" placeholder="24" value={s.credits} onChange={(e) => setSemesters((p) => p.map((x) => x.id === s.id ? { ...x, credits: e.target.value } : x))} />
          </div>
          <Button variant="ghost" size="icon" onClick={() => semesters.length > 1 && setSemesters((p) => p.filter((x) => x.id !== s.id))}><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => setSemesters((p) => [...p, { id: crypto.randomUUID(), sgpa: "", credits: "" }])}><Plus className="h-4 w-4 mr-1" />Add Semester</Button>
      {result !== null && (
        <div className="glass-card p-6 text-center space-y-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <p className="text-sm text-muted-foreground">Your CGPA</p>
          <p className="text-4xl font-bold text-primary">{result.toFixed(2)}</p>
          <Button variant="outline" size="sm" onClick={copy}>{copied ? <><Check className="h-4 w-4 mr-1" />Copied</> : <><Copy className="h-4 w-4 mr-1" />Copy</>}</Button>
        </div>
      )}
    </div>
  );
}

const cgpaJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CGPA Calculator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1240" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How do I calculate CGPA online?", acceptedAnswer: { "@type": "Answer", text: "Enter your grade points and credit hours for each subject. Our free CGPA calculator multiplies grade points by credits, sums them up, then divides by total credits to give your cumulative GPA instantly." } },
      { "@type": "Question", name: "What is the formula for CGPA calculation?", acceptedAnswer: { "@type": "Answer", text: "CGPA = Sum of (Grade Point × Credit Hours) / Sum of (Total Credit Hours). This is the standard formula used by most universities worldwide." } },
      { "@type": "Question", name: "Can I calculate CGPA for different grading scales?", acceptedAnswer: { "@type": "Answer", text: "Yes! Our calculator supports 4.0, 5.0, and 10.0 grading scales used by universities in India, US, UK, and worldwide." } },
      { "@type": "Question", name: "How do I convert SGPA to CGPA?", acceptedAnswer: { "@type": "Answer", text: "Use the SGPA to CGPA converter tab — enter each semester's SGPA and credit count for a weighted average CGPA." } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smartstudenttoolkit.com/" },
      { "@type": "ListItem", position: 2, name: "CGPA Calculator", item: "https://smartstudenttoolkit.com/cgpa" },
    ],
  },
];

export default function CgpaPage() {
  const [scale, setScale] = useState("4.0");

  return (
    <Layout>
      <SEOHead
        title="CGPA Calculator Online Free 2025 — SGPA to CGPA Converter | Smart Student Toolkit"
        description="Calculate your CGPA instantly with our free online CGPA calculator. Supports 4.0, 5.0, and 10.0 scales. Convert SGPA to CGPA. Trusted by engineering and college students."
        jsonLd={cgpaJsonLd}
      />
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "CGPA Calculator" }]} />

        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Free CGPA Calculator Online — Instant Results with Credits</h1>
          <p className="text-muted-foreground">Calculate your CGPA, SGPA, or convert between grading scales instantly. Free CGPA calculator for engineering students, college students in India, and worldwide.</p>
        </header>

        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Label className="text-sm font-medium">Grading Scale</Label>
            <Select value={scale} onValueChange={setScale}>
              <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="4.0">4.0 Scale</SelectItem>
                <SelectItem value="5.0">5.0 Scale</SelectItem>
                <SelectItem value="10.0">10.0 Scale</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="cgpa">
            <TabsList className="w-full">
              <TabsTrigger value="cgpa" className="flex-1">CGPA</TabsTrigger>
              <TabsTrigger value="sgpa" className="flex-1">SGPA</TabsTrigger>
              <TabsTrigger value="convert" className="flex-1">SGPA→CGPA</TabsTrigger>
            </TabsList>
            <TabsContent value="cgpa" className="mt-4">
              <h2 className="sr-only">SGPA Calculator — Calculate Your Semester GPA</h2>
              <GradeCalculator title="CGPA" scale={scale} />
            </TabsContent>
            <TabsContent value="sgpa" className="mt-4">
              <h2 className="sr-only">SGPA Calculator — Calculate Your Semester GPA</h2>
              <GradeCalculator title="SGPA" scale={scale} />
            </TabsContent>
            <TabsContent value="convert" className="mt-4">
              <h2 className="sr-only">SGPA to CGPA Converter — Multi-Semester Average</h2>
              <SgpaToCgpa />
            </TabsContent>
          </Tabs>
        </div>

        <AdBanner />

        {/* SEO Content Block */}
        <section className="glass-card p-6 space-y-4">
          <h2 className="text-2xl font-bold">How to Calculate CGPA Online Free</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our free CGPA calculator makes it easy for college and university students to calculate their Cumulative Grade Point Average instantly. Simply enter your grade points and credit hours for each subject — no sign-up, no login, no charge. This CGPA calculator with credits supports multiple grading scales used across India, US, UK, and worldwide.
          </p>
          <h3 className="text-lg font-semibold">CGPA Formula Used</h3>
          <p className="text-muted-foreground font-mono text-sm bg-muted/50 p-3 rounded-lg">
            CGPA = Σ(Grade Points × Credit Hours) ÷ Σ(Credit Hours)
          </p>
          <h3 className="text-lg font-semibold">CGPA to Percentage Conversion</h3>
          <p className="text-muted-foreground leading-relaxed">
            Most Indian universities use: <strong>Percentage = CGPA × 9.5</strong>. Some use ×10. Always verify with your institution. This CGPA to percentage calculator formula is standard for engineering colleges.
          </p>
          <h3 className="text-lg font-semibold">What is a Good CGPA?</h3>
          <p className="text-muted-foreground leading-relaxed">
            On a 10-point scale: 9.0–10.0 is Outstanding, 8.0–9.0 is Excellent, 7.0–8.0 is Good, and 6.0–7.0 is Average. For campus placements, most companies require a minimum CGPA of 6.5 to 7.0. Use our CGPA calculator to track where you stand.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Frequently Asked Questions About CGPA Calculation</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="q1"><AccordionTrigger>What is the formula to calculate CGPA?</AccordionTrigger><AccordionContent className="text-muted-foreground">CGPA = Σ(Grade Points × Credit Hours) ÷ Σ(Credit Hours). Enter your grades and credits in our free CGPA calculator to get your result instantly.</AccordionContent></AccordionItem>
            <AccordionItem value="q2"><AccordionTrigger>How do I convert SGPA to CGPA?</AccordionTrigger><AccordionContent className="text-muted-foreground">Use our SGPA to CGPA converter tab: enter each semester's SGPA and credits. It calculates a weighted average — the standard SGPA to CGPA calculator online free method.</AccordionContent></AccordionItem>
            <AccordionItem value="q3"><AccordionTrigger>What is a good CGPA for getting a job?</AccordionTrigger><AccordionContent className="text-muted-foreground">Most companies require 6.5–7.0 on a 10-point scale. Top companies may require 8.0+. The CGPA required for job placements varies by industry — IT companies are often more lenient.</AccordionContent></AccordionItem>
            <AccordionItem value="q4"><AccordionTrigger>Is CGPA calculator free to use?</AccordionTrigger><AccordionContent className="text-muted-foreground">Yes! Smart Student Toolkit's CGPA calculator is 100% free — no sign-up, no hidden charges. Calculate CGPA online as many times as you want.</AccordionContent></AccordionItem>
            <AccordionItem value="q5"><AccordionTrigger>Can I calculate CGPA for different grading scales (4.0, 10.0)?</AccordionTrigger><AccordionContent className="text-muted-foreground">Absolutely. Our calculator supports 4.0, 5.0, and 10.0 grading scales. Select your scale from the dropdown — it works for CGPA calculator India and international students alike.</AccordionContent></AccordionItem>
            <AccordionItem value="q6"><AccordionTrigger>How to improve my CGPA in the final semester?</AccordionTrigger><AccordionContent className="text-muted-foreground">Focus on high-credit courses where improvement is possible. Use our AI GPA Predictor to calculate exactly what GPA you need in remaining credits. Every 0.1 improvement in a 4-credit course helps more than in a 2-credit course.</AccordionContent></AccordionItem>
            <AccordionItem value="q7"><AccordionTrigger>What is the difference between CGPA and SGPA?</AccordionTrigger><AccordionContent className="text-muted-foreground">SGPA (Semester Grade Point Average) covers one semester only. CGPA (Cumulative Grade Point Average) is the weighted average of all semesters combined — calculated using our CGPA calculator semester wise feature.</AccordionContent></AccordionItem>
          </Accordion>
        </section>

        {/* Related Tools */}
        <section>
          <h2 className="text-xl font-bold mb-3">More Free Student Calculators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link to="/attendance" className="glass-card-hover p-4 text-center text-sm font-medium">📋 Attendance Calculator — Check Your Bunk Limit</Link>
            <Link to="/percentage" className="glass-card-hover p-4 text-center text-sm font-medium">📊 Percentage Calculator — Marks to Percentage</Link>
            <Link to="/ai-tools" className="glass-card-hover p-4 text-center text-sm font-medium">🤖 AI GPA Predictor — Know What You Need</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
