import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function PrivacyPage() {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy — Smart Student Toolkit"
        description="Smart Student Toolkit privacy policy. We don't track you, don't store your data, and don't use cookies for advertising. Your calculations stay in your browser."
      />
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <section className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: February 2026</p>
        </section>

        <article className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-bold">No Tracking Statement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Smart Student Toolkit does <strong>not</strong> collect, store, or transmit any personal data. All calculations — CGPA, attendance percentages, study plans — run entirely in your browser. Nothing is sent to any server.
            </p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-bold">Data We Don't Collect</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>No personal information (name, email, phone)</li>
              <li>No academic data (grades, attendance records)</li>
              <li>No IP addresses or geolocation</li>
              <li>No device fingerprinting</li>
            </ul>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-bold">Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use a single <code>localStorage</code> entry to remember your dark/light mode preference. No advertising cookies, no tracking pixels, no third-party analytics cookies.
            </p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-bold">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We load the Inter font from Google Fonts. Google may log standard server access data (IP address, browser type) when the font is loaded. We do not control Google's data practices. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google's Privacy Policy</a>.
            </p>
          </section>

          <section className="glass-card p-6 space-y-3">
            <h2 className="text-xl font-bold">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy if we add new features. Any changes will be reflected on this page with an updated date.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}
