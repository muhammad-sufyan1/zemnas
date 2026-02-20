import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Settings } from "lucide-react";

export const SoftwareBridgeSection = () => {
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
              Software rarely stands alone.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our work often supports marketing, operations, and internal teams. 
              We design with integration in mind from the start.
            </p>

            <div className="space-y-4">
              <Link
                to="/services/marketing"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Digital Marketing & Growth</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
              <Link
                to="/services/managed"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <Settings className="w-5 h-5" />
                <span>Managed Services</span>
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
              {/* Central software node */}
              <circle
                cx="200"
                cy="150"
                r="40"
                className="stroke-foreground/40"
                strokeWidth="1.5"
                fill="none"
              />
              <text
                x="200"
                y="155"
                textAnchor="middle"
                className="fill-foreground/70 text-[11px]"
              >
                Software
              </text>

              {/* Marketing node */}
              <circle
                cx="80"
                cy="80"
                r="25"
                className="stroke-foreground/25"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="80"
                y="85"
                textAnchor="middle"
                className="fill-foreground/50 text-[9px]"
              >
                Marketing
              </text>

              {/* Operations node */}
              <circle
                cx="320"
                cy="80"
                r="25"
                className="stroke-foreground/25"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="320"
                y="85"
                textAnchor="middle"
                className="fill-foreground/50 text-[9px]"
              >
                Operations
              </text>

              {/* Teams node */}
              <circle
                cx="80"
                cy="220"
                r="25"
                className="stroke-foreground/25"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="80"
                y="225"
                textAnchor="middle"
                className="fill-foreground/50 text-[9px]"
              >
                Teams
              </text>

              {/* Data node */}
              <circle
                cx="320"
                cy="220"
                r="25"
                className="stroke-foreground/25"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="320"
                y="225"
                textAnchor="middle"
                className="fill-foreground/50 text-[9px]"
              >
                Data
              </text>

              {/* Connecting lines */}
              <path
                d="M165 125 L100 95"
                className="stroke-foreground/15"
                strokeWidth="1"
                style={{
                  strokeDasharray: 100,
                  strokeDashoffset: isVisible ? 0 : 100,
                  transition: "stroke-dashoffset 1200ms ease-out 400ms",
                }}
              />
              <path
                d="M235 125 L300 95"
                className="stroke-foreground/15"
                strokeWidth="1"
                style={{
                  strokeDasharray: 100,
                  strokeDashoffset: isVisible ? 0 : 100,
                  transition: "stroke-dashoffset 1200ms ease-out 600ms",
                }}
              />
              <path
                d="M165 175 L100 205"
                className="stroke-foreground/15"
                strokeWidth="1"
                style={{
                  strokeDasharray: 100,
                  strokeDashoffset: isVisible ? 0 : 100,
                  transition: "stroke-dashoffset 1200ms ease-out 800ms",
                }}
              />
              <path
                d="M235 175 L300 205"
                className="stroke-foreground/15"
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
