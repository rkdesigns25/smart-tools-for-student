import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import AdBanner from "@/components/ads/AdBanner";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Privacy", path: "/privacy" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 mt-auto">
      <AdBanner className="border-b border-border/40" />
      <div className="container px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <GraduationCap className="h-4 w-4" />
          <span>© {new Date().getFullYear()} Smart Student Toolkit</span>
        </div>
        <nav className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
