import { useEffect, useRef, useState } from "react";

interface Dot {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const ManagedHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    // Create scattered dots
    const dots: Dot[] = [];
    const dotCount = 25;

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 4 + Math.random() * 8,
        opacity: 0.3 + Math.random() * 0.4,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // Draw connections
      dots.forEach((dot, i) => {
        dots.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - dot.x;
          const dy = other.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const opacity = (1 - dist / 200) * 0.15;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(215, 90%, 50%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw dots with pulsing
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
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          isVisible ? "opacity-60" : "opacity-0"
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">Managed Services</span>
        </div>

        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-8 leading-[1.1] transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ongoing support for
          <br />
          <span className="text-muted-foreground">evolving digital systems.</span>
        </h1>

        <p 
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Managed services designed to keep your digital, marketing, and technology 
          operations running smoothly.
        </p>

        <div 
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent mx-auto" />
          <span className="text-xs text-muted-foreground/60 tracking-widest uppercase mt-2 block">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};
