import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, MessageSquare } from "lucide-react";

export const MarketingBridgeSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              transition: "all 700ms ease-out",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Marketing works best when everything is aligned.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Creative, technology, and data need to work together. Our approach 
              integrates these disciplines to create cohesive growth systems.
            </p>

            <div className="space-y-4">
              <Link
                to="/services/creative"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <Palette className="w-5 h-5" />
                <span>Creative & Marketing Studio</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Talk to Zemnas</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
          </div>

          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(20px)",
              transition: "all 700ms ease-out 200ms",
            }}
          >
            <svg
              viewBox="0 0 400 300"
              className="w-full h-auto"
              fill="none"
            >
              {/* Marketing node */}
              <circle
                cx="200"
                cy="50"
                r="30"
                className="stroke-foreground/30"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="200"
                y="55"
                textAnchor="middle"
                className="fill-foreground/60 text-[10px]"
              >
                Marketing
              </text>

              {/* Creative node */}
              <circle
                cx="100"
                cy="200"
                r="30"
                className="stroke-foreground/30"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="100"
                y="205"
                textAnchor="middle"
                className="fill-foreground/60 text-[10px]"
              >
                Creative
              </text>

              {/* Technology node */}
              <circle
                cx="300"
                cy="200"
                r="30"
                className="stroke-foreground/30"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="300"
                y="205"
                textAnchor="middle"
                className="fill-foreground/60 text-[10px]"
              >
                Technology
              </text>

              {/* Results node */}
              <circle
                cx="200"
                cy="250"
                r="25"
                className="stroke-foreground/50"
                strokeWidth="1.5"
                fill="none"
              />
              <text
                x="200"
                y="255"
                textAnchor="middle"
                className="fill-foreground/70 text-[10px]"
              >
                Results
              </text>

              {/* Connecting lines */}
              <path
                d="M175 70 L120 175"
                className="stroke-foreground/20"
                strokeWidth="1"
                style={{
                  strokeDasharray: 150,
                  strokeDashoffset: isVisible ? 0 : 150,
                  transition: "stroke-dashoffset 1500ms ease-out 300ms",
                }}
              />
              <path
                d="M225 70 L280 175"
                className="stroke-foreground/20"
                strokeWidth="1"
                style={{
                  strokeDasharray: 150,
                  strokeDashoffset: isVisible ? 0 : 150,
                  transition: "stroke-dashoffset 1500ms ease-out 500ms",
                }}
              />
              <path
                d="M125 215 L175 240"
                className="stroke-foreground/20"
                strokeWidth="1"
                style={{
                  strokeDasharray: 100,
                  strokeDashoffset: isVisible ? 0 : 100,
                  transition: "stroke-dashoffset 1200ms ease-out 800ms",
                }}
              />
              <path
                d="M275 215 L225 240"
                className="stroke-foreground/20"
                strokeWidth="1"
                style={{
                  strokeDasharray: 100,
                  strokeDashoffset: isVisible ? 0 : 100,
                  transition: "stroke-dashoffset 1200ms ease-out 1000ms",
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
