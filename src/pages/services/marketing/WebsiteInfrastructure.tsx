import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Globe, Server, Shield, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Globe,
    title: "Marketing Websites",
    description: "Beautiful, fast websites designed to convert visitors and support your growth objectives.",
  },
  {
    icon: Server,
    title: "CMS & Integrations",
    description: "Content management systems and marketing tool integrations that work seamlessly together.",
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "Enterprise-grade security and uptime to protect your brand and customer data.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Lightning-fast load times and Core Web Vitals optimization for better rankings.",
  },
];

const caseStudy = {
  client: "Horizon Tech Partners",
  challenge: "A growing consulting firm's website was slow, outdated, and impossible to update without developer help.",
  solution: "We built a modern, blazing-fast website on a headless CMS with intuitive editing and automated deployment.",
  results: [
    { metric: "94", label: "Lighthouse score" },
    { metric: "3x", label: "Faster page loads" },
    { metric: "80%", label: "Fewer support tickets" },
  ],
  image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
};

const techStack = [
  { title: "Headless CMS", description: "Flexible content management", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" },
  { title: "Edge Hosting", description: "Global CDN delivery", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" },
  { title: "Analytics Stack", description: "Full-funnel tracking", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
];

const process = [
  { step: "01", title: "Discovery", description: "Understand your business goals, audience, and technical requirements." },
  { step: "02", title: "Architecture", description: "Plan the information architecture and technical stack." },
  { step: "03", title: "Design & Development", description: "Build a beautiful, performant website that scales." },
  { step: "04", title: "Launch & Support", description: "Deploy, monitor, and continuously improve." },
];

export default function WebsiteInfrastructure() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: stackRef, isVisible: stackVisible } = useScrollAnimation({ threshold: 0.1 });
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
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground tracking-widest uppercase">Marketing Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
                Website & Marketing Infrastructure
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Websites and platforms built to support growth, not just presence. Technical foundations that scale with your ambitions.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section ref={stackRef} className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className={cn(
              "mb-12 transition-all duration-700",
              stackVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}>
              <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
                Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                Modern foundations
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.title}
                  className={cn(
                    "group relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-500",
                    stackVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <img 
                    src={tech.image} 
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-foreground/20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-medium text-primary-foreground">{tech.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{tech.description}</p>
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
              Your website is your home base
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                Social platforms come and go. Algorithms change. But your website? That's real estate you own. It's where you control the narrative and the experience.
              </p>
              <p className="leading-relaxed">
                We build websites that are fast, secure, and easy to manage—because the best technology is technology you don't have to think about. It just works.
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
                Built for scale
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
              Ready to build your digital foundation?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create a website and infrastructure that grows with your business.
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
