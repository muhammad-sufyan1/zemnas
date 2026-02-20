import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const capabilities = [
  { 
    id: 1, 
    label: "Explainers", 
    description: "Clear product narratives that simplify complex ideas into engaging visual stories.",
  },
  { 
    id: 2, 
    label: "Motion", 
    description: "Dynamic visual content that captures attention and communicates quickly.",
  },
  { 
    id: 3, 
    label: "Product UI", 
    description: "Interface design systems that balance beauty with usability.",
  },
  { 
    id: 4, 
    label: "Social", 
    description: "Platform-native content optimized for engagement and reach.",
  },
  { 
    id: 5, 
    label: "Campaigns", 
    description: "Integrated creative that works across channels and touchpoints.",
  },
];

export function CapabilitiesStrip() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          ref={ref}
          className={cn(
            "mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            What we create
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Creative capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <CapabilityCard key={cap.id} capability={cap} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ 
  capability, 
  index 
}: { 
  capability: typeof capabilities[0]; 
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "group p-6 bg-card border border-border rounded-xl transition-all duration-700 hover:border-primary/30",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm text-muted-foreground font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
        {capability.label}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {capability.description}
      </p>
    </div>
  );
}