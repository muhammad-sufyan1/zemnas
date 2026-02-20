import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Cpu, Brain, Sparkles, LineChart, CheckCircle2, Quote, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Machine Learning Integration",
    description: "Practical ML models that solve real business problems, not just demos.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description: "LLM-powered features for content, analysis, and decision support.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Data-driven forecasting and pattern recognition for better decisions.",
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    description: "Image and document processing for automation and quality control.",
  },
];

const process = [
  { step: "01", title: "Use Case Definition", description: "Identify where AI adds genuine value versus where simpler solutions work." },
  { step: "02", title: "Data Assessment", description: "Evaluate your data readiness and identify gaps to address." },
  { step: "03", title: "Prototype & Validate", description: "Build working prototypes to prove value before full investment." },
  { step: "04", title: "Production Deployment", description: "Integrate AI into your workflows with proper monitoring." },
];

const useCases = [
  {
    title: "Document Intelligence",
    description: "Automatically extract, classify, and route information from invoices, contracts, and forms.",
    icon: "📄",
  },
  {
    title: "Customer Insights",
    description: "Analyze support tickets and feedback to identify trends and predict churn.",
    icon: "🎯",
  },
  {
    title: "Content Generation",
    description: "AI-assisted writing for marketing copy, product descriptions, and documentation.",
    icon: "✍️",
  },
  {
    title: "Process Optimization",
    description: "Identify bottlenecks and inefficiencies through pattern analysis of operational data.",
    icon: "⚡",
  },
];

const caseStudy = {
  client: "Healthcare Provider",
  industry: "Healthcare",
  title: "AI-Powered Patient Triage System",
  challenge: "A regional healthcare network was struggling with appointment scheduling efficiency. Patients often booked with the wrong specialists, leading to wasted appointments and delayed care.",
  solution: "We built an intelligent triage system using natural language processing to analyze patient descriptions and medical history, routing them to the most appropriate specialist with 94% accuracy.",
  results: [
    { metric: "94%", label: "Routing accuracy" },
    { metric: "40%", label: "Reduction in misrouted appointments" },
    { metric: "2.5x", label: "Faster initial assessment" },
    { metric: "$1.2M", label: "Annual cost savings" },
  ],
  testimonial: {
    quote: "The AI triage system has transformed how we handle patient intake. Our staff can focus on care instead of administrative routing.",
    author: "Director of Operations",
    company: "Regional Healthcare Network",
  },
};

export default function AIPoweredTools() {
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
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium tracking-widest uppercase">AI Solutions</span>
                </div>

                <h1 className="font-display text-foreground mb-6">
                  AI-Powered Tools
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Applied AI for automation, intelligence, and efficiency—not novelty. Solutions that enhance human decision-making and multiply your team's capabilities.
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
                  {/* AI visualization placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        className="w-24 h-24 rounded-full border-2 border-primary/30 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Brain className="w-10 h-10 text-primary/50" />
                      </motion.div>
                      <motion.div
                        className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-4 h-4 text-primary" />
                      </motion.div>
                    </div>
                  </div>
                  {/* Neural network lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                    <motion.path
                      d="M 50 150 Q 150 50 200 150 Q 250 250 350 150"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Philosophy */}
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
                <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Philosophy</span>
                <h2 className="font-display text-foreground mt-4 mb-6">
                  AI that serves a purpose
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We're skeptical of AI for its own sake. Before recommending any AI solution, we ask: Is this 
                  genuinely better than a simpler approach? Will it provide lasting value, not just demos?
                </p>
                <ul className="space-y-3">
                  {["Start with the problem, not the technology", "Prove value with prototypes before scaling", "Build for maintainability, not just accuracy", "Design for human oversight and control"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-sm text-primary font-medium uppercase tracking-wider">When AI Makes Sense</span>
                <h2 className="font-display text-foreground mt-4 mb-6">
                  Right tools, right problems
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  AI excels at pattern recognition, natural language, and processing scale that humans can't match. 
                  But it needs quality data, clear success metrics, and realistic expectations.
                </p>
                <ul className="space-y-3">
                  {["High-volume repetitive decisions", "Unstructured data (text, images, documents)", "Pattern recognition beyond human scale", "Augmenting (not replacing) human judgment"].map((item) => (
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

        {/* Use Cases */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Applications</span>
              <h2 className="font-display text-foreground mt-4">Common use cases</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl card-hover group"
                >
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <h3 className="font-display text-xl text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{useCase.description}</p>
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
              <h2 className="font-display text-foreground mt-4">What we build</h2>
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
              {/* Visual Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-surface-accent rounded-xl border border-border overflow-hidden flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">AI interface screenshot</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-surface-subtle rounded-lg border border-border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Accuracy dashboard</p>
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-surface-subtle rounded-lg border border-border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Workflow view</p>
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
                Ready to leverage AI?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Let's explore how AI can create real, lasting value for your business—without the hype.
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