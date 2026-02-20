import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Code, Layers, Shield, Zap, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business, from startup to enterprise scale.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Built-in security practices and compliance considerations from day one.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Fast, responsive applications that deliver exceptional user experiences.",
  },
  {
    icon: Code,
    title: "Clean Codebase",
    description: "Maintainable, documented code that your team can work with long-term.",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "Understanding your business needs, workflows, and technical constraints." },
  { step: "02", title: "Architecture", description: "Designing a system that balances functionality, scalability, and simplicity." },
  { step: "03", title: "Development", description: "Building in iterative cycles with regular demos and feedback." },
  { step: "04", title: "Deployment", description: "Launch with proper monitoring, documentation, and handoff." },
];

const caseStudy = {
  client: "FinTech Startup",
  industry: "Financial Services",
  title: "Custom Trading Platform",
  challenge: "A growing fintech company needed a real-time trading platform that could handle thousands of concurrent users while maintaining sub-second response times.",
  solution: "We built a microservices architecture with WebSocket connections for real-time data, a React frontend with optimistic updates, and a robust PostgreSQL database with Redis caching.",
  results: [
    { metric: "99.9%", label: "Uptime achieved" },
    { metric: "< 100ms", label: "Average response time" },
    { metric: "50K+", label: "Daily active users" },
    { metric: "3 months", label: "Time to market" },
  ],
  testimonial: {
    quote: "Zemnas delivered a platform that exceeded our expectations. Their architecture decisions have allowed us to scale without any major refactoring.",
    author: "CTO",
    company: "FinTech Startup",
  },
};

export default function CustomDevelopment() {
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
                to="/services/software" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Software & AI
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
                  <span className="text-sm text-primary font-medium tracking-widest uppercase">Software Service</span>
                </div>

                <h1 className="font-display text-foreground mb-6">
                  Custom Software Development
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Tailored platforms designed around your workflows and constraints. Built for scale, maintainability, and real-world use.
                </p>
              </motion.div>

              {/* Hero Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-surface-subtle to-secondary/20 rounded-2xl overflow-hidden border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Code className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">Project screenshot placeholder</p>
                    </div>
                  </div>
                  {/* Decorative code lines */}
                  <div className="absolute top-6 left-6 right-6 space-y-2 opacity-30">
                    <div className="h-2 bg-primary/20 rounded w-3/4" />
                    <div className="h-2 bg-muted rounded w-1/2" />
                    <div className="h-2 bg-primary/20 rounded w-2/3" />
                    <div className="h-2 bg-muted rounded w-1/3" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Story */}
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
                  Off-the-shelf software rarely fits
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Generic tools force you to adapt your processes to their limitations. You end up with workarounds, 
                  manual steps, and frustrated teams. The cost of not having the right tool compounds daily.
                </p>
                <ul className="space-y-3">
                  {["Workflows that don't match your reality", "Data trapped in disconnected systems", "Features you pay for but never use", "Scaling bottlenecks built into the foundation"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Approach</span>
                <h2 className="font-display text-foreground mt-4 mb-6">
                  Software shaped around you
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We start with your workflows, constraints, and goals—not a template. Every feature exists because 
                  it solves a real problem. The result is software that feels like it was always meant to exist.
                </p>
                <ul className="space-y-3">
                  {["Built for your exact use case", "Integrated with your existing tools", "Designed to scale as you grow", "Owned by you, forever"].map((item) => (
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

        {/* Features */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">What We Deliver</span>
              <h2 className="font-display text-foreground mt-4">Built to last</h2>
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
              {/* Image Gallery Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-surface-accent rounded-xl border border-border overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Dashboard screenshot</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-surface-subtle rounded-lg border border-border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Mobile view</p>
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-surface-subtle rounded-lg border border-border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Analytics view</p>
                  </div>
                </div>
              </motion.div>

              {/* Case Study Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
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

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {caseStudy.results.map((result) => (
                    <div key={result.label} className="p-4 bg-card border border-border rounded-xl text-center">
                      <div className="text-2xl font-display text-primary mb-1">{result.metric}</div>
                      <div className="text-xs text-text-muted">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-8 p-6 bg-card border border-border rounded-xl">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <p className="text-text-secondary italic mb-4">"{caseStudy.testimonial.quote}"</p>
                  <div className="text-sm">
                    <span className="font-medium text-foreground">{caseStudy.testimonial.author}</span>
                    <span className="text-text-muted"> • {caseStudy.testimonial.company}</span>
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
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Process</span>
              <h2 className="font-display text-foreground mt-4">How we work</h2>
            </motion.div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />
              
              <div className="space-y-10">
                {process.map((item, index) => (
                  <motion.div 
                    key={item.step} 
                    className="flex gap-6 md:gap-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{item.step}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                      <p className="text-text-secondary">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-surface-subtle">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-foreground mb-6">
                Ready to build something custom?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Let's discuss how we can create software that fits your exact needs and grows with your business.
              </p>
              <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4" />
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