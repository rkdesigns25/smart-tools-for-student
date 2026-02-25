import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would integrate EmailJS here
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Us — Smart Student Toolkit"
        description="Get in touch with the Smart Student Toolkit team. Report bugs, suggest features, or just say hi. We'd love to hear from students using our free CGPA and attendance calculators."
      />
      <div className="container px-4 py-10 max-w-3xl mx-auto space-y-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />

        <section className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground">Have feedback, found a bug, or want a new feature? We'd love to hear from you.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 py-8">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h2 className="text-xl font-bold">Message Sent!</h2>
                <p className="text-sm text-muted-foreground text-center">Thank you for reaching out. We'll get back to you soon.</p>
                <Button variant="outline" size="sm" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm">Name</Label>
                  <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input id="email" type="email" placeholder="you@university.edu" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm">Message</Label>
                  <Textarea id="message" placeholder="Your feedback or question..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <Button type="submit" className="w-full"><Send className="h-4 w-4 mr-2" />Send Message</Button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="glass-card p-5 space-y-3">
              <h2 className="font-semibold text-lg">Connect With Us</h2>
              <div className="space-y-2">
                <a href="mailto:hello@smartstudenttoolkit.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" /> hello@smartstudenttoolkit.com
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-4 w-4" /> @SmartStudentKit
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>

            <div className="glass-card p-5 space-y-2">
              <h2 className="font-semibold text-lg">Quick Links</h2>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/faq" className="text-sm text-primary hover:underline">FAQ</Link>
                <Link to="/privacy" className="text-sm text-primary hover:underline">Privacy Policy</Link>
                <Link to="/about" className="text-sm text-primary hover:underline">About Us</Link>
                <Link to="/cgpa" className="text-sm text-primary hover:underline">CGPA Calculator</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
