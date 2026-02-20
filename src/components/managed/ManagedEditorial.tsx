import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ManagedEditorial = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.4 });

  return (
    <section ref={ref} className="py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <span
          className="text-sm text-muted-foreground tracking-widest uppercase mb-8 block"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 600ms ease-out",
          }}
        >
          When it makes sense
        </span>

        <p
          className="text-xl md:text-2xl text-foreground leading-relaxed mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "all 600ms ease-out 100ms",
          }}
        >
          Managed services are ideal for teams who value consistency, reliability, 
          and a long-term partner who understands their systems.
        </p>

        <p
          className="text-lg text-muted-foreground leading-relaxed"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "all 600ms ease-out 200ms",
          }}
        >
          Whether you're scaling quickly, maintaining complex infrastructure, or 
          simply want to focus on your core work — having a dedicated team in the 
          background makes a difference.
        </p>
      </div>
    </section>
  );
};
