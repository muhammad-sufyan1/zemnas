import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stages = [
  { id: "awareness", label: "Awareness", description: "Reach and visibility" },
  { id: "consideration", label: "Consideration", description: "Engagement and interest" },
  { id: "conversion", label: "Conversion", description: "Action and commitment" },
  { id: "retention", label: "Retention", description: "Loyalty and growth" },
];

export const MarketingSystemVisual = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-28 px-6 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.03]" />
        
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="max-w-2xl mb-20">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            Effective marketing isn't a collection of tactics.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            It's a system where messaging, channels, and technology work together 
            to create sustainable growth.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 hidden md:block">
            <div
              className="h-full bg-foreground/30 transition-all duration-[2000ms] ease-out"
              style={{
                width: isVisible ? "100%" : "0%",
                transformOrigin: "left",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className="relative text-center transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 300 + 500}ms`,
                }}
              >
                <div className="relative z-10 bg-background px-4 py-6">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-foreground/20 mx-auto mb-4 flex items-center justify-center transition-all duration-500"
                    style={{
                      borderColor: isVisible ? "hsl(var(--foreground) / 0.4)" : "hsl(var(--foreground) / 0.1)",
                      transitionDelay: `${index * 300 + 800}ms`,
                    }}
                  >
                    <span className="text-sm font-medium text-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {stage.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stage.description}
                  </p>
                </div>

                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 -translate-y-1/2 z-20">
                    <svg viewBox="0 0 16 16" className="w-full h-full text-foreground/30">
                      <path
                        d="M6 4l4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transition: "opacity 500ms ease-out",
                          transitionDelay: `${index * 300 + 1000}ms`,
                        }}
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
