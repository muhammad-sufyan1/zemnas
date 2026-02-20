import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Globe, Code, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const areas = [
  {
    icon: Palette,
    title: "Marketing & Creative Operations",
    description: "Ongoing campaign support, content updates, and creative production.",
    href: "/services/managed/marketing-creative-ops",
  },
  {
    icon: Globe,
    title: "Website & Platform Maintenance",
    description: "Regular updates, security patches, and performance optimization.",
    href: "/services/managed/website-maintenance",
  },
  {
    icon: Code,
    title: "Technical & Integration Support",
    description: "API maintenance, system monitoring, and incident response.",
    href: "/services/managed/technical-support",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Optimization & Improvements",
    description: "Continuous refinement based on analytics and user feedback.",
    href: "/services/managed/ongoing-optimization",
  },
];

export const ManagedSupportAreas = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            Areas of support
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            What we manage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Link
                to={area.href}
                key={area.title}
                className="group p-8 bg-background rounded-xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 500ms ease-out",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
