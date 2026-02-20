import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  { label: "Understand", description: "Define the problem clearly" },
  { label: "Architect", description: "Design the right solution" },
  { label: "Build", description: "Develop with precision" },
  { label: "Test", description: "Validate thoroughly" },
  { label: "Deploy", description: "Launch with confidence" },
  { label: "Improve", description: "Iterate based on use" },
];

export const SoftwareTimeline = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            Our process
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Thoughtful engineering
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We prioritize clarity and stability at every stage. Each phase builds 
            on the last, reducing risk and ensuring quality.
          </p>
        </div>

        <div className="relative">
          {/* Progress bar */}
          <div className="h-1 bg-muted rounded-full mb-12 overflow-hidden">
            <div
              className="h-full bg-foreground/30 rounded-full transition-all duration-[3000ms] ease-out"
              style={{
                width: isVisible ? "100%" : "0%",
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stages.map((stage, index) => (
              <div
                key={stage.label}
                className="text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 600ms ease-out",
                  transitionDelay: `${index * 150 + 200}ms`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full border border-foreground/20 mx-auto mb-4 flex items-center justify-center transition-all duration-500"
                  style={{
                    borderColor: isVisible
                      ? "hsl(var(--foreground) / 0.4)"
                      : "hsl(var(--foreground) / 0.1)",
                    transitionDelay: `${index * 150 + 400}ms`,
                  }}
                >
                  <span className="text-xs font-medium text-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">
                  {stage.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
