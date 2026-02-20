import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Globe, Shield, Zap, RefreshCw, CheckCircle2, Quote, Server, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import ecommercePlatform from "@/assets/work/ecommerce-platform.jpg";
import managedServices from "@/assets/work/managed-services.jpg";

const features = [
  {
    icon: RefreshCw,
    title: "Regular Updates",
    description: "CMS updates, plugin patches, and content management system maintenance.",
  },
  {
    icon: Shield,
    title: "Security Monitoring",
    description: "Proactive security patches, vulnerability scanning, and SSL management.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed improvements, caching optimization, and Core Web Vitals monitoring.",
  },
  {
    icon: Globe,
    title: "Uptime Monitoring",
    description: "24/7 uptime monitoring with rapid response to any issues.",
  },
];

const process = [
  { step: "01", title: "Site Audit", description: "Comprehensive review of your current platform and infrastructure." },
  { step: "02", title: "Maintenance Plan", description: "Custom schedule based on your platform and traffic needs." },
  { step: "03", title: "Ongoing Care", description: "Regular updates with detailed reporting on work completed." },
  { step: "04", title: "Rapid Response", description: "Priority support when urgent issues arise." },
];

const itManagement = [
  {
    icon: Server,
    title: "Server Management",
    description: "Complete server administration including provisioning, configuration, patching, and performance tuning.",
  },
  {
    icon: Activity,
    title: "Network Management",
    description: "Network monitoring, firewall management, VPN setup, and bandwidth optimization.",
  },
  {
    icon: Shield,
    title: "End-to-End IT Management",
    description: "Comprehensive IT infrastructure oversight from hardware to cloud services.",
  },
];

const caseStudy = {
  client: "Multi-location Retailer",
  industry: "Retail",
  title: "99.99% Uptime for High-Traffic E-commerce Platform",
  challenge: "A retailer with 50+ locations was losing thousands in sales during site outages. Their legacy WordPress setup couldn't handle traffic spikes during promotions, and security vulnerabilities were a constant concern.",
  solution: "We migrated to modern cloud infrastructure, implemented aggressive caching, and established 24/7 monitoring. Monthly maintenance keeps everything patched and optimized, while our rapid response team handles any issues within minutes.",
  results: [
    { metric: "99.99%", label: "Uptime achieved" },
    { metric: "3.2s→0.8s", label: "Load time improvement" },
    { metric: "Zero", label: "Security incidents" },
    { metric: "$340K", label: "Prevented revenue loss" },
  ],
  testimonial: {
    quote: "We used to dread every flash sale because the site would crash. Now we run promotions with confidence knowing the infrastructure can handle anything.",
    author: "CTO",
    company: "Multi-location Retail Group",
  },
};

const galleryImages = [
  { src: ecommercePlatform, alt: "E-commerce platform", caption: "High-performance e-commerce infrastructure" },
  { src: managedServices, alt: "Managed services dashboard", caption: "Real-time monitoring dashboard" },
];

export default function WebsiteMaintenance() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02]" />
            <motion.div 
              className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/services/managed" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Managed Services
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium tracking-widest uppercase">Managed Service</span>
                </div>

                <h1 className="font-display text-foreground mb-6">
                  Website & Platform Maintenance
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Sleep soundly knowing your digital presence is monitored, maintained, and optimized around the clock. We handle the technical complexity so you can focus on your business.
                </p>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                  <img 
                    src={managedServices} 
                    alt="Platform monitoring dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="section-padding bg-surface-subtle">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <div>
                <span className="text-sm text-primary font-medium uppercase tracking-wider">The Challenge</span>
                <h2 className="font-display text-foreground mt-4 mb-6">
                  Technical debt compounds
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Outdated plugins, missed security patches, and slow load times cost you customers. But your team 
                  doesn't have time for constant maintenance.
                </p>
                <ul className="space-y-3">
                  {["Security vulnerabilities go unpatched", "Performance degrades over time", "Downtime costs thousands per hour", "No one notices problems until customers complain"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Solution</span>
                <h2 className="font-display text-foreground mt-4 mb-6">
                  Proactive platform care
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We monitor, maintain, and optimize your digital infrastructure 24/7. Problems get fixed before 
                  they affect your customers.
                </p>
                <ul className="space-y-3">
                  {["24/7 uptime monitoring and alerting", "Regular security patches and updates", "Performance optimization and testing", "Documented maintenance with monthly reports"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IT Management */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Managed IT Services</span>
              <h2 className="font-display text-foreground mt-4">End-to-end IT management</h2>
              <p className="text-text-secondary mt-4 max-w-2xl">
                Beyond websites—comprehensive IT infrastructure management for growing businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {itManagement.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl card-hover group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-surface-subtle">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">What's Included</span>
              <h2 className="font-display text-foreground mt-4">Proactive care</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl card-hover group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Work</span>
              <h2 className="font-display text-foreground mt-4">Infrastructure in action</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-border"
                >
                  <div className="aspect-video">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-background text-sm font-medium">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-surface-subtle">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Case Study</span>
              <h2 className="font-display text-foreground mt-4">{caseStudy.title}</h2>
              <p className="text-text-secondary mt-2">{caseStudy.client} • {caseStudy.industry}</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">The Challenge</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Our Solution</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {caseStudy.results.map((result) => (
                    <div key={result.label} className="p-4 bg-card border border-border rounded-xl text-center">
                      <div className="text-2xl font-display text-primary mb-1">{result.metric}</div>
                      <div className="text-xs text-text-muted">{result.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="p-8 bg-card border border-border rounded-2xl h-full flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <p className="text-text-secondary italic text-lg leading-relaxed mb-6">"{caseStudy.testimonial.quote}"</p>
                  <div>
                    <span className="font-medium text-foreground">{caseStudy.testimonial.author}</span>
                    <span className="text-text-muted block text-sm">{caseStudy.testimonial.company}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Process</span>
              <h2 className="font-display text-foreground mt-4">How it works</h2>
            </motion.div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-surface-subtle">
          <div className="max-w-3xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-foreground mb-6">
                Ready for worry-free maintenance?
              </h2>
              <p className="text-text-secondary mb-8 text-lg">
                Let's discuss how we can keep your website running at its best.
              </p>
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
