import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight, MapPin, Phone } from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { name: "Creative Studio", href: "/services/creative" },
    { name: "Marketing Engine", href: "/services/marketing" },
    { name: "Software & AI", href: "/services/software" },
    { name: "Managed Services", href: "/services/managed" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px] opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/zemnas-logo-transparent.png" 
                alt="Zemnas" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-background/70 leading-relaxed max-w-sm">
              Your digital partner for creative, marketing, software, and AI solutions 
              that drive measurable growth.
            </p>

            {/* Contact & Social */}
            <div className="mt-8 flex flex-col gap-3">
              <motion.a
                href="mailto:contact@zemnas.com"
                className="inline-flex items-center gap-3 text-background/70 hover:text-primary-glow transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                contact@zemnas.com
              </motion.a>
              <motion.a
                href="tel:+17789006780"
                className="inline-flex items-center gap-3 text-background/70 hover:text-primary-glow transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                (778) 900-6780
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/zemnas/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-background/70 hover:text-primary-glow transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                Follow on LinkedIn
              </motion.a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-background/50 mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary-glow transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-background/50 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary-glow transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated Column - Next to Company */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-background/50 mb-6">
              Stay Updated
            </h4>
            <p className="text-background/70 mb-5 text-sm">
              Get insights on digital growth delivered to your inbox.
            </p>
            <div className="max-w-sm">
              <NewsletterForm variant="dark" />
            </div>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-background/50 mb-6">
              Locations
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-background/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1443 SW 1200th Rd, Holden, Missouri, USA</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-background/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Steinbachstr 128, 66424 Homburg Saar, Germany</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Zemnas. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="/privacy"
              className="text-sm text-background/50 hover:text-background/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-background/50 hover:text-background/80 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
