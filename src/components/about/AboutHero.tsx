import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";
import ZemnasLogo from "@/components/ZemnasLogo";

interface Dot {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    const dots: Dot[] = [];
    const dotCount = 20;

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 4 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.3,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      dots.forEach((dot, i) => {
        dots.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - dot.x;
          const dy = other.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const opacity = (1 - dist / 180) * 0.12;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(215, 90%, 50%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      dots.forEach((dot) => {
        const pulse = Math.sin(time * dot.pulseSpeed * 50 + dot.pulsePhase) * 0.2 + 1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(215, 90%, 55%, ${dot.opacity * pulse})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        style={{ width: "100%", height: "100%" }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <ZemnasLogo width={80} height={80} className="mx-auto opacity-90" />
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1] transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We help businesses grow{" "}
            <span className="text-muted-foreground">through thoughtful digital systems.</span>
          </h1>

          <p
            className={`mt-8 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Zemnas is a digital partner for ambitious companies. We combine creative,
            marketing, software, and AI to build systems that scale.
          </p>

          <a
            href="https://www.linkedin.com/company/zemnas/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-8 text-sm text-primary hover:underline transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Linkedin className="w-4 h-4" />
            Follow us on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
