import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Smartphone, TrendingUp, Share2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Smartphone,
    title: "Platform-Native",
    description: "Content designed specifically for TikTok, Reels, and Stories—not repurposed from other formats.",
  },
  {
    icon: TrendingUp,
    title: "Trend-Aware",
    description: "We stay on top of what's working right now, not what worked last month.",
  },
  {
    icon: Share2,
    title: "Share-Worthy",
    description: "Content crafted to earn organic reach through shares and saves.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick production cycles to capitalize on trending moments.",
  },
];

const caseStudy = {
  client: "Urban Botanics",
  challenge: "A plant care brand needed to reach Gen Z and Millennials who weren't engaging with traditional content.",
  solution: "We created a 30-video TikTok series featuring quick plant tips, satisfying watering clips, and relatable plant parent humor.",
  results: [
    { metric: "2.1M", label: "Total views" },
    { metric: "340%", label: "Follower growth" },
    { metric: "18%", label: "Engagement rate" },
  ],
  image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop",
};

const contentTypes = [
  { title: "Educational Tips", description: "Quick how-tos and valuable nuggets", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=600&fit=crop" },
  { title: "Behind the Scenes", description: "Authentic glimpses into your world", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=600&fit=crop" },
  { title: "Trend Participation", description: "Timely takes on viral moments", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600&fit=crop" },
];

const process = [
  { step: "01", title: "Content Strategy", description: "Defining your voice, themes, and posting cadence for social." },
  { step: "02", title: "Concept Batching", description: "Developing multiple ideas that can be produced efficiently." },
  { step: "03", title: "Production Sprint", description: "Fast, focused creation sessions that maintain quality." },
  { step: "04", title: "Optimize & Iterate", description: "Learning from performance to improve future content." },
];

export default function ShortFormContent() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: typesRef, isVisible: typesVisible } = useScrollAnimation({ threshold: 0.1 });
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
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <Link 
              to="/services/creative" 
              className={cn(
                "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8",
                heroVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Creative Studio
            </Link>

            <div className={cn(
              "transition-all duration-700",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground tracking-widest uppercase">Creative Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Short-form Content
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Scroll-stopping social content optimized for TikTok, Reels, and Stories that drives engagement and shares.
              </p>
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section ref={typesRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className={cn(
              "mb-12 transition-all duration-700",
              typesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
                Content Formats
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                Made for the feed
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contentTypes.map((type, index) => (
                <div 
                  key={type.title}
                  className={cn(
                    "group relative rounded-xl overflow-hidden transition-all duration-500",
                    typesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[9/16]">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-medium text-primary-foreground mb-1">{type.title}</h3>
                    <p className="text-sm text-primary-foreground/80">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
              The scroll is the stage
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                You have less than a second. That's the reality of short-form content. But in that fraction of time, you can spark curiosity, evoke emotion, or deliver value that stops the scroll.
              </p>
              <p className="leading-relaxed">
                We don't just make videos shorter. We rethink content from the ground up for vertical screens and thumb-driven attention spans. Every hook is tested, every frame is intentional, every second earns its place.
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
                Built for social
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
              Our process
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
              Ready to stop the scroll?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create content that makes your brand impossible to scroll past.
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
