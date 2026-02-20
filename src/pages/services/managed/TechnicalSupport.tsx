import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Code, Server, Bell, Wrench, CheckCircle2, Quote, Shield, Database, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import aiPlatform from "@/assets/work/ai-platform.jpg";
import managedServices from "@/assets/work/managed-services.jpg";

const features = [
  {
    icon: Server,
    title: "System Monitoring",
    description: "Continuous monitoring of your infrastructure with proactive issue detection.",
  },
  {
    icon: Wrench,
    title: "API Maintenance",
    description: "Keep integrations running smoothly with regular testing and updates.",
  },
  {
    icon: Bell,
    title: "Incident Response",
    description: "Rapid response to technical issues with clear communication throughout.",
  },
  {
    icon: Code,
    title: "Bug Fixes & Patches",
    description: "Quick resolution of bugs and implementation of critical patches.",
  },
];

const process = [
  { step: "01", title: "System Assessment", description: "Review your technical stack and identify monitoring needs." },
  { step: "02", title: "Monitoring Setup", description: "Implement comprehensive monitoring and alerting systems." },
  { step: "03", title: "Ongoing Support", description: "Regular health checks and proactive maintenance." },
  { step: "04", title: "Incident Management", description: "Structured response process for any issues that arise." },
];

const itServices = [
  {
    icon: Network,
    title: "Network Management",
    description: "Complete network infrastructure oversight including routers, switches, firewalls, and VPN configurations.",
  },
  {
    icon: Database,
    title: "Server Management",
    description: "Server provisioning, configuration, patching, backup management, and performance optimization.",
  },
  {
    icon: Shield,
    title: "Security Operations",
    description: "Continuous security monitoring, threat detection, vulnerability assessments, and compliance management.",
  },
];

const caseStudy = {
  client: "FinTech Startup",
  industry: "Financial Services",
  title: "From 4-Hour Outages to 15-Minute Resolution",
  challenge: "A growing FinTech company's engineering team was spending 40% of their time on maintenance and support tickets. API integrations frequently broke, and outages could take hours to diagnose without proper monitoring.",
  solution: "We implemented comprehensive monitoring across their microservices architecture, established runbooks for common issues, and created an escalation process. Our team now handles first-line support while their engineers focus on product development.",
  results: [
    { metric: "85%", label: "Reduction in resolution time" },
    { metric: "40%", label: "Engineering time reclaimed" },
    { metric: "<15min", label: "Average incident response" },
    { metric: "99.9%", label: "API uptime achieved" },
  ],
  testimonial: {
    quote: "Our engineering team finally has time to build features again. When issues arise, Zemnas handles them faster than we ever could—often before we even know there's a problem.",
    author: "VP of Engineering",
    company: "Growing FinTech Startup",
  },
};

const galleryImages = [
  { src: aiPlatform, alt: "Technical monitoring platform", caption: "Real-time system monitoring" },
  { src: managedServices, alt: "Operations dashboard", caption: "Incident management dashboard" },
];

export default function TechnicalSupport() {
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
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium tracking-widest uppercase">Managed Service</span>
                </div>

                <h1 className="font-display text-foreground mb-6">
                  Technical & Integration Support
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Your dedicated technical operations team. API maintenance, system monitoring, and incident response—so your engineers can focus on building, not firefighting.
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
                    src={aiPlatform} 
                    alt="Technical operations monitoring"
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
                  Support drowns development
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Your best engineers are stuck debugging production issues instead of shipping features. Without 
                  proper monitoring, you're always reactive—never proactive.
                </p>
                <ul className="space-y-3">
                  {["Engineers interrupted by support tickets", "Outages take hours to diagnose", "Integration failures happen without warning", "No time for technical debt reduction"].map((item) => (
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
                  Technical operations partner
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We handle first-line technical support, monitoring, and incident response—escalating only what 
                  truly needs your engineers' attention.
                </p>
                <ul className="space-y-3">
                  {["24/7 monitoring with intelligent alerting", "First-line incident response and resolution", "Runbooks for common issues and scenarios", "Regular system health reports and recommendations"].map((item) => (
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

        {/* IT Services */}
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
              <h2 className="font-display text-foreground mt-4">Complete infrastructure support</h2>
              <p className="text-text-secondary mt-4 max-w-2xl">
                Beyond application support—full IT infrastructure management for modern businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
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
              <h2 className="font-display text-foreground mt-4">Technical reliability</h2>
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
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Tools</span>
              <h2 className="font-display text-foreground mt-4">Operations in action</h2>
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
                Ready for reliable support?
              </h2>
              <p className="text-text-secondary mb-8 text-lg">
                Let's discuss how we can keep your systems running smoothly.
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
