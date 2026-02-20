import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  accentColor?: string;
}

export function ServiceHero({ title, subtitle, description, icon: Icon }: ServiceHeroProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto text-center animate-on-scroll",
            isVisible && "visible"
          )}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-primary/10">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
