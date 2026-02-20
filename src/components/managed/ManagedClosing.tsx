import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";

export const ManagedClosing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const glowX = useTransform(x, (val) => val * 0.1);
  const glowY = useTransform(y, (val) => val * 0.1);

  return (
    <section className="section-padding relative overflow-hidden bg-surface-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto bg-card rounded-3xl p-12 md:p-16 overflow-hidden border border-border/50"
          style={{ boxShadow: "var(--shadow-xl)" }}
        >
          {/* Cursor-following glow */}
          <motion.div
            className="absolute w-80 h-80 rounded-full pointer-events-none"
            style={{
              x: glowX,
              y: glowY,
              background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Decorative element */}
          <motion.div
            className="absolute top-8 right-8"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <HeartHandshake className="w-10 h-10 text-primary/20" />
          </motion.div>

          <div className="relative z-10 text-center">
            <motion.h2
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Looking for <span className="gradient-text">steady, reliable</span> support?
            </motion.h2>

            <motion.p
              className="text-lg text-text-secondary mb-12 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We work quietly in the background so your team can focus on what matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 btn-premium group"
              >
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
