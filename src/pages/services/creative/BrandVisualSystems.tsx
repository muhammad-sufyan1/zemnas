import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Palette, FileText, Layers, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Compass,
    title: "Brand Strategy",
    description: "Defining your positioning, values, and personality before a single pixel is designed.",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Logo, color palette, typography, and design elements that capture your essence.",
  },
  {
    icon: Layers,
    title: "Design System",
    description: "Comprehensive component library for consistent application everywhere.",
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    description: "Clear documentation that empowers anyone to use your brand correctly.",
  },
];

const caseStudy = {
  client: "Meridian Health",
  challenge: "A healthcare startup needed to project trust and innovation while standing apart from clinical competitors.",
  solution: "Created a warm, human brand system with a distinctive mark, calming color palette, and approachable typography.",
  results: [
    { metric: "50+", label: "Brands built" },
    { metric: "92%", label: "Recognition rate" },
    { metric: "3mo", label: "Full delivery" },
  ],
  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
};

const brandElements = [
  { title: "Logo System", description: "Primary, secondary, and icon variations", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop" },
  { title: "Color Palette", description: "Primary, secondary, and extended colors", image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=600&h=400&fit=crop" },
  { title: "Typography", description: "Font families and hierarchy rules", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&h=400&fit=crop" },
  { title: "Iconography", description: "Custom icon set matching brand style", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop" },
];

const process = [
  { step: "01", title: "Discovery & Research", description: "Understanding your business, audience, and competitive landscape." },
  { step: "02", title: "Strategy Development", description: "Defining positioning, personality, and key brand attributes." },
  { step: "03", title: "Visual Exploration", description: "Exploring creative directions before committing to a path." },
  { step: "04", title: "Identity Design", description: "Crafting the logo, colors, typography, and core elements." },
  { step: "05", title: "System Build", description: "Expanding into a full design system with guidelines." },
];

export default function BrandVisualSystems() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: elementsRef, isVisible: elementsVisible } = useScrollAnimation({ threshold: 0.1 });
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
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground tracking-widest uppercase">Creative Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Brand Visual Systems
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Comprehensive visual identities that scale from logo to full brand guidelines, ensuring consistency everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Elements */}
        <section ref={elementsRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className={cn(
              "mb-12 transition-all duration-700",
              elementsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
                Deliverables
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                Complete brand toolkit
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandElements.map((element, index) => (
                <div 
                  key={element.title}
                  className={cn(
                    "group relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-500",
                    elementsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={element.image} 
                    alt={element.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-foreground/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-medium text-primary-foreground">{element.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{element.description}</p>
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
              More than a logo
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                A brand is a promise. It's the feeling people get when they encounter you. A visual system is how that promise becomes tangible—how abstract values become concrete experiences.
              </p>
              <p className="leading-relaxed">
                We don't just design logos. We build systems that work across every touchpoint: from the favicon to the billboard, from the app icon to the trade show booth. Consistency builds trust, and trust builds brands.
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
                Full brand development
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
              Ready to build your brand?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create a visual identity that captures who you are.
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
