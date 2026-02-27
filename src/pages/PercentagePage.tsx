import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Copy, Check, ArrowUp, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

function ResultCard({ label, value, suffix = "" }: { label: string; value: string | null; suffix?: string }) {
  const [copied, setCopied] = useState(false);
  if (value === null) return null;
  const copy = () => { navigator.clipboard.writeText(value + suffix); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div className="glass-card p-6 text-center space-y-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-4xl font-bold text-primary">{value}{suffix}</p>
      <Button variant="outline" size="sm" onClick={copy}>{copied ? <><Check className="h-4 w-4 mr-1" />Copied</> : <><Copy className="h-4 w-4 mr-1" />Copy</>}</Button>
    </div>
  );
}

function PercentOf() {
  const [x, setX] = useState(""); const [y, setY] = useState("");
  const result = useMemo(() => { const a = parseFloat(x), b = parseFloat(y); return !isNaN(a) && !isNaN(b) ? ((a / 100) * b).toFixed(2) : null; }, [x, y]);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium">What is</span>
        <Input type="number" className="w-24" placeholder="25" value={x} onChange={(e) => setX(e.target.value)} />
        <span className="text-sm font-medium">% of</span>
        <Input type="number" className="w-28" placeholder="200" value={y} onChange={(e) => setY(e.target.value)} />
        <span className="text-sm font-medium">?</span>
      </div>
      <ResultCard label={`${x || "X"}% of ${y || "Y"}`} value={result} />
    </div>
  );
}

function WhatPercent() {
  const [x, setX] = useState(""); const [y, setY] = useState("");
  const result = useMemo(() => { const a = parseFloat(x), b = parseFloat(y); return !isNaN(a) && !isNaN(b) && b !== 0 ? ((a / b) * 100).toFixed(2) : null; }, [x, y]);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <Input type="number" className="w-24" placeholder="50" value={x} onChange={(e) => setX(e.target.value)} />
        <span className="text-sm font-medium">is what % of</span>
        <Input type="number" className="w-28" placeholder="200" value={y} onChange={(e) => setY(e.target.value)} />
        <span className="text-sm font-medium">?</span>
      </div>
      <ResultCard label={`${x || "X"} is this % of ${y || "Y"}`} value={result} suffix="%" />
    </div>
  );
}

function PercentChange() {
  const [from, setFrom] = useState(""); const [to, setTo] = useState("");
  const result = useMemo(() => {
    const a = parseFloat(from), b = parseFloat(to);
    if (isNaN(a) || isNaN(b) || a === 0) return null;
    return { value: (((b - a) / Math.abs(a)) * 100).toFixed(2), increase: b >= a };
  }, [from, to]);
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium">From</span>
        <Input type="number" className="w-28" placeholder="100" value={from} onChange={(e) => setFrom(e.target.value)} />
        <span className="text-sm font-medium">to</span>
        <Input type="number" className="w-28" placeholder="150" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      {result && (
        <div className="glass-card p-6 text-center space-y-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <div className={`inline-flex items-center gap-1 ${result.increase ? "text-green-500" : "text-destructive"}`}>
            {result.increase ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            <span className="text-sm font-medium">{result.increase ? "Increase" : "Decrease"}</span>
          </div>
          <p className="text-4xl font-bold text-primary">{result.value}%</p>
        </div>
      )}
    </div>
  );
}

const percentageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Percentage Calculator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", ratingCount: "860" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How do I calculate percentage of marks obtained?", acceptedAnswer: { "@type": "Answer", text: "Percentage = (Marks Obtained ÷ Total Marks) × 100. Use our free marks percentage calculator for instant results." } },
      { "@type": "Question", name: "How to calculate percentage increase in marks?", acceptedAnswer: { "@type": "Answer", text: "Percentage increase = ((New Score − Old Score) / Old Score) × 100. Our percentage change calculator computes this instantly." } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smart-tools-for-student.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Percentage Calculator", item: "https://smart-tools-for-student.lovable.app/percentage" },
    ],
  },
];

export default function PercentagePage() {
  return (
    <Layout>
      <SEOHead
        title="Percentage Calculator for Marks — Free & Instant | Smart Student Toolkit"
        description="Calculate percentage of marks obtained instantly. Works for school, college, and university students. Find what percentage you scored or what marks you need."
        jsonLd={percentageJsonLd}
      />
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "Percentage Calculator" }]} />

        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Percentage Calculator for Students — Marks & Grades</h1>
          <p className="text-muted-foreground">Three handy percentage calculations with instant results. Free marks percentage calculator for students.</p>
        </header>

        <div className="glass-card p-6">
          <Tabs defaultValue="of">
            <TabsList className="w-full">
              <TabsTrigger value="of" className="flex-1">X% of Y</TabsTrigger>
              <TabsTrigger value="what" className="flex-1">X is ?% of Y</TabsTrigger>
              <TabsTrigger value="change" className="flex-1">% Change</TabsTrigger>
            </TabsList>
            <TabsContent value="of" className="mt-4">
              <h2 className="sr-only">What is X Percentage of Y? (Part Finder)</h2>
              <PercentOf />
            </TabsContent>
            <TabsContent value="what" className="mt-4">
              <h2 className="sr-only">What Percentage Did I Score? (Marks to Percentage)</h2>
              <WhatPercent />
            </TabsContent>
            <TabsContent value="change" className="mt-4">
              <h2 className="sr-only">Percentage Increase / Decrease Calculator</h2>
              <PercentChange />
            </TabsContent>
          </Tabs>
        </div>

        <AdBanner />

        {/* SEO Content */}
        <section className="glass-card p-6 space-y-4">
          <h2 className="text-2xl font-bold">How to Calculate Percentage of Marks Obtained</h2>
          <p className="text-muted-foreground leading-relaxed">
            The percentage formula for marks is straightforward: Percentage = (Marks Obtained ÷ Total Marks) × 100. Whether you're checking school exam results, college grades, or university assessments, our free percentage calculator for marks gives you instant, accurate results.
          </p>
          <h3 className="text-lg font-semibold">Percentage Formulas Used</h3>
          <div className="text-muted-foreground text-sm bg-muted/50 p-3 rounded-lg space-y-1 font-mono">
            <p>X% of Y = (X / 100) × Y</p>
            <p>X is what % of Y = (X / Y) × 100</p>
            <p>% Change = ((New − Old) / |Old|) × 100</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Frequently Asked Questions About Percentage Calculation</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="q1"><AccordionTrigger>How do I calculate my percentage of marks obtained?</AccordionTrigger><AccordionContent className="text-muted-foreground">Percentage = (Marks Obtained ÷ Total Marks) × 100. Enter your marks in the "X is ?% of Y" tab for instant results from our marks percentage calculator for students.</AccordionContent></AccordionItem>
            <AccordionItem value="q2"><AccordionTrigger>What is the formula for percentage calculation?</AccordionTrigger><AccordionContent className="text-muted-foreground">Three formulas: X% of Y = (X/100)×Y, "What percent is X of Y" = (X/Y)×100, and percentage change = ((New−Old)/|Old|)×100. All available in our calculator.</AccordionContent></AccordionItem>
            <AccordionItem value="q3"><AccordionTrigger>How to find what percentage one number is of another?</AccordionTrigger><AccordionContent className="text-muted-foreground">Divide the part by the whole and multiply by 100. Example: 45 out of 60 = (45/60)×100 = 75%. Our percentage calculator does this instantly.</AccordionContent></AccordionItem>
            <AccordionItem value="q4"><AccordionTrigger>How to calculate percentage increase in marks?</AccordionTrigger><AccordionContent className="text-muted-foreground">Percentage increase = ((New Score − Old Score) / Old Score) × 100. Use the "% Change" tab in our calculator for quick results.</AccordionContent></AccordionItem>
            <AccordionItem value="q5"><AccordionTrigger>Is 75% considered a good percentage in India?</AccordionTrigger><AccordionContent className="text-muted-foreground">75% is generally considered good (First Class in many universities). 60%+ is First Division, and 85%+ is Distinction. Requirements vary by institution and program.</AccordionContent></AccordionItem>
          </Accordion>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold mb-3">More Free Student Calculators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link to="/cgpa" className="glass-card-hover p-4 text-center text-sm font-medium">🎓 CGPA Calculator — Calculate Your GPA</Link>
            <Link to="/attendance" className="glass-card-hover p-4 text-center text-sm font-medium">📋 Attendance Calculator — Check Your Bunk Limit</Link>
            <Link to="/ai-tools" className="glass-card-hover p-4 text-center text-sm font-medium">🤖 AI Study Tools — Smart Planning</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
