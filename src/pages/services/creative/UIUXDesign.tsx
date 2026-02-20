import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Layout, Users, Paintbrush, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "User Research",
    description: "Deep understanding of your users' needs, behaviors, and pain points.",
  },
  {
    icon: Layout,
    title: "Interface Design",
    description: "Beautiful, intuitive interfaces that guide users naturally to their goals.",
  },
  {
    icon: Smartphone,
    title: "Responsive Systems",
    description: "Designs that work flawlessly across every device and screen size.",
  },
  {
    icon: Paintbrush,
    title: "Design Systems",
    description: "Scalable component libraries that maintain consistency as you grow.",
  },
];

const caseStudy = {
  client: "CloudSync Pro",
  challenge: "A file management SaaS had powerful features but users couldn't find them. Support tickets were mounting.",
  solution: "Complete UI redesign focused on progressive disclosure, intuitive navigation, and contextual help.",
  results: [
    { metric: "40%", label: "Conversion lift" },
    { metric: "-65%", label: "Support tickets" },
    { metric: "4.8", label: "App store rating" },
  ],
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
};

const showcase = [
  { title: "Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
  { title: "Mobile App", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop" },
  { title: "Web Platform", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
];

const process = [
  { step: "01", title: "Research & Discovery", description: "Understanding users, competitors, and business objectives." },
  { step: "02", title: "Information Architecture", description: "Organizing content and flows for intuitive navigation." },
  { step: "03", title: "Wireframing", description: "Low-fidelity layouts to validate structure before visual design." },
  { step: "04", title: "Visual Design", description: "High-fidelity mockups that bring the experience to life." },
  { step: "05", title: "Prototyping & Testing", description: "Interactive prototypes validated with real users." },
];

export default function UIUXDesign() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: showcaseRef, isVisible: showcaseVisible } = useScrollAnimation({ threshold: 0.1 });
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
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground tracking-widest uppercase">Creative Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                UI/UX Design
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Thoughtful interface design that balances beauty with usability, creating products people love to use.
              </p>
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section ref={showcaseRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className={cn(
              "mb-12 transition-all duration-700",
              showcaseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                Design that works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {showcase.map((item, index) => (
                <div 
                  key={item.title}
                  className={cn(
                    "group relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-500",
                    showcaseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="font-medium">{item.title}</h3>
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
              Design with empathy
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                Great UI/UX isn't about making things look pretty. It's about understanding the humans who will use what we create—their goals, frustrations, and the contexts they work in.
              </p>
              <p className="leading-relaxed">
                We believe every click should feel intentional. Every screen should answer the question "what do I do next?" without requiring thought. That's the invisible magic of good design: it disappears, leaving only the experience.
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
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                End-to-end design
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
              Ready to design something great?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create an experience your users will love.
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
