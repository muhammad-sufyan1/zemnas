import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const lines = [
  "We believe creative works best when it's clear, consistent, and built for how people actually consume content.",
  "Our focus is on visual systems that scale — not one-off assets.",
  "Every piece we create is designed to work harder, longer, and across more touchpoints.",
];

export function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.4 });

  return (
    <section ref={ref} className="py-16 md:py-20 px-6 bg-background relative overflow-hidden">
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

      <div className="max-w-3xl mx-auto relative z-10">
        <span
          className="text-sm text-muted-foreground tracking-widest uppercase mb-8 block"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 600ms ease-out",
          }}
        >
          Our philosophy
        </span>

        {lines.map((line, index) => (
          <p
            key={index}
            className={`text-xl md:text-2xl leading-relaxed mb-6 last:mb-0 ${
              index === lines.length - 1
                ? "text-muted-foreground"
                : "text-foreground"
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "all 600ms ease-out",
              transitionDelay: `${index * 150 + 100}ms`,
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
