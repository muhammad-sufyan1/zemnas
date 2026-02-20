import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Workflow, Clock, Settings, RefreshCw, CheckCircle2, Quote, Zap, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Time Savings",
    description: "Eliminate repetitive tasks and free your team for higher-value work.",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description: "Streamline workflows before automating to maximize efficiency gains.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Automation that evolves with your processes and learns from usage.",
  },
  {
    icon: Workflow,
    title: "Cross-System Orchestration",
    description: "Coordinate actions across multiple tools and platforms seamlessly.",
  },
];

const process = [
  { step: "01", title: "Process Mapping", description: "Document current workflows and identify automation opportunities." },
  { step: "02", title: "Prioritization", description: "Focus on high-impact, low-risk automations first." },
  { step: "03", title: "Implementation", description: "Build robust automations with proper error handling and monitoring." },
  { step: "04", title: "Iteration", description: "Refine and expand based on real-world performance." },
];

const automationExamples = [
  {
    title: "Invoice Processing",
    before: "Manual data entry, 15 minutes per invoice",
    after: "Auto-extracted and routed, 30 seconds",
    savings: "95% time reduction",
  },
  {
    title: "Employee Onboarding",
    before: "12 manual steps across 5 systems",
    after: "Single trigger, automatic setup",
    savings: "4 hours saved per hire",
  },
  {
    title: "Report Generation",
    before: "Weekly manual compilation, 2 hours",
    after: "Auto-generated and delivered",
    savings: "100+ hours/year recovered",
  },
  {
    title: "Lead Qualification",
    before: "Manual review of every inquiry",
    after: "Auto-scored and routed by fit",
    savings: "3x faster response time",
  },
];

const caseStudy = {
  client: "E-commerce Company",
  industry: "Retail",
  title: "Order Fulfillment Automation",
  challenge: "A growing e-commerce business was drowning in manual order processing. Staff spent hours daily on repetitive tasks: updating inventory, notifying warehouses, generating shipping labels, and sending customer updates.",
  solution: "We built an end-to-end automation pipeline that triggers on new orders, validates inventory, generates documentation, coordinates with shipping carriers, and keeps customers informed—all without human intervention for standard orders.",
  results: [
    { metric: "85%", label: "Orders fully automated" },
    { metric: "6 hrs", label: "Daily time saved" },
    { metric: "99.2%", label: "Accuracy rate" },
    { metric: "< 2 min", label: "Order to shipping label" },
  ],
  testimonial: {
    quote: "We went from being overwhelmed to having time to actually grow the business. The automation handles our volume spikes without breaking a sweat.",
    author: "Operations Manager",
    company: "E-commerce Company",
  },
};

export default function WorkflowAutomation() {
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
                    <Workflow className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium tracking-widest uppercase">Automation</span>
                </div>

                <h1 className="font-display text-foreground mb-6">
                  Workflow Automation
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Reducing manual work through smart, maintainable systems. Automation that adapts as your processes evolve and scales with your growth.
                </p>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-surface-subtle to-secondary/20 rounded-2xl overflow-hidden border border-border relative">
                  {/* Workflow visualization */}
                  <div className="absolute inset-0 p-8">
                    <div className="flex items-center justify-between h-full">
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Timer className="w-8 h-8 text-primary/50" />
                      </motion.div>
                      <motion.div 
                        className="flex-1 mx-4 h-1 bg-primary/20 rounded"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      >
                        <Zap className="w-8 h-8 text-primary/50" />
                      </motion.div>
                      <motion.div 
                        className="flex-1 mx-4 h-1 bg-primary/20 rounded"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      >
                        <CheckCircle2 className="w-8 h-8 text-primary/50" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before/After Examples */}
        <section className="section-padding bg-surface-subtle">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Real Results</span>
              <h2 className="font-display text-foreground mt-4">Before and after automation</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {automationExamples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl"
                >
                  <h3 className="font-display text-xl text-foreground mb-4">{example.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-medium text-destructive/80 bg-destructive/10 px-2 py-1 rounded">Before</span>
                      <p className="text-text-secondary text-sm">{example.before}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">After</span>
                      <p className="text-text-secondary text-sm">{example.after}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm font-medium text-primary">{example.savings}</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <h2 className="font-display text-foreground mt-4">Smart automation</h2>
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
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-surface-accent rounded-xl border border-border overflow-hidden flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Automation dashboard</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-surface-subtle rounded-lg border border-border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Workflow builder</p>
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-surface-subtle rounded-lg border border-border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Metrics view</p>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
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

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {caseStudy.results.map((result) => (
                    <div key={result.label} className="p-4 bg-card border border-border rounded-xl text-center">
                      <div className="text-2xl font-display text-primary mb-1">{result.metric}</div>
                      <div className="text-xs text-text-muted">{result.label}</div>
                    </div>
                  ))}
                </div>

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
                Ready to automate?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Let's identify where automation can save your team the most time and create the most value.
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