import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceOfferingsProps {
  title: string;
  subtitle: string;
  offerings: Offering[];
}

export function ServiceOfferings({ title, subtitle, offerings }: ServiceOfferingsProps) {
  const { ref, isVisible, getStaggerDelay } = useStaggeredAnimation(offerings.length, {
    threshold: 0.1,
  });

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            {subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
            {title}
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <div
                key={index}
                className={cn(
                  "group bg-card rounded-xl p-6 lg:p-8 border border-border/50 hover-lift animate-on-scroll",
                  isVisible && "visible"
                )}
                style={getStaggerDelay(index)}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {offering.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
