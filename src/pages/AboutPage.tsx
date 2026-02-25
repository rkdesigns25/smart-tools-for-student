import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Link } from "react-router-dom";
import { GraduationCap, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <SEOHead
        title="About Smart Student Toolkit — Free Academic Calculators for Students"
        description="Learn about Smart Student Toolkit — a free, open platform providing CGPA calculators, attendance trackers, and AI study tools for college and university students worldwide."
      />
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "About" }]} />

        <section className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">About Smart Student Toolkit</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe every student deserves free, fast, and beautiful academic tools — no sign-ups, no ads cluttering the screen, no hidden fees.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Smart Student Toolkit was built to solve a simple problem: students waste hours searching for reliable CGPA calculators, attendance percentage calculators, and study planners that actually work. Most existing tools are bloated, full of ads, or require sign-up. We created a single destination where students in India, Pakistan, and worldwide can calculate CGPA, track attendance, find percentages, and plan studies — all for free, instantly.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-card p-5 text-center space-y-2">
            <Zap className="h-8 w-8 mx-auto text-primary" />
            <h3 className="font-semibold">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">All calculations run instantly in your browser — zero server calls, zero waiting.</p>
          </div>
          <div className="glass-card p-5 text-center space-y-2">
            <Target className="h-8 w-8 mx-auto text-primary" />
            <h3 className="font-semibold">100% Free</h3>
            <p className="text-sm text-muted-foreground">No sign-up, no premium tiers, no paywall. Every tool is completely free.</p>
          </div>
          <div className="glass-card p-5 text-center space-y-2">
            <Users className="h-8 w-8 mx-auto text-primary" />
            <h3 className="font-semibold">Built for Students</h3>
            <p className="text-sm text-muted-foreground">Designed by students, for students — covering real academic needs.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Why We Built This</h2>
          <p className="text-muted-foreground leading-relaxed">
            As engineering students ourselves, we were frustrated by scattered, unreliable online calculators. We needed a free CGPA calculator with credits support, an attendance calculator that tells you how many classes you can miss, and a study time estimator for exams. So we built Smart Student Toolkit — a single platform with every academic calculator a student needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Explore Our Tools</h2>
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
