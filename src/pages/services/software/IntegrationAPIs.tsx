import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plug, Database, Lock, Globe, CheckCircle2, Quote, Link2, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Database,
    title: "Data Synchronization",
    description: "Keep data consistent across all your systems with reliable sync mechanisms.",
  },
  {
    icon: Lock,
    title: "Secure Connections",
    description: "Enterprise-grade security for all integrations with proper authentication.",
  },
  {
    icon: Globe,
    title: "Third-Party APIs",
    description: "Connect to any external service or platform your business relies on.",
  },
  {
    icon: Plug,
    title: "Custom API Development",
    description: "Build APIs that expose your systems to partners and internal tools.",
  },
];

const process = [
  { step: "01", title: "Integration Audit", description: "Map your current systems and identify connection needs." },
  { step: "02", title: "Architecture Design", description: "Plan data flows, security, and error handling strategies." },
  { step: "03", title: "Implementation", description: "Build robust integrations with proper testing and documentation." },
  { step: "04", title: "Monitoring", description: "Set up alerts and dashboards to ensure ongoing reliability." },
];

const integrationTypes = [
  {
    title: "CRM Integrations",
    description: "Salesforce, HubSpot, Pipedrive—keep your customer data flowing.",
    icon: "💼",
  },
  {
    title: "Payment Systems",
    description: "Stripe, PayPal, banking APIs for seamless transactions.",
    icon: "💳",
  },
  {
    title: "ERPs & Accounting",
    description: "NetSuite, QuickBooks, SAP—financial data where you need it.",
    icon: "📊",
  },
  {
    title: "Communication Tools",
    description: "Slack, Teams, email systems—automated notifications and updates.",
    icon: "💬",
  },
];

const caseStudy = {
  client: "SaaS Platform",
  industry: "Technology",
  title: "Multi-System Integration Hub",
  challenge: "A B2B SaaS company had data trapped in silos across 8 different systems. Sales couldn't see support history, finance was manually reconciling data, and customers experienced inconsistent information across touchpoints.",
  solution: "We built a central integration hub using event-driven architecture. Each system publishes changes to a message queue, which routes data to all relevant destinations in real-time while maintaining a complete audit trail.",
  results: [
    { metric: "8", label: "Systems connected" },
    { metric: "< 5 sec", label: "Data sync time" },
    { metric: "Zero", label: "Manual data entry" },
    { metric: "99.99%", label: "Integration uptime" },
  ],
  testimonial: {
    quote: "For the first time, we have a single source of truth. Customer success can see the full picture, and our finance team's month-end close went from days to hours.",
    author: "VP of Operations",
    company: "B2B SaaS Company",
  },
};

export default function IntegrationAPIs() {
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
                    <Plug className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium tracking-widest uppercase">Integration</span>
                </div>

                <h1 className="font-display text-foreground mb-6">
                  Integration & APIs
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Connecting tools, platforms, and data into cohesive systems. Breaking silos while maintaining security and reliability.
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
                  {/* Connection visualization */}
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-xs">
                      {/* Central hub */}
                      <motion.div 
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-card border-2 border-primary/30 flex items-center justify-center z-10"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Link2 className="w-8 h-8 text-primary" />
                      </motion.div>
                      
                      {/* Orbiting nodes */}
                      {[0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center"
                          style={{
                            left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 4)}%`,
                            top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 4)}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          <Server className="w-5 h-5 text-primary/50" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem */}
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
                <span className="text-sm text-primary font-medium uppercase tracking-wider">The Problem</span>
                <h2 className="font-display text-foreground mt-4 mb-6">
                  Data trapped in silos
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Every new tool adds another island. Your team spends hours copying data between systems, 
                  reconciling discrepancies, and answering "why don't these numbers match?" questions.
                </p>
                <ul className="space-y-3">
                  {["Manual data entry between systems", "Inconsistent information across teams", "Delayed reporting and insights", "Error-prone reconciliation processes"].map((item) => (
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
                  Connected, not chaotic
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We build integrations that keep your systems in sync automatically. Data flows where it 
                  needs to go, when it needs to go there—without human intervention.
                </p>
                <ul className="space-y-3">
                  {["Real-time data synchronization", "Single source of truth", "Automated error handling and retry", "Complete audit trails"].map((item) => (
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

        {/* Integration Types */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">What We Connect</span>
              <h2 className="font-display text-foreground mt-4">Common integrations</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {integrationTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl card-hover group"
                >
                  <div className="text-3xl mb-4">{type.icon}</div>
                  <h3 className="font-display text-xl text-foreground mb-2">{type.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{type.description}</p>
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
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Capabilities</span>
              <h2 className="font-display text-foreground mt-4">Built for reliability</h2>
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
        <section className="section-padding bg-background">
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
                  <p className="text-sm text-muted-foreground">Integration architecture diagram</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-surface-subtle rounded-lg border border-border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Data flow view</p>
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-surface-subtle rounded-lg border border-border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Monitoring dashboard</p>
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
        <section className="section-padding bg-surface-subtle">
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
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-foreground mb-6">
                Ready to connect your systems?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Let's discuss how integration can eliminate manual work and create a single source of truth.
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