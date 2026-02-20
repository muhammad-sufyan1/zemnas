import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, TrendingUp, BarChart3, Target, Lightbulb, CheckCircle2, Quote, LineChart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import marketingDashboard from "@/assets/work/marketing-dashboard.jpg";
import ecommercePlatform from "@/assets/work/ecommerce-platform.jpg";

const features = [
  {
    icon: BarChart3,
    title: "Analytics Review",
    description: "Regular deep dives into your data to identify opportunities and issues.",
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Continuous testing and refinement to improve key metrics.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Recommendations",
    description: "Proactive suggestions based on industry trends and your data.",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Monthly reporting with clear insights and action items.",
  },
];

const process = [
  { step: "01", title: "Baseline Analysis", description: "Establish current performance metrics and benchmarks." },
  { step: "02", title: "Opportunity Mapping", description: "Identify highest-impact areas for improvement." },
  { step: "03", title: "Test & Learn", description: "Implement changes and measure results rigorously." },
  { step: "04", title: "Scale Wins", description: "Double down on what works and iterate on what doesn't." },
];

const optimizationAreas = [
  {
    icon: LineChart,
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization.",
  },
  {
    icon: Target,
    title: "Conversion Rate Optimization",
    description: "Systematic A/B testing and user experience improvements to maximize conversions.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description: "Speed optimization, infrastructure tuning, and scalability improvements.",
  },
];

const caseStudy = {
  client: "SaaS Company",
  industry: "B2B Software",
  title: "47% Increase in Trial-to-Paid Conversion",
  challenge: "A B2B SaaS company had strong traffic but poor conversion. Their trial signup rate was decent, but most trial users never became paying customers. They suspected onboarding issues but lacked the analytics to prove it.",
  solution: "We implemented comprehensive funnel analytics, identified the exact drop-off points, and ran systematic tests on the onboarding flow. Small changes to timing, messaging, and feature introduction led to significant improvements.",
  results: [
    { metric: "47%", label: "Trial-to-paid increase" },
    { metric: "23%", label: "Reduction in churn" },
    { metric: "3.2x", label: "ROI on optimization" },
    { metric: "$890K", label: "Additional annual revenue" },
  ],
  testimonial: {
    quote: "We had hunches about what was wrong, but Zemnas gave us the data to prove it and the expertise to fix it. The ROI was immediate and substantial.",
    author: "Head of Growth",
    company: "B2B SaaS Company",
  },
};

const galleryImages = [
  { src: marketingDashboard, alt: "Analytics dashboard", caption: "Comprehensive performance analytics" },
  { src: ecommercePlatform, alt: "Conversion optimization", caption: "A/B testing and optimization workflow" },
];

export default function OngoingOptimization() {
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
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium tracking-widest uppercase">Managed Service</span>
                </div>

                <h1 className="font-display text-foreground mb-6">
                  Ongoing Optimization & Improvements
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Continuous improvement isn't a project—it's a practice. Data-driven optimization and strategic refinements that compound into significant results over time.
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
                    src={marketingDashboard} 
                    alt="Performance optimization dashboard"
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
                  Good enough isn't good enough
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Your website works, your campaigns run—but are they performing at their potential? Without 
                  continuous optimization, you're leaving money on the table.
                </p>
                <ul className="space-y-3">
                  {["No time for systematic testing", "Decisions based on gut, not data", "Performance plateau after launch", "Competitors continuously improving"].map((item) => (
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
                  Systematic improvement cycles
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We bring discipline to optimization—regular analysis, hypothesis-driven testing, and 
                  measurable improvements month after month.
                </p>
                <ul className="space-y-3">
                  {["Monthly analytics reviews and recommendations", "Prioritized test roadmaps", "Rapid experimentation cycles", "Clear reporting on what's working"].map((item) => (
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

        {/* Optimization Areas */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Data & AI Solutions</span>
              <h2 className="font-display text-foreground mt-4">Transform with data-driven insights</h2>
              <p className="text-text-secondary mt-4 max-w-2xl">
                Leverage advanced analytics and AI to uncover opportunities and drive continuous improvement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {optimizationAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-2xl card-hover group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{area.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{area.description}</p>
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
              <h2 className="font-display text-foreground mt-4">Continuous improvement</h2>
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
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Approach</span>
              <h2 className="font-display text-foreground mt-4">Data-driven decisions</h2>
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
                Ready for continuous growth?
              </h2>
              <p className="text-text-secondary mb-8 text-lg">
                Let's discuss how ongoing optimization can improve your results.
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
