import { Link } from "react-router-dom";
import { Calculator, CalendarCheck, Percent, Brain, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import AdBanner from "@/components/ads/AdBanner";
import { Button } from "@/components/ui/button";

const BASE_URL = "https://smartstudenttoolkit.com";

const tools = [
  {
    title: "CGPA Calculator — Track Your Cumulative GPA",
    shortTitle: "CGPA Calculator",
    description: "Free online CGPA calculator with credits. Supports 4.0, 5.0, and 10.0 scales. Calculate your cumulative grade point average instantly.",
    icon: Calculator,
    path: "/cgpa",
    emoji: "🎓",
  },
  {
    title: "Attendance Calculator — Never Fall Short Again",
    shortTitle: "Attendance Calculator",
    description: "Student attendance calculator with bunk meter. Find how many classes you can miss or need to attend for 75% attendance.",
    icon: CalendarCheck,
    path: "/attendance",
    emoji: "📋",
  },
  {
    title: "Percentage Calculator — Marks & Grades",
    shortTitle: "Percentage Calculator",
    description: "Calculate percentage of marks obtained instantly. Works for school, college, and university students.",
    icon: Percent,
    path: "/percentage",
    emoji: "📊",
  },
  {
    title: "AI Study Tools — Predict, Plan & Improve",
    shortTitle: "AI Study Tools",
    description: "AI GPA predictor, attendance planner, study time estimator, and exam score predictor — free smart student tools.",
    icon: Brain,
    path: "/ai-tools",
    emoji: "🤖",
  },
];

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Smart Student Toolkit",
  url: BASE_URL,
  description: "Free academic calculators for students — CGPA, attendance, percentage, and AI study tools.",
};

export default function Index() {
  return (
    <Layout>
      <SEOHead
        title="Smart Student Toolkit — Free CGPA, Attendance & Percentage Calculator"
        description="Free online CGPA calculator, attendance calculator, and percentage calculator for students. Instant results, zero sign-up. Trusted by students in India, Pakistan, and worldwide."
        jsonLd={homepageJsonLd}
      />
      {/* Hero */}
      <section className="container px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Smart Student Toolkit — Free Academic Calculators for Students
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Free calculators for CGPA, attendance, percentages, and smart study
            planning — trusted by college and university students across India, Pakistan, and worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/cgpa">
                Calculate CGPA Free <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/ai-tools">Explore AI Study Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container px-4 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="glass-card-hover p-6 flex flex-col items-start gap-3 group"
            >
              <span className="text-3xl">{tool.emoji}</span>
              <h2 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {tool.shortTitle}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
              <span className="mt-auto text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Open <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <AdBanner />

      {/* Trust / SEO section */}
      <section className="container px-4 pb-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-center">Trusted by Students Across India, Pakistan & Worldwide</h2>
          <p className="text-muted-foreground text-center leading-relaxed">
            Smart Student Toolkit provides free, instant academic calculators — from a free CGPA calculator online to an attendance percentage calculator, percentage calculator for marks, and AI study planner for students. No sign-up required. No ads blocking your results. Just fast, accurate tools built for real student needs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="glass-card p-4">
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Free Forever</p>
            </div>
            <div className="glass-card p-4">
              <p className="text-2xl font-bold text-primary">0ms</p>
              <p className="text-xs text-muted-foreground">Server Calls</p>
            </div>
            <div className="glass-card p-4">
              <p className="text-2xl font-bold text-primary">7+</p>
              <p className="text-xs text-muted-foreground">Free Tools</p>
            </div>
            <div className="glass-card p-4">
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-xs text-muted-foreground">Grading Scales</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
