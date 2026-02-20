import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function GrowthBridgeSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
              Beyond creative
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-tight">
              Creative does not live in isolation.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Everything we design is built to support marketing, growth, and product adoption. 
              Our creative work integrates seamlessly with your broader business objectives.
            </p>
            <Link 
              to="/services/marketing"
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              Explore Digital Marketing & Growth
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Animated Diagram */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* SVG Diagram */}
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full"
                fill="none"
              >
                {/* Nodes */}
                <circle 
                  cx="100" 
                  cy="200" 
                  r="50" 
                  className="fill-primary/10 stroke-primary stroke-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: "0.3s",
                  }}
                />
                <text 
                  x="100" 
                  y="205" 
                  textAnchor="middle" 
                  className="fill-foreground text-sm font-medium"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: "0.4s",
                  }}
                >
                  Creative
                </text>

                <circle 
                  cx="250" 
                  cy="120" 
                  r="45" 
                  className="fill-accent/10 stroke-accent stroke-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: "0.5s",
                  }}
                />
                <text 
                  x="250" 
                  y="125" 
                  textAnchor="middle" 
                  className="fill-foreground text-xs font-medium"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: "0.6s",
                  }}
                >
                  Marketing
                </text>

                <circle 
                  cx="250" 
                  cy="280" 
                  r="45" 
                  className="fill-accent/10 stroke-accent stroke-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: "0.7s",
                  }}
                />
                <text 
                  x="250" 
                  y="285" 
                  textAnchor="middle" 
                  className="fill-foreground text-xs font-medium"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: "0.8s",
                  }}
                >
                  Growth
                </text>

                <circle 
                  cx="350" 
                  cy="200" 
                  r="40" 
                  className="fill-primary/20 stroke-primary stroke-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: "0.9s",
                  }}
                />
                <text 
                  x="350" 
                  y="205" 
                  textAnchor="middle" 
                  className="fill-foreground text-xs font-medium"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                    transitionDelay: "1s",
                  }}
                >
                  Results
                </text>

                {/* Connecting lines */}
                <path 
                  d="M150 185 Q200 150 205 125"
                  className="stroke-border stroke-2"
                  strokeDasharray="200"
                  style={{
                    strokeDashoffset: isVisible ? 0 : 200,
                    transition: "stroke-dashoffset 1s ease-out",
                    transitionDelay: "0.5s",
                  }}
                />
                <path 
                  d="M150 215 Q200 250 205 275"
                  className="stroke-border stroke-2"
                  strokeDasharray="200"
                  style={{
                    strokeDashoffset: isVisible ? 0 : 200,
                    transition: "stroke-dashoffset 1s ease-out",
                    transitionDelay: "0.6s",
                  }}
                />
                <path 
                  d="M295 130 Q320 160 310 195"
                  className="stroke-border stroke-2"
                  strokeDasharray="200"
                  style={{
                    strokeDashoffset: isVisible ? 0 : 200,
                    transition: "stroke-dashoffset 1s ease-out",
                    transitionDelay: "0.8s",
                  }}
                />
                <path 
                  d="M295 270 Q320 240 310 205"
                  className="stroke-border stroke-2"
                  strokeDasharray="200"
                  style={{
                    strokeDashoffset: isVisible ? 0 : 200,
                    transition: "stroke-dashoffset 1s ease-out",
                    transitionDelay: "0.9s",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
