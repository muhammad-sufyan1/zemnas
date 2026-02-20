import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FutureReadySection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    interface Node {
      x: number;
      y: number;
      radius: number;
      pulsePhase: number;
      vx: number;
      vy: number;
    }

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const nodes: Node[] = [];
    const nodeCount = 20;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 2.5 + Math.random() * 3.5,
        pulsePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let time = 0;
    let animationId: number;

    const primaryHue = 215;
    const getColor = (opacity: number) => 
      isDark ? `hsla(${primaryHue}, 75%, 60%, ${opacity})` : `hsla(${primaryHue}, 90%, 42%, ${opacity})`;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Move nodes slowly
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      // Draw connections with gradient
      nodes.forEach((node, i) => {
        nodes.forEach((node2, j) => {
          if (i >= j) return;
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const opacity = (1 - dist / 200) * 0.2;
            
            const gradient = ctx.createLinearGradient(node.x, node.y, node2.x, node2.y);
            gradient.addColorStop(0, getColor(opacity));
            gradient.addColorStop(0.5, getColor(opacity * 1.5));
            gradient.addColorStop(1, getColor(opacity));
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Animated pulse along connection
            const pulsePos = (Math.sin(time * 2 + i * 0.3) + 1) / 2;
            const px = node.x + (node2.x - node.x) * pulsePos;
            const py = node.y + (node2.y - node.y) * pulsePos;
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = getColor(opacity * 3);
            ctx.fill();
          }
        });
      });

      // Draw nodes with glow
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 1.5 + node.pulsePhase) * 0.35 + 1;
        
        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * pulse * 4
        );
        glowGradient.addColorStop(0, getColor(0.3));
        glowGradient.addColorStop(1, getColor(0));
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 4, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = getColor(0.6);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [isDark]);

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-subtle via-background to-surface-accent" />
      
      {/* Neural network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Decorative gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] morph-bg"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-8 border border-primary/20 shadow-lg shadow-primary/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            AI & Innovation
          </motion.span>

          <h2 className="font-display text-foreground">
            Built for <span className="gradient-text">what's next</span>
          </h2>

          <motion.p 
            className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The landscape is shifting. AI, automation, and intelligent systems are redefining 
            what's possible. Zemnas helps you navigate this evolution, integrating cutting-edge 
            technology that delivers real business value today while preparing you for tomorrow.
          </motion.p>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-base h-14 px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 group glass"
            >
              <Link to="/services/software">
                Explore AI & Software
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
