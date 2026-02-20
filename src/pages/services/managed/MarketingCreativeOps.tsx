import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Palette, FileText, Image, Calendar, CheckCircle2, Quote, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import marketingDashboard from "@/assets/work/marketing-dashboard.jpg";
import brandProject from "@/assets/work/brand-project.jpg";
import videoCampaign from "@/assets/work/video-campaign.jpg";

const features = [
  {
    icon: FileText,
    title: "Content Updates",
    description: "Regular content refreshes, blog posts, and messaging updates across all channels.",
  },
  {
    icon: Image,
    title: "Creative Production",
    description: "On-demand graphics, videos, and visual assets for campaigns and social media.",
  },
  {
    icon: Calendar,
    title: "Campaign Management",
    description: "End-to-end campaign execution from planning to reporting.",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description: "Ensuring all materials align with your brand guidelines and voice.",
  },
];

const process = [
  { step: "01", title: "Request Submission", description: "Submit requests through your dedicated channel or portal." },
  { step: "02", title: "Prioritization", description: "We triage and schedule based on urgency and impact." },
  { step: "03", title: "Execution", description: "Our team delivers within agreed turnaround times." },
  { step: "04", title: "Review & Iterate", description: "Feedback loops ensure quality and alignment." },
];

const caseStudy = {
  client: "E-commerce Brand",
  industry: "Retail",
  title: "Scaling Creative Output 5x Without Adding Headcount",
  challenge: "A fast-growing e-commerce brand needed to produce 200+ creative assets monthly for product launches, seasonal campaigns, and social media—but their 2-person marketing team was overwhelmed.",
  solution: "We became their extended creative team, handling all production from social graphics to email templates to product photography editing. A dedicated request portal and weekly syncs kept everything aligned with their brand.",
  results: [
    { metric: "5x", label: "Creative output increase" },
    { metric: "48hr", label: "Average turnaround" },
    { metric: "92%", label: "First-pass approval rate" },
    { metric: "$180K", label: "Annual savings vs. hiring" },
  ],
  testimonial: {
    quote: "They feel like an extension of our team. The quality is consistent, turnaround is fast, and we finally have bandwidth to focus on strategy instead of production.",
    author: "VP of Marketing",
    company: "Growing E-commerce Brand",
  },
};

const galleryImages = [
  { src: marketingDashboard, alt: "Marketing campaign dashboard", caption: "Campaign performance tracking" },
  { src: brandProject, alt: "Brand visual system", caption: "Brand guideline implementation" },
  { src: videoCampaign, alt: "Video campaign production", caption: "Video content production" },
];

export default function MarketingCreativeOps() {
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
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-primary font-medium tracking-widest uppercase">Managed Service</span>
                </div>

                <h1 className="font-display text-foreground mb-6">
                  Marketing & Creative Operations
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Your always-on creative team. Ongoing campaign support, content production, and brand management—without the overhead of building an in-house team.
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
                    alt="Marketing operations dashboard"
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
                  Marketing needs outpace capacity
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Your team is stretched thin. Campaigns pile up, content gets stale, and quality suffers. Hiring is slow 
                  and expensive, but the work can't wait.
                </p>
                <ul className="space-y-3">
                  {["Request backlogs growing weekly", "Inconsistent brand execution", "Key people becoming bottlenecks", "Strategy time eaten by production"].map((item) => (
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
                  Embedded creative ops team
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We become an extension of your marketing team—handling production so your people can focus on strategy 
                  and results.
                </p>
                <ul className="space-y-3">
                  {["Dedicated creative resources on-demand", "Consistent brand execution every time", "Predictable costs, flexible capacity", "Weekly syncs keep everything aligned"].map((item) => (
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
              <span className="text-sm text-primary font-medium uppercase tracking-wider">What's Included</span>
              <h2 className="font-display text-foreground mt-4">Always-on support</h2>
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
        <section className="section-padding bg-surface-subtle">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Work</span>
              <h2 className="font-display text-foreground mt-4">Sample deliverables</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-border"
                >
                  <div className="aspect-[4/3]">
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
        <section className="section-padding bg-surface-subtle">
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
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-foreground mb-6">
                Ready for ongoing support?
              </h2>
              <p className="text-text-secondary mb-8 text-lg">
                Let's discuss how we can become an extension of your marketing team.
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
