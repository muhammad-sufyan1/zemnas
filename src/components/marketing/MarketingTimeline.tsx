import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  { label: "Discover", description: "Understand goals, audience, and landscape" },
  { label: "Align", description: "Define strategy and success metrics" },
  { label: "Launch", description: "Execute campaigns and initiatives" },
  { label: "Measure", description: "Track performance and gather insights" },
  { label: "Improve", description: "Optimize based on real data" },
];

export const MarketingTimeline = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            How we work
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Ongoing, not linear
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Marketing doesn't end at launch. Our process is built for iteration 
            and learning, adapting to what the data tells us.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-border hidden md:block">
            <div
              className="h-full bg-foreground/40 transition-all duration-[2500ms] ease-out"
              style={{
                width: isVisible ? "100%" : "0%",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {stages.map((stage, index) => (
              <div
                key={stage.label}
                className="relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 600ms ease-out",
                  transitionDelay: `${index * 200 + 300}ms`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full bg-background border-2 border-foreground/30 mb-6 relative z-10 transition-all duration-500"
                  style={{
                    borderColor: isVisible
                      ? "hsl(var(--foreground) / 0.6)"
                      : "hsl(var(--foreground) / 0.2)",
                    transitionDelay: `${index * 200 + 500}ms`,
                  }}
                />
                <h3 className="text-lg font-medium text-foreground mb-2">
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
