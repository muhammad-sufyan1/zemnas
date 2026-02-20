import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

export const SoftwareHero = () => {
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

    const nodes: Node[] = [];
    const nodeCount = 15;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 4 + Math.random() * 4,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 0.02;

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1;

        // Draw connections with gradient
        nodes.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const opacity = (1 - dist / 180) * 0.2;
            
            // Create gradient along the line
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
            gradient.addColorStop(0, `hsla(215, 90%, 45%, ${opacity})`);
            gradient.addColorStop(0.5, `hsla(215, 90%, 55%, ${opacity * 1.5})`);
            gradient.addColorStop(1, `hsla(215, 90%, 45%, ${opacity})`);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Animated data pulse along connection
            const pulsePos = (Math.sin(time * 2 + i * 0.5) + 1) / 2;
            const px = node.x + dx * pulsePos;
            const py = node.y + dy * pulsePos;
            
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(215, 90%, 55%, ${opacity * 2})`;
            ctx.fill();
          }
        });

        // Draw node with pulsing glow
        const pulse = Math.sin(time + node.pulsePhase) * 0.3 + 1;
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * pulse * 3
        );
        glowGradient.addColorStop(0, `hsla(215, 90%, 50%, 0.2)`);
        glowGradient.addColorStop(1, `hsla(215, 90%, 50%, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Main node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(215, 90%, 45%, 0.4)";
        ctx.fill();
        ctx.strokeStyle = "hsla(215, 90%, 55%, 0.6)";
        ctx.lineWidth = 2;
        ctx.stroke();
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
          isVisible ? "opacity-70" : "opacity-0"
        }`}
      />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">Software & AI</span>
        </div>

        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-8 leading-[1.1] transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Intelligent software,
          <br />
          <span className="text-muted-foreground">designed for real-world use.</span>
        </h1>

        <p 
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We build custom software, AI solutions, and automations that integrate 
          smoothly into how teams actually work.
        </p>

        <div 
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent mx-auto animate-bounce" />
          <span className="text-xs text-muted-foreground/60 tracking-widest uppercase mt-2 block">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};
