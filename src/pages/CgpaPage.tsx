import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
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

interface SubjectRow {
  id: string;
  name: string;
  grade: string;
  credits: string;
}

const makeRow = (): SubjectRow => ({ id: crypto.randomUUID(), name: "", grade: "", credits: "" });

function GradeCalculator({ title, scale }: { title: string; scale: string }) {
  const [rows, setRows] = useState<SubjectRow[]>([makeRow(), makeRow(), makeRow()]);
  const [copied, setCopied] = useState(false);
  const grades = GRADE_SCALES[scale];

  const result = useMemo(() => {
    let totalCredits = 0, totalPoints = 0;
    for (const r of rows) {
      const c = parseFloat(r.credits);
      const g = grades[r.grade];
      if (!isNaN(c) && c > 0 && g !== undefined) {
        totalCredits += c;
        totalPoints += c * g;
      }
    }
    return totalCredits > 0 ? totalPoints / totalCredits : null;
  }, [rows, grades]);

  const update = (id: string, field: keyof SubjectRow, value: string) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));

  const copy = () => {
    if (result !== null) {
      navigator.clipboard.writeText(result.toFixed(2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

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
            <Button variant="ghost" size="icon" className="shrink-0" onClick={() => rows.length > 1 && setRows((p) => p.filter((r) => r.id !== row.id))}>
              <Trash2 className="h-4 w-4 text-muted-foreground" />
            </Button>
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

export default function CgpaPage() {
  const [scale, setScale] = useState("4.0");

  return (
    <Layout>
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">🎓 CGPA / SGPA Calculator</h1>
          <p className="text-muted-foreground">Calculate your GPA instantly with support for multiple grading scales.</p>
        </div>

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
            <TabsContent value="cgpa" className="mt-4"><GradeCalculator title="CGPA" scale={scale} /></TabsContent>
            <TabsContent value="sgpa" className="mt-4"><GradeCalculator title="SGPA" scale={scale} /></TabsContent>
            <TabsContent value="convert" className="mt-4"><SgpaToCgpa /></TabsContent>
          </Tabs>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="how"><AccordionTrigger>How It Works</AccordionTrigger><AccordionContent>Enter your subjects with grades and credit hours. The calculator multiplies each grade point by credits, sums them, and divides by total credits to get your GPA. For SGPA→CGPA, it uses a weighted average of all semester SGPAs.</AccordionContent></AccordionItem>
          <AccordionItem value="faq1"><AccordionTrigger>What grading scale should I use?</AccordionTrigger><AccordionContent>Most US universities use a 4.0 scale. Indian universities often use a 10.0 scale. Check with your institution for the correct one.</AccordionContent></AccordionItem>
          <AccordionItem value="faq2"><AccordionTrigger>Is CGPA the same as GPA?</AccordionTrigger><AccordionContent>CGPA (Cumulative Grade Point Average) is your overall GPA across all semesters. SGPA is for a single semester.</AccordionContent></AccordionItem>
        </Accordion>

        <div>
          <h3 className="font-semibold mb-3">Related Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link to="/attendance" className="glass-card-hover p-4 text-center text-sm font-medium">📋 Attendance</Link>
            <Link to="/percentage" className="glass-card-hover p-4 text-center text-sm font-medium">📊 Percentage</Link>
            <Link to="/ai-tools" className="glass-card-hover p-4 text-center text-sm font-medium">🤖 AI Tools</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
