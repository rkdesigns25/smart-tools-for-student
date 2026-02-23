import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Copy, Check, RotateCcw, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

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

    // Bunk meter: max classes you can miss while staying >= threshold
    // (a) / (t + x) >= th/100 won't work — we need (a)/(t+x) >= th/100 → already attended
    // Actually: how many MORE can you miss from future? floor((a*100 - th*t) / th)
    const bunkable = Math.max(0, Math.floor((a * 100 - th * t) / th));

    // Recovery: if below threshold, how many consecutive classes needed
    // (a + x) / (t + x) >= th/100 → x >= (th*t - 100*a) / (100 - th)
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
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">📋 Attendance Calculator</h1>
          <p className="text-muted-foreground">Track your attendance, check bunk limits, and plan recovery.</p>
        </div>

        <div className="glass-card p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label className="text-sm">Total Classes Held</Label>
              <Input type="number" min="0" placeholder="60" value={total} onChange={(e) => setTotal(e.target.value)} />
            </div>
            <div>
              <Label className="text-sm">Classes Attended</Label>
              <Input type="number" min="0" placeholder="45" value={attended} onChange={(e) => setAttended(e.target.value)} />
            </div>
            <div>
              <Label className="text-sm">Required % (threshold)</Label>
              <Input type="number" min="0" max="100" placeholder="75" value={threshold} onChange={(e) => setThreshold(e.target.value)} />
            </div>
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

        <Accordion type="single" collapsible>
          <AccordionItem value="how"><AccordionTrigger>How It Works</AccordionTrigger><AccordionContent>Attendance % = (Classes Attended / Total Classes) × 100. The Bunk Meter calculates how many more classes you can skip while staying at or above your required threshold. Recovery Mode shows the minimum consecutive classes needed to reach the threshold.</AccordionContent></AccordionItem>
          <AccordionItem value="faq1"><AccordionTrigger>Why is 75% the default threshold?</AccordionTrigger><AccordionContent>Most universities require a minimum 75% attendance to be eligible for exams. You can change this to match your institution's requirement.</AccordionContent></AccordionItem>
          <AccordionItem value="faq2"><AccordionTrigger>Does this account for future classes?</AccordionTrigger><AccordionContent>The Bunk Meter assumes future classes will be added to the total. Recovery Mode calculates the minimum additional classes you must attend consecutively.</AccordionContent></AccordionItem>
        </Accordion>

        <div>
          <h3 className="font-semibold mb-3">Related Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link to="/cgpa" className="glass-card-hover p-4 text-center text-sm font-medium">🎓 CGPA</Link>
            <Link to="/percentage" className="glass-card-hover p-4 text-center text-sm font-medium">📊 Percentage</Link>
            <Link to="/ai-tools" className="glass-card-hover p-4 text-center text-sm font-medium">🤖 AI Tools</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
