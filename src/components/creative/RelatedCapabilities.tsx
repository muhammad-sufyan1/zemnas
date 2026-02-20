import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Code, Settings } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    id: 1,
    title: "Digital Marketing & Growth",
    description: "Data-driven strategies to amplify your creative assets and drive measurable results.",
    href: "/services/marketing",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Software & AI Solutions",
    description: "Custom applications and intelligent systems that bring your vision to life.",
    href: "/services/software",
    icon: Code,
  },
  {
    id: 3,
    title: "Managed Services",
    description: "Ongoing partnership for continuous creative support and strategic execution.",
    href: "/services/managed",
    icon: Settings,
  },
];

export function RelatedCapabilities() {
  const { ref, isVisible, getStaggerDelay } = useStaggeredAnimation(capabilities.length, {
    threshold: 0.2,
  });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Explore more
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Related capabilities
          </h2>
        </div>

        {/* Cards grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <Link
                key={cap.id}
                to={cap.href}
                className={`group block p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={getStaggerDelay(index)}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cap.description}
                </p>
                
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
