import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  title: string;
  description: string;
}

export function ServiceCTA({ title, description }: ServiceCTAProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center animate-on-scroll",
            isVisible && "visible"
          )}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors text-lg"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
