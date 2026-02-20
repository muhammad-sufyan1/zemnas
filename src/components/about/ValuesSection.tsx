import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Target, Users, Zap, Heart, LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Target,
    title: "Strategy First",
    description: "We believe every solution should start with understanding the problem deeply before writing a single line of code.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We see ourselves as an extension of your team, invested in your success as much as you are.",
  },
  {
    icon: Zap,
    title: "Pragmatic Innovation",
    description: "We embrace new technology when it solves real problems, not just because it is new.",
  },
  {
    icon: Heart,
    title: "Craft & Care",
    description: "Every detail matters. We take pride in the quality of our work and the relationships we build.",
  },
];

function ValueCard({ value, index }: { value: Value; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "p-6 bg-card border border-border rounded-xl transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <value.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
    </div>
  );
}

export function ValuesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold text-foreground mb-12 text-center transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            What We Believe
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
