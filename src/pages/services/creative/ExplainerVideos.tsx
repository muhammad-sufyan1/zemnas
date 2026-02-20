import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Play, Film, Mic, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Target,
    title: "Clear Messaging",
    description: "We distill complex ideas into simple, memorable narratives that resonate with your audience.",
  },
  {
    icon: Film,
    title: "Professional Production",
    description: "High-quality visuals, smooth animations, and polished editing that reflects your brand.",
  },
  {
    icon: Mic,
    title: "Voice & Sound",
    description: "Professional voiceover and sound design that enhances engagement and retention.",
  },
  {
    icon: Clock,
    title: "Optimized Length",
    description: "Videos crafted to the ideal length for your platform and audience attention spans.",
  },
];

const caseStudy = {
  client: "TechFlow Solutions",
  challenge: "A complex B2B SaaS product with a 12-step onboarding process was causing 40% user drop-off.",
  solution: "We created a 90-second explainer video that simplified the value proposition and key workflows.",
  results: [
    { metric: "85%", label: "Viewer retention" },
    { metric: "52%", label: "Reduction in drop-off" },
    { metric: "3.2x", label: "Demo requests increase" },
  ],
  image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=800&fit=crop",
};

const process = [
  { step: "01", title: "Discovery & Strategy", description: "Understanding your product, audience, and the key message that needs to land." },
  { step: "02", title: "Script & Storyboard", description: "Crafting the narrative arc and visualizing every frame before production." },
  { step: "03", title: "Production", description: "Recording, animating, and assembling with meticulous attention to detail." },
  { step: "04", title: "Review & Refine", description: "Iterating based on feedback until every second serves its purpose." },
];

export default function ExplainerVideos() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: caseRef, isVisible: caseVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <Header />
      <main>
        {/* Hero with Video Preview */}
        <section ref={heroRef} className="pt-32 pb-20 px-6 bg-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.02]" />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
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

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={cn(
                "transition-all duration-700",
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground tracking-widest uppercase">Creative Service</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                  Explainer & Product Videos
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Clear, concise videos designed to explain products, features, and workflows without overwhelming the viewer.
                </p>
              </div>

              {/* Video Preview */}
              <div className={cn(
                "relative aspect-video rounded-2xl overflow-hidden bg-muted transition-all duration-700 delay-300",
                heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop" 
                  alt="Video production" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section ref={storyRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "transition-all duration-700",
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                The power of visual storytelling
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  In a world where attention is the scarcest resource, explainer videos cut through the noise. They transform complex ideas into digestible narratives that stick.
                </p>
                <p className="leading-relaxed">
                  We've seen it time and again: a well-crafted 60-second video can communicate what pages of documentation cannot. It's not about dumbing things down—it's about meeting people where they are and guiding them to understanding.
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
                  {caseStudy.results.map((result, index) => (
                    <div 
                      key={result.label}
                      className="text-center p-4 bg-muted/50 rounded-xl"
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
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
                Every detail matters
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
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Ready to tell your story?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create a video that makes your product impossible to ignore.
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
