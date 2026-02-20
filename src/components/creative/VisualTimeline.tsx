import { useRef, useEffect, useState } from "react";

const timelineSteps = [
  {
    id: 1,
    label: "Understand",
    description: "Deep dive into your brand, goals, and audience.",
  },
  {
    id: 2,
    label: "Shape",
    description: "Define creative direction and visual language.",
  },
  {
    id: 3,
    label: "Build",
    description: "Execute with precision and attention to detail.",
  },
  {
    id: 4,
    label: "Refine",
    description: "Polish and perfect every element.",
  },
  {
    id: 5,
    label: "Extend",
    description: "Scale and adapt across all touchpoints.",
  },
];

export function VisualTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if in view
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsInView(true);
        
        // Calculate progress through section
        const sectionProgress = Math.max(0, Math.min(1, 
          (windowHeight * 0.5 - rect.top) / (rect.height * 0.8)
        ));
        setProgress(sectionProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStep = Math.min(
    Math.floor(progress * timelineSteps.length) + 1,
    timelineSteps.length
  );

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-surface-subtle overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            How we work
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Our creative process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-border hidden md:block">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {timelineSteps.map((step, index) => {
              const isActive = index < activeStep;
              const isCurrent = index === activeStep - 1;

              return (
                <div 
                  key={step.id}
                  className={`relative transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Dot */}
                  <div 
                    className={`w-4 h-4 rounded-full border-2 mb-6 transition-all duration-300 ${
                      isActive 
                        ? "bg-primary border-primary scale-125" 
                        : "bg-background border-border"
                    } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}
                  />

                  {/* Content */}
                  <h3 
                    className={`text-lg font-medium mb-2 transition-colors duration-300 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
