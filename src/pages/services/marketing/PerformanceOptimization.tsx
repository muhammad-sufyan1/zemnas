import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, TrendingUp, LineChart, TestTube, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: LineChart,
    title: "Analytics & Tracking",
    description: "Comprehensive measurement setup to understand what's working and what needs improvement.",
  },
  {
    icon: TestTube,
    title: "Conversion Rate Optimization",
    description: "Systematic testing and experimentation to maximize the value of your traffic.",
  },
  {
    icon: TrendingUp,
    title: "Performance Reporting",
    description: "Clear, actionable reports that connect marketing activities to business outcomes.",
  },
  {
    icon: Repeat,
    title: "Continuous Improvement",
    description: "Ongoing optimization cycles that compound gains over time.",
  },
];

const caseStudy = {
  client: "Meridian SaaS",
  challenge: "A mature SaaS company had hit a plateau—their marketing was generating leads but conversion rates were declining quarter over quarter.",
  solution: "We implemented a full CRO program with heat mapping, user recordings, A/B testing, and funnel analysis to identify and fix friction points.",
  results: [
    { metric: "89%", label: "Conversion increase" },
    { metric: "52", label: "Tests run" },
    { metric: "$1.8M", label: "Revenue impact" },
  ],
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
};

const metrics = [
  { title: "Conversion Rate", value: "+89%", description: "Average lift across clients" },
  { title: "Revenue per Visitor", value: "+156%", description: "Through optimization" },
  { title: "Tests Launched", value: "200+", description: "Experiments run annually" },
];

const process = [
  { step: "01", title: "Audit & Baseline", description: "Analyze current performance and establish benchmarks." },
  { step: "02", title: "Identify Opportunities", description: "Find the highest-impact areas for improvement." },
  { step: "03", title: "Test & Learn", description: "Run experiments and gather data on what works." },
  { step: "04", title: "Scale What Works", description: "Double down on winning strategies and tactics." },
];

export default function PerformanceOptimization() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: metricsRef, isVisible: metricsVisible } = useScrollAnimation({ threshold: 0.1 });
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

          <div className="max-w-4xl mx-auto relative z-10">
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

            <div className={cn(
              "transition-all duration-700",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground tracking-widest uppercase">Marketing Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Performance Optimization
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Continuous refinement through data, feedback, and iteration. We measure what matters and improve what works.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section ref={metricsRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <div 
                  key={metric.title}
                  className={cn(
                    "text-center p-8 bg-background rounded-2xl transition-all duration-500",
                    metricsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-semibold text-primary mb-2">{metric.value}</div>
                  <div className="text-lg font-medium text-foreground mb-1">{metric.title}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
              Small changes, big impact
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                Most companies leave money on the table. Not through bad strategy, but through small friction points that compound across thousands of visitors.
              </p>
              <p className="leading-relaxed">
                We believe in the compound effect of optimization. A 10% improvement here, a 15% lift there—these add up. Over time, the same traffic generates significantly more revenue. That's the power of systematic improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section ref={caseRef} className="py-20 px-6 bg-muted/30">
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
                    <div key={result.label} className="text-center p-4 bg-background rounded-xl">
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
        <section ref={featuresRef} className="py-20 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className={cn(
              "mb-12 transition-all duration-700",
              featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
                What's included
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                Data-driven growth
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={cn(
                    "p-6 bg-muted/50 border border-border rounded-xl transition-all duration-500",
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
        <section className="py-20 px-6 bg-muted/30">
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
        <section className="py-20 px-6 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Ready to optimize your marketing?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's turn your data into actionable insights and measurable growth.
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
