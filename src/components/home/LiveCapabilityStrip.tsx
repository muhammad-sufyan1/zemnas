import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const currentProjects = [
  {
    label: "SaaS explainer for a growth-stage startup",
    gradient: "from-primary/30 via-primary/10 to-transparent",
    href: "/services/creative",
  },
  {
    label: "AI workflow automation for internal ops",
    gradient: "from-violet-500/30 via-violet-500/10 to-transparent",
    href: "/services/software",
  },
  {
    label: "Product UI redesign for scale readiness",
    gradient: "from-cyan-500/30 via-cyan-500/10 to-transparent",
    href: "/services/creative",
  },
  {
    label: "B2B demand system for a services company",
    gradient: "from-amber-500/30 via-amber-500/10 to-transparent",
    href: "/services/marketing",
  },
  {
    label: "Brand & content system for a new launch",
    gradient: "from-emerald-500/30 via-emerald-500/10 to-transparent",
    href: "/services/creative",
  },
  {
    label: "Analytics dashboard for data-driven teams",
    gradient: "from-rose-500/30 via-rose-500/10 to-transparent",
    href: "/services/software",
  },
];

export function LiveCapabilityStrip() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...currentProjects, ...currentProjects];

  return (
    <section className="py-12 lg:py-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          What we're building right now
        </h2>
        <p className="mt-2 text-muted-foreground max-w-lg">
          Current projects in motion across creative, marketing, and technology.
        </p>
      </div>

      {/* Infinite scrolling strip */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={cn(
            "flex gap-5 px-6 lg:px-8 animate-scroll-left",
            isPaused && "animation-paused"
          )}
          style={{
            width: "max-content",
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectTile
              key={index}
              project={project}
              index={index % currentProjects.length}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function ProjectTile({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: typeof currentProjects[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(false);

  // Listen for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    let time = index * 100;
    let animationId: number;

    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      type: "circle" | "rect" | "line";
    }> = [];

    for (let i = 0; i < 8; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 20 + Math.random() * 40,
        speed: 0.5 + Math.random() * 1,
        type: ["circle", "rect", "line"][Math.floor(Math.random() * 3)] as "circle" | "rect" | "line",
      });
    }

    // Theme-aware colors
    const strokeColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)";

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      shapes.forEach((shape, i) => {
        const offsetX = Math.sin(time * shape.speed + i) * 10;
        const offsetY = Math.cos(time * shape.speed + i) * 10;
        const x = shape.x + offsetX;
        const y = shape.y + offsetY;

        if (shape.type === "circle") {
          ctx.beginPath();
          ctx.arc(x, y, shape.size, 0, Math.PI * 2);
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else if (shape.type === "rect") {
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1;
          ctx.strokeRect(x - shape.size / 2, y - shape.size / 2, shape.size, shape.size);
        } else {
          ctx.beginPath();
          ctx.moveTo(x - shape.size, y);
          ctx.lineTo(x + shape.size, y);
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [index, isDark]);

  return (
    <Link
      to={project.href}
      className={cn(
        "relative flex-shrink-0 w-72 md:w-80 aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-500",
        "border border-border/50",
        isHovered ? "scale-[1.02] border-primary/30" : ""
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Gradient background */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", project.gradient)} />
      
      {/* Abstract canvas animation */}
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 w-full h-full transition-opacity duration-500",
          isHovered ? "opacity-40" : "opacity-20"
        )}
        style={{ width: "100%", height: "100%" }}
      />

      {/* Blurred UI mockup shapes */}
      <div className={cn(
        "absolute inset-4 transition-all duration-500",
        isHovered ? "blur-sm opacity-60" : "blur-md opacity-40"
      )}>
        <div className="w-full h-3 bg-foreground/10 rounded mb-2" />
        <div className="w-3/4 h-3 bg-foreground/10 rounded mb-4" />
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="aspect-square bg-foreground/10 rounded" />
          <div className="aspect-square bg-foreground/10 rounded" />
          <div className="aspect-square bg-foreground/10 rounded" />
        </div>
        <div className="w-full h-8 bg-foreground/10 rounded" />
      </div>

      {/* Label */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent transition-all duration-500",
        isHovered ? "opacity-100" : "opacity-80"
      )}>
        <p className={cn(
          "text-sm font-medium text-foreground transition-all duration-300",
          isHovered ? "translate-y-0" : "translate-y-1"
        )}>
          {project.label}
        </p>
      </div>
    </Link>
  );
}
