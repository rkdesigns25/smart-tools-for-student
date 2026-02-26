import SEOPageTemplate from "@/components/seo/SEOPageTemplate";

export default function CgpaForJobsPage() {
  return (
    <SEOPageTemplate
      title="CGPA Required for Job Placements 2025 — Company-Wise Cutoffs"
      metaDescription="Find the minimum CGPA required for campus placements at top companies. Company-wise CGPA cutoffs for TCS, Infosys, Google, Amazon, and more."
      h1="CGPA Required for Job Placements — Company-Wise Guide 2025"
      subtitle="Know the minimum CGPA cutoffs for top companies and plan your academic goals."
      breadcrumb="CGPA for Jobs"
      faqs={[
        { q: "What CGPA is required for TCS?", a: "TCS typically requires 6.0+ CGPA (60% equivalent) for campus placements. TCS Digital and NQT may have higher cutoffs around 7.0+." },
        { q: "Does Google check CGPA?", a: "Google doesn't have a strict CGPA cutoff but generally prefers 8.0+ for campus hiring. Skills and coding ability matter more for experienced roles." },
        { q: "Is 7.5 CGPA good enough for placements?", a: "7.5 CGPA is considered good and qualifies you for most companies including many product-based firms. Only a few dream companies may require 8.0+." },
        { q: "Can I get a job with 6.0 CGPA?", a: "Yes! Many mass-recruiting IT companies (TCS, Wipro, Infosys, Cognizant) accept 6.0 CGPA. Skills, projects, and interview performance matter significantly." },
        { q: "Does CGPA matter after first job?", a: "Generally no. After 2-3 years of experience, companies focus on skills and work experience rather than CGPA." },
      ]}
    >
      <section className="glass-card p-6 space-y-4">
        <h2 className="text-2xl font-bold">Company-Wise CGPA Requirements</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-muted-foreground">
            <thead><tr className="border-b border-border"><th className="text-left py-2">Company</th><th className="text-left py-2">Min CGPA</th><th className="text-left py-2">Category</th></tr></thead>
            <tbody>
              {[
                { c: "Google", g: "8.0+", t: "Dream" }, { c: "Microsoft", g: "7.5+", t: "Dream" },
                { c: "Amazon", g: "7.0+", t: "Product" }, { c: "Flipkart", g: "7.0+", t: "Product" },
                { c: "Deloitte", g: "7.0+", t: "Consulting" }, { c: "TCS Digital", g: "7.0+", t: "IT" },
                { c: "TCS / Infosys", g: "6.0+", t: "Mass IT" }, { c: "Wipro / Cognizant", g: "6.0+", t: "Mass IT" },
                { c: "GATE (PSUs)", g: "6.5+", t: "Government" },
              ].map(r => (
                <tr key={r.c} className="border-b border-border/50"><td className="py-1.5 font-medium">{r.c}</td><td className="text-primary font-bold">{r.g}</td><td>{r.t}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SEOPageTemplate>
  );
}
