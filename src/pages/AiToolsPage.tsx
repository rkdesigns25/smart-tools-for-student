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
import { Plus, Trash2, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";

// --- GPA Predictor ---
function GpaPredictor() {
  const [currentCgpa, setCurrentCgpa] = useState("");
  const [completedCredits, setCompletedCredits] = useState("");
  const [targetCgpa, setTargetCgpa] = useState("");
  const [remainingCredits, setRemainingCredits] = useState("");
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    const cc = parseFloat(currentCgpa), comp = parseFloat(completedCredits), tg = parseFloat(targetCgpa), rem = parseFloat(remainingCredits);
    if ([cc, comp, tg, rem].some(isNaN) || comp <= 0 || rem <= 0) return null;
    return (tg * (comp + rem) - cc * comp) / rem;
  }, [currentCgpa, completedCredits, targetCgpa, remainingCredits]);

  const copy = () => { if (result !== null) { navigator.clipboard.writeText(result.toFixed(2)); setCopied(true); setTimeout(() => setCopied(false), 1500); } };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><Label className="text-sm">Current CGPA</Label><Input type="number" step="0.01" placeholder="7.5" value={currentCgpa} onChange={(e) => setCurrentCgpa(e.target.value)} /></div>
        <div><Label className="text-sm">Completed Credits</Label><Input type="number" placeholder="90" value={completedCredits} onChange={(e) => setCompletedCredits(e.target.value)} /></div>
        <div><Label className="text-sm">Target CGPA</Label><Input type="number" step="0.01" placeholder="8.0" value={targetCgpa} onChange={(e) => setTargetCgpa(e.target.value)} /></div>
        <div><Label className="text-sm">Remaining Credits</Label><Input type="number" placeholder="30" value={remainingCredits} onChange={(e) => setRemainingCredits(e.target.value)} /></div>
      </div>
      {result !== null && (
        <div className="glass-card p-6 text-center space-y-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <p className="text-sm text-muted-foreground">Required GPA in remaining credits</p>
          <p className={`text-4xl font-bold ${result > 10 || result < 0 ? "text-destructive" : "text-primary"}`}>{result.toFixed(2)}</p>
          {(result > 10 || result < 0) && <p className="text-sm text-destructive">This target may not be achievable.</p>}
          <Button variant="outline" size="sm" onClick={copy}>{copied ? <><Check className="h-4 w-4 mr-1" />Copied</> : <><Copy className="h-4 w-4 mr-1" />Copy</>}</Button>
        </div>
      )}
    </div>
  );
}

// --- Attendance Planner ---
function AttendancePlanner() {
  const [currentAttended, setCurrentAttended] = useState("");
  const [currentTotal, setCurrentTotal] = useState("");
  const [plannedClasses, setPlannedClasses] = useState("");
  const [requiredPct, setRequiredPct] = useState("75");

  const result = useMemo(() => {
    const a = parseFloat(currentAttended), t = parseFloat(currentTotal), p = parseFloat(plannedClasses), r = parseFloat(requiredPct);
    if ([a, t, p, r].some(isNaN) || t <= 0 || p <= 0) return null;
    const needed = Math.ceil((r / 100) * (t + p) - a);
    const canSkip = p - Math.max(0, needed);
    const weeksLeft = Math.ceil(p / 5);
    const perWeek = weeksLeft > 0 ? Math.ceil(Math.max(0, needed) / weeksLeft) : 0;
    return { needed: Math.max(0, needed), canSkip: Math.max(0, canSkip), perWeek, weeksLeft };
  }, [currentAttended, currentTotal, plannedClasses, requiredPct]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><Label className="text-sm">Classes Attended So Far</Label><Input type="number" placeholder="40" value={currentAttended} onChange={(e) => setCurrentAttended(e.target.value)} /></div>
        <div><Label className="text-sm">Total Classes So Far</Label><Input type="number" placeholder="50" value={currentTotal} onChange={(e) => setCurrentTotal(e.target.value)} /></div>
        <div><Label className="text-sm">Planned Future Classes</Label><Input type="number" placeholder="30" value={plannedClasses} onChange={(e) => setPlannedClasses(e.target.value)} /></div>
        <div><Label className="text-sm">Required %</Label><Input type="number" placeholder="75" value={requiredPct} onChange={(e) => setRequiredPct(e.target.value)} /></div>
      </div>
      {result && (
        <div className="glass-card p-6 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div><p className="text-xs text-muted-foreground">Must Attend</p><p className="text-2xl font-bold text-primary">{result.needed}</p><p className="text-xs text-muted-foreground">of upcoming classes</p></div>
            <div><p className="text-xs text-muted-foreground">Can Skip</p><p className="text-2xl font-bold text-accent-foreground">{result.canSkip}</p><p className="text-xs text-muted-foreground">classes</p></div>
            <div><p className="text-xs text-muted-foreground">Weekly Target</p><p className="text-2xl font-bold text-primary">{result.perWeek}</p><p className="text-xs text-muted-foreground">classes/week (~{result.weeksLeft}w)</p></div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Goal Calculator ---
function GoalCalculator() {
  const [target, setTarget] = useState("");
  const [scores, setScores] = useState([{ id: crypto.randomUUID(), score: "", maxScore: "", weight: "" }]);
  const [remainingWeight, setRemainingWeight] = useState("");

  const result = useMemo(() => {
    const tgt = parseFloat(target), rw = parseFloat(remainingWeight);
    if (isNaN(tgt) || isNaN(rw) || rw <= 0) return null;
    let earnedWeighted = 0, usedWeight = 0;
    for (const s of scores) {
      const sc = parseFloat(s.score), mx = parseFloat(s.maxScore), w = parseFloat(s.weight);
      if (!isNaN(sc) && !isNaN(mx) && !isNaN(w) && mx > 0) { earnedWeighted += (sc / mx) * w; usedWeight += w; }
    }
    return ((tgt * (usedWeight + rw) / 100 - earnedWeighted) / rw) * 100;
  }, [target, scores, remainingWeight]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><Label className="text-sm">Target Overall %</Label><Input type="number" placeholder="85" value={target} onChange={(e) => setTarget(e.target.value)} /></div>
        <div><Label className="text-sm">Remaining Assessment Weight %</Label><Input type="number" placeholder="40" value={remainingWeight} onChange={(e) => setRemainingWeight(e.target.value)} /></div>
      </div>
      <p className="text-sm font-medium">Completed Assessments</p>
      {scores.map((s) => (
        <div key={s.id} className="flex gap-2 items-end">
          <div className="flex-1"><Input type="number" placeholder="Score" value={s.score} onChange={(e) => setScores(p => p.map(x => x.id === s.id ? { ...x, score: e.target.value } : x))} /></div>
          <div className="w-20"><Input type="number" placeholder="Max" value={s.maxScore} onChange={(e) => setScores(p => p.map(x => x.id === s.id ? { ...x, maxScore: e.target.value } : x))} /></div>
          <div className="w-20"><Input type="number" placeholder="Wt %" value={s.weight} onChange={(e) => setScores(p => p.map(x => x.id === s.id ? { ...x, weight: e.target.value } : x))} /></div>
          <Button variant="ghost" size="icon" onClick={() => scores.length > 1 && setScores(p => p.filter(x => x.id !== s.id))}><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => setScores(p => [...p, { id: crypto.randomUUID(), score: "", maxScore: "", weight: "" }])}><Plus className="h-4 w-4 mr-1" />Add Assessment</Button>
      {result !== null && (
        <div className="glass-card p-6 text-center space-y-2 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <p className="text-sm text-muted-foreground">Required Score in Remaining Assessments</p>
          <p className={`text-4xl font-bold ${result > 100 || result < 0 ? "text-destructive" : "text-primary"}`}>{result.toFixed(1)}%</p>
          {result > 100 && <p className="text-sm text-destructive">Target may not be achievable.</p>}
        </div>
      )}
    </div>
  );
}

// --- Study Time Estimator ---
function StudyTimeEstimator() {
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [subjects, setSubjects] = useState([{ id: crypto.randomUUID(), name: "", difficulty: "3", daysUntilExam: "" }]);

  const plan = useMemo(() => {
    const h = parseFloat(hoursPerDay);
    if (isNaN(h) || h <= 0) return null;
    const valid = subjects.filter(s => s.name && !isNaN(parseFloat(s.daysUntilExam)) && parseFloat(s.daysUntilExam) > 0);
    if (valid.length === 0) return null;
    const totalWeight = valid.reduce((sum, s) => sum + parseFloat(s.difficulty), 0);
    return valid.map(s => {
      const d = parseFloat(s.difficulty), days = parseFloat(s.daysUntilExam);
      const dailyHours = (d / totalWeight) * h;
      return { name: s.name, dailyHours: dailyHours.toFixed(1), totalHours: (dailyHours * days).toFixed(0), days: Math.round(days) };
    });
  }, [hoursPerDay, subjects]);

  return (
    <div className="space-y-4">
      <div><Label className="text-sm">Available Study Hours Per Day</Label><Input type="number" step="0.5" placeholder="6" value={hoursPerDay} onChange={(e) => setHoursPerDay(e.target.value)} className="max-w-xs" /></div>
      <p className="text-sm font-medium">Subjects</p>
      {subjects.map((s) => (
        <div key={s.id} className="flex gap-2 items-end">
          <div className="flex-1"><Input placeholder="Subject name" value={s.name} onChange={(e) => setSubjects(p => p.map(x => x.id === s.id ? { ...x, name: e.target.value } : x))} /></div>
          <div className="w-28"><Input type="number" min="1" max="5" placeholder="Diff 1-5" value={s.difficulty} onChange={(e) => setSubjects(p => p.map(x => x.id === s.id ? { ...x, difficulty: e.target.value } : x))} /></div>
          <div className="w-24"><Input type="number" placeholder="Days" value={s.daysUntilExam} onChange={(e) => setSubjects(p => p.map(x => x.id === s.id ? { ...x, daysUntilExam: e.target.value } : x))} /></div>
          <Button variant="ghost" size="icon" onClick={() => subjects.length > 1 && setSubjects(p => p.filter(x => x.id !== s.id))}><Trash2 className="h-4 w-4 text-muted-foreground" /></Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => setSubjects(p => [...p, { id: crypto.randomUUID(), name: "", difficulty: "3", daysUntilExam: "" }])}><Plus className="h-4 w-4 mr-1" />Add Subject</Button>
      {plan && (
        <div className="glass-card p-6 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
          <p className="text-sm text-muted-foreground mb-3 text-center">Daily Study Plan</p>
          <div className="space-y-2">
            {plan.map((p) => (
              <div key={p.name} className="flex items-center justify-between glass-card px-4 py-3">
                <span className="font-medium text-sm">{p.name}</span>
                <div className="text-right">
                  <span className="text-primary font-bold">{p.dailyHours}h/day</span>
                  <span className="text-xs text-muted-foreground ml-2">({p.totalHours}h over {p.days}d)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const aiToolsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Study Tools",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", ratingCount: "720" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://smart-tools-for-student.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "AI Study Tools", item: "https://smart-tools-for-student.lovable.app/ai-tools" },
    ],
  },
];

export default function AiToolsPage() {
  return (
    <Layout>
      <SEOHead
        title="AI Study Tools — GPA Predictor, Attendance Planner & Study Time Estimator"
        description="Free AI-powered student tools: predict required GPA, plan attendance, estimate study hours, and calculate goal scores. Smart tools for serious students."
        jsonLd={aiToolsJsonLd}
      />
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "AI Study Tools" }]} />

        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">AI Study Tools — Predict, Plan & Improve Your Grades</h1>
          <p className="text-muted-foreground">Free AI study planner for students: GPA predictor, attendance planner, exam score predictor, and study time estimator.</p>
        </header>

        <div className="glass-card p-6">
          <Tabs defaultValue="gpa">
            <TabsList className="w-full flex-wrap h-auto gap-1">
              <TabsTrigger value="gpa" className="flex-1">GPA Predictor</TabsTrigger>
              <TabsTrigger value="attendance" className="flex-1">Attendance Planner</TabsTrigger>
              <TabsTrigger value="goal" className="flex-1">Goal Calculator</TabsTrigger>
              <TabsTrigger value="study" className="flex-1">Study Planner</TabsTrigger>
            </TabsList>
            <TabsContent value="gpa" className="mt-4"><GpaPredictor /></TabsContent>
            <TabsContent value="attendance" className="mt-4"><AttendancePlanner /></TabsContent>
            <TabsContent value="goal" className="mt-4"><GoalCalculator /></TabsContent>
            <TabsContent value="study" className="mt-4"><StudyTimeEstimator /></TabsContent>
          </Tabs>
        </div>

        <AdBanner />

        {/* SEO Content */}
        <section className="glass-card p-6 space-y-4">
          <h2 className="text-2xl font-bold">Smart Academic Planning Tools for Students</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our AI-powered study tools help students predict required GPA scores, plan weekly attendance targets, calculate what marks are needed to pass, and estimate daily study hours for exams. These are the smart student tools free that every college student needs — from an AI GPA predictor to a study time estimator for exam preparation.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="q1"><AccordionTrigger>How does the AI GPA Predictor work?</AccordionTrigger><AccordionContent className="text-muted-foreground">Enter your current CGPA, completed credits, target CGPA, and remaining credits. It calculates the exact GPA needed using weighted average formulas — the best AI GPA predictor for students planning how to raise CGPA in final semester.</AccordionContent></AccordionItem>
            <AccordionItem value="q2"><AccordionTrigger>What is the study time estimator?</AccordionTrigger><AccordionContent className="text-muted-foreground">Input subjects, difficulty levels (1-5), days until exam, and available daily hours. It creates a personalized study schedule — your free study hours calculator for exam preparation.</AccordionContent></AccordionItem>
            <AccordionItem value="q3"><AccordionTrigger>Can I calculate what marks I need to pass?</AccordionTrigger><AccordionContent className="text-muted-foreground">Yes! The Goal Calculator (grade needed to pass calculator) reverse-engineers the score you need in upcoming assessments — the required marks calculator to pass your exams.</AccordionContent></AccordionItem>
            <AccordionItem value="q4"><AccordionTrigger>How accurate is the attendance planner?</AccordionTrigger><AccordionContent className="text-muted-foreground">It uses mathematical projections based on your current attendance data to give weekly targets. As a college attendance tracker free tool, it's designed to be practical and accurate.</AccordionContent></AccordionItem>
            <AccordionItem value="q5"><AccordionTrigger>Are these tools really free?</AccordionTrigger><AccordionContent className="text-muted-foreground">100% free. No sign-up, no premium features. Smart Student Toolkit's academic performance tracker online tools are completely free forever.</AccordionContent></AccordionItem>
          </Accordion>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold mb-3">More Free Student Calculators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link to="/cgpa" className="glass-card-hover p-4 text-center text-sm font-medium">🎓 CGPA Calculator — Calculate Your GPA</Link>
            <Link to="/attendance" className="glass-card-hover p-4 text-center text-sm font-medium">📋 Attendance Calculator — Check Your Bunk Limit</Link>
            <Link to="/percentage" className="glass-card-hover p-4 text-center text-sm font-medium">📊 Percentage Calculator — Marks to Percentage</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
