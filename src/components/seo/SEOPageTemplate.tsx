import { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AdBanner from "@/components/ads/AdBanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

interface FAQ { q: string; a: string; }

interface SEOPageProps {
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  breadcrumb: string;
  children: ReactNode;
  faqs: FAQ[];
  jsonLd?: object | object[];
}

const relatedTools = [
  { path: "/cgpa", label: "🎓 CGPA Calculator" },
  { path: "/attendance", label: "📋 Attendance Calculator" },
  { path: "/percentage", label: "📊 Percentage Calculator" },
  { path: "/ai-tools", label: "🤖 AI Study Tools" },
];

export default function SEOPageTemplate({ title, metaDescription, h1, subtitle, breadcrumb, children, faqs, jsonLd }: SEOPageProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const allJsonLd = jsonLd ? [jsonLd, faqJsonLd] : [faqJsonLd];

  return (
    <Layout>
      <SEOHead title={title} description={metaDescription} jsonLd={allJsonLd} />
      <article className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: breadcrumb }]} />

        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">{h1}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </header>

        <div className="space-y-6">{children}</div>

        <AdBanner />

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">More Free Student Calculators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {relatedTools.map(t => (
              <Link key={t.path} to={t.path} className="glass-card-hover p-4 text-center text-sm font-medium">{t.label}</Link>
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}
