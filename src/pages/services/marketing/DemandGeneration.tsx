import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target, Users, Mail, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Target,
    title: "Targeted Campaigns",
    description: "Precision-targeted ad campaigns across LinkedIn, Google, and programmatic channels.",
  },
  {
    icon: Users,
    title: "Account-Based Marketing",
    description: "Personalized outreach strategies for high-value accounts and decision-makers.",
  },
  {
    icon: Mail,
    title: "Email Sequences",
    description: "Automated nurture sequences that guide prospects through the buying journey.",
  },
  {
    icon: BarChart3,
    title: "Lead Scoring",
    description: "Intelligent scoring systems to prioritize the leads most likely to convert.",
  },
];

const caseStudy = {
  client: "Nexus Enterprise Solutions",
  challenge: "A B2B software company was spending heavily on ads but seeing diminishing returns with low-quality leads flooding the sales team.",
  solution: "We rebuilt their demand engine with precise ICP targeting, multi-touch nurture sequences, and lead scoring that prioritized buying intent.",
  results: [
    { metric: "340%", label: "Pipeline increase" },
    { metric: "62%", label: "Lower CAC" },
    { metric: "4.2x", label: "ROI on ad spend" },
  ],
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
};

const process = [
  { step: "01", title: "Audience Research", description: "Deep dive into your ideal customer profile and buying behavior." },
  { step: "02", title: "Channel Strategy", description: "Identify the most effective channels for reaching your audience." },
  { step: "03", title: "Campaign Build", description: "Create compelling content and set up targeting parameters." },
  { step: "04", title: "Optimize & Scale", description: "Continuously refine based on performance data." },
];

export default function DemandGeneration() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: caseRef, isVisible: caseVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="pt-32 pb-20 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02]" />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <Link 
              to="/services/marketing" 
              className={cn(
                "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8",
                heroVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Marketing
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={cn(
                "transition-all duration-700",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground tracking-widest uppercase">Marketing Service</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                  Demand & Lead Generation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  B2B-focused campaigns designed to create consistent inbound opportunities through targeted content, paid media, and strategic outreach.
                </p>
              </div>

              <div className={cn(
                "aspect-video rounded-2xl overflow-hidden transition-all duration-700 delay-300",
                heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" 
                  alt="Demand generation dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section ref={storyRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "transition-all duration-700",
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                The pipeline problem
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Most B2B companies have the same challenge: they need more qualified leads, but traditional marketing feels like shouting into the void.
                </p>
                <p className="leading-relaxed">
                  We've learned that demand generation isn't about more volume—it's about better precision. The right message, to the right person, at the right moment in their buying journey. That's what turns marketing spend into pipeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section ref={caseRef} className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className={cn(
              "mb-12 transition-all duration-700",
              caseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
                Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                {caseStudy.client}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={cn(
                "aspect-video rounded-2xl overflow-hidden transition-all duration-700",
                caseVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.client} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={cn(
                "transition-all duration-700 delay-200",
                caseVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}>
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-primary uppercase tracking-wide mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-primary uppercase tracking-wide mb-2">The Solution</h3>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.results.map((result) => (
                    <div key={result.label} className="text-center p-4 bg-muted/50 rounded-xl">
                      <div className="text-2xl md:text-3xl font-semibold text-primary mb-1">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section ref={featuresRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className={cn(
              "mb-12 transition-all duration-700",
              featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
                What's included
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                Full-funnel demand engine
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    "p-6 bg-card border border-border rounded-xl transition-all duration-500",
                    featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12">
              How we work
            </h2>
            <div className="space-y-8">
              {process.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Ready to generate demand?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can build a lead generation system that works for your business.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
