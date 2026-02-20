import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, MousePointerClick, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const modules = [
  {
    icon: Target,
    title: "Demand & Lead Generation",
    description: "B2B-focused campaigns designed to create consistent inbound opportunities through targeted content, paid media, and strategic outreach.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "/services/marketing/demand-generation",
  },
  {
    icon: MousePointerClick,
    title: "Funnels & Landing Pages",
    description: "Conversion-driven experiences aligned with messaging and audience intent. Every element designed to guide visitors toward action.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    href: "/services/marketing/funnels-landing-pages",
  },
  {
    icon: Globe,
    title: "Website & Marketing Infrastructure",
    description: "Websites and platforms built to support growth, not just presence. Technical foundations that scale with your ambitions.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    href: "/services/marketing/website-infrastructure",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuous refinement through data, feedback, and iteration. We measure what matters and improve what works.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    href: "/services/marketing/performance-optimization",
  },
];

export const MarketingModules = () => {
  return (
    <section className="py-24 md:py-28 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            What we build & manage
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Systems designed for growth
          </h2>
        </div>

        <div className="space-y-20">
          {modules.map((module, index) => (
            <ModuleItem key={module.title} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ModuleItem = ({
  module,
  index,
}: {
  module: (typeof modules)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;
  const Icon = module.icon;

  return (
    <Link
      to={module.href}
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group",
        isEven ? "" : "lg:flex-row-reverse"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`order-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateX(0)"
            : `translateX(${isEven ? "-30px" : "30px"})`,
          transition: "all 700ms ease-out 200ms",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Icon className={cn(
            "w-5 h-5 transition-colors duration-300",
            isHovered ? "text-primary" : "text-muted-foreground"
          )} />
          <span className="text-sm text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className={cn(
          "text-2xl md:text-3xl font-light mb-4 transition-colors duration-300",
          isHovered ? "text-primary" : "text-foreground"
        )}>
          {module.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {module.description}
        </p>
        <span className={cn(
          "inline-flex items-center gap-2 text-sm font-medium transition-all duration-300",
          isHovered ? "text-primary gap-3" : "text-muted-foreground"
        )}>
          Learn more
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>

      <div
        className={`order-1 ${isEven ? "lg:order-2" : "lg:order-1"}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(1.02)",
          transition: "all 600ms ease-out",
        }}
      >
        <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden relative">
          <img
            src={module.image}
            alt={module.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          {/* Hover overlay */}
          <div className={cn(
            "absolute inset-0 bg-primary/20 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )} />
        </div>
      </div>
    </Link>
  );
};
