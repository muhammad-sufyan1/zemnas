import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function FinalCTASection() {
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

  const glowX = useTransform(x, (val) => val * 0.08);
  const glowY = useTransform(y, (val) => val * 0.08);

  return (
    <section className="section-padding-lg relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-subtle via-surface-accent/50 to-surface-subtle" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 morph-bg"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
        animate={{ 
          scale: [1.15, 1, 1.15],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-primary via-primary/95 to-primary-glow rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl">
            {/* Cursor-following glow */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                x: glowX,
                y: glowY,
                background: "radial-gradient(circle, hsl(0 0% 100% / 0.2) 0%, transparent 70%)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 opacity-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-white/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-white/20 rounded-full"
              />
            </div>

            <motion.div
              className="absolute top-10 left-10"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Sparkles className="w-10 h-10 text-white/20" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm font-semibold text-white/80 uppercase tracking-wider"
              >
                Ready to Start?
              </motion.span>

              <motion.h2 
                className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let's see if Zemnas is the right fit
              </motion.h2>
              
              <motion.p 
                className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                No pressure. No obligations. Just a conversation about your goals 
                and how we might help you achieve them.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                className="mt-12 flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-2xl mx-auto px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base h-14 bg-white text-primary hover:bg-white/90 group shadow-xl btn-premium flex-1 sm:min-w-[220px] justify-center"
                >
                  <Link to="/contact">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book a Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  className="text-base h-14 bg-white text-primary hover:bg-white/90 group shadow-xl btn-premium flex-1 sm:min-w-[220px] justify-center"
                >
                  <a href="mailto:contact@zemnas.com">
                    <Mail className="mr-2 w-5 h-5" />
                    contact@zemnas.com
                  </a>
                </Button>
              </motion.div>

              {/* Trust note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 text-sm text-white/60"
              >
                ✓ Typically respond within 24 hours
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
