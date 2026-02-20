import { Link } from "react-router-dom";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

interface RelatedServicesProps {
  currentService: string;
  services: RelatedService[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  const { ref, isVisible, getStaggerDelay } = useStaggeredAnimation(services.length, {
    threshold: 0.1,
  });

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
            Related Services
          </h2>
          <p className="text-muted-foreground mt-2">
            Explore how our other capabilities can complement your goals
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.href}
                className={cn(
                  "group bg-card rounded-xl p-6 border border-border/50 hover-lift animate-on-scroll",
                  isVisible && "visible"
                )}
                style={getStaggerDelay(index)}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
