import { Link } from "react-router-dom";
import { Calculator, CalendarCheck, Percent, Brain, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const tools = [
  {
    title: "CGPA Calculator",
    description: "Calculate your CGPA, SGPA, or convert between grading scales instantly.",
    icon: Calculator,
    path: "/cgpa",
    emoji: "🎓",
  },
  {
    title: "Attendance Tracker",
    description: "Track your attendance, check bunk limits, and plan recovery.",
    icon: CalendarCheck,
    path: "/attendance",
    emoji: "📋",
  },
  {
    title: "Percentage Calculator",
    description: "Find percentages, percentage of values, and increase/decrease.",
    icon: Percent,
    path: "/percentage",
    emoji: "📊",
  },
  {
    title: "AI Tools",
    description: "GPA predictor, study planner, goal calculator, and more.",
    icon: Brain,
    path: "/ai-tools",
    emoji: "🤖",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="container px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Your Academic Toolkit,{" "}
            <span className="text-primary">Simplified</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Free calculators for CGPA, attendance, percentages, and smart study
            planning — all in one beautiful place.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/cgpa">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/ai-tools">Explore AI Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="container px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="glass-card-hover p-6 flex flex-col items-start gap-3 group"
            >
              <span className="text-3xl">{tool.emoji}</span>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
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
    </Layout>
  );
}
