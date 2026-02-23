import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Copy, Check, RotateCcw, ArrowUp, ArrowDown } from "lucide-react";
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

export default function PercentagePage() {
  return (
    <Layout>
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">📊 Percentage Calculator</h1>
          <p className="text-muted-foreground">Three handy percentage calculations with instant results.</p>
        </div>

        <div className="glass-card p-6">
          <Tabs defaultValue="of">
            <TabsList className="w-full">
              <TabsTrigger value="of" className="flex-1">X% of Y</TabsTrigger>
              <TabsTrigger value="what" className="flex-1">X is ?% of Y</TabsTrigger>
              <TabsTrigger value="change" className="flex-1">% Change</TabsTrigger>
            </TabsList>
            <TabsContent value="of" className="mt-4"><PercentOf /></TabsContent>
            <TabsContent value="what" className="mt-4"><WhatPercent /></TabsContent>
            <TabsContent value="change" className="mt-4"><PercentChange /></TabsContent>
          </Tabs>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="how"><AccordionTrigger>How It Works</AccordionTrigger><AccordionContent>The calculator uses standard percentage formulas: X% of Y = (X/100)×Y, "X is what % of Y" = (X/Y)×100, and percentage change = ((New−Old)/|Old|)×100.</AccordionContent></AccordionItem>
          <AccordionItem value="faq1"><AccordionTrigger>Can I use decimals?</AccordionTrigger><AccordionContent>Yes! All inputs support decimal numbers for precise calculations.</AccordionContent></AccordionItem>
        </Accordion>

        <div>
          <h3 className="font-semibold mb-3">Related Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link to="/cgpa" className="glass-card-hover p-4 text-center text-sm font-medium">🎓 CGPA</Link>
            <Link to="/attendance" className="glass-card-hover p-4 text-center text-sm font-medium">📋 Attendance</Link>
            <Link to="/ai-tools" className="glass-card-hover p-4 text-center text-sm font-medium">🤖 AI Tools</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
