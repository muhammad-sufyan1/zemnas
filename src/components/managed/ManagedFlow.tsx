import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  { label: "Assess", description: "Understand current systems and needs" },
  { label: "Stabilize", description: "Address immediate issues and risks" },
  { label: "Support", description: "Ongoing maintenance and monitoring" },
  { label: "Improve", description: "Continuous enhancement and optimization" },
];

export const ManagedFlow = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            How engagements work
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            A steady approach
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Flexible, transparent, and aligned with your pace. We adapt to what 
            your systems need, when they need it.
          </p>
        </div>

        <div className="relative">
          {/* Flow line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-border hidden md:block">
            <div
              className="h-full bg-foreground/25 transition-all duration-[2000ms] ease-out"
              style={{
                width: isVisible ? "100%" : "0%",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <div
                key={stage.label}
                className="relative text-center md:text-left"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 600ms ease-out",
                  transitionDelay: `${index * 200 + 300}ms`,
                }}
              >
                <div
                  className="w-4 h-4 rounded-full bg-background border-2 border-foreground/20 mx-auto md:mx-0 mb-6 relative z-10 transition-all duration-500"
                  style={{
                    borderColor: isVisible
                      ? "hsl(var(--foreground) / 0.5)"
                      : "hsl(var(--foreground) / 0.15)",
                    transitionDelay: `${index * 200 + 500}ms`,
                  }}
                />
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {stage.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
