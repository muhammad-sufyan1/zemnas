import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessVisualizationProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export function ProcessVisualization({ title, subtitle, steps }: ProcessVisualizationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            {subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
            {title}
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Horizontal Progress Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border">
            <div
              className={cn(
                "h-full bg-primary transition-all duration-1000 ease-out",
                isVisible ? "w-full" : "w-0"
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "relative animate-on-scroll",
                  isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="relative z-10 w-12 h-12 mb-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg mx-auto lg:mx-0">
                  {step.number}
                </div>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-12 w-0.5 h-8 bg-border -translate-x-1/2" />
                )}

                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
