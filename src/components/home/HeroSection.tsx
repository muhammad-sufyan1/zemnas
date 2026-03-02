import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Premium layered background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-subtle to-surface-accent" />
        
        {/* Mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{ background: "var(--gradient-mesh)" }}
        />

        {/* Radial glow */}
        <motion.div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
            y,
          }}
        />

        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] morph-bg"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[100px]"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>
      
      <motion.div style={{ opacity }} className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-surface-accent/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg shadow-primary/5">
                <motion.span 
                  className="w-2.5 h-2.5 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-foreground">Digital Systems That Scale</span>
                <Sparkles className="w-4 h-4 text-primary" />
              </span>
            </motion.div>

            {/* Main headline with stagger */}
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-foreground"
              >
                We build the systems behind
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-display gradient-text"
              >
                ambitious growth.
              </motion.h1>
            </div>

            {/* Value proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl"
            >
              Creative and marketing in one integrated approach, transforming how
              businesses connect, convert, and scale.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 w-full max-w-sm md:max-w-none mx-auto md:mx-0 flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-start gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 w-full md:w-auto group btn-premium"
              >
                <Link to="/work">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base px-8 h-14 w-full md:w-auto group glass border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5 fill-primary/20 group-hover:fill-primary-foreground/20" />
                  Start a Project
                </Link>
              </Button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 pt-8 border-t border-border/30"
            >
              <p className="text-sm text-text-muted mb-5">Trusted by forward-thinking companies</p>
              <div className="flex items-center gap-10">
                {["TechCorp", "InnovateLab", "FutureScale"].map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ opacity: 1 }}
                    className="text-lg font-semibold text-muted-foreground transition-opacity cursor-default"
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Premium Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 border-2 border-border/50 rounded-full flex justify-center pt-2.5"
        >
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroVisual() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Outer rotating rings */}
      <motion.div 
        className="absolute -inset-4 border border-primary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute -inset-12 border border-border/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Main container */}
      <motion.div 
        className="absolute inset-6 glass-premium rounded-3xl overflow-hidden"
        animate={{ rotate: [0, 0.5, 0, -0.5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-visual-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-visual-grid)" />
          </svg>
        </div>

        {/* Floating service cards */}
        <motion.div
          className="absolute top-6 left-5 w-48 glass rounded-2xl p-4 shadow-xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
              <div className="w-5 h-5 rounded bg-primary/50" />
            </div>
            <span className="text-sm font-semibold text-foreground">Creative Studio</span>
          </div>
          <div className="h-2.5 bg-primary/25 rounded-full w-4/5" />
          <div className="h-2 bg-muted rounded-full w-3/5 mt-2" />
        </motion.div>

        <motion.div
          className="absolute top-28 right-3 w-44 glass rounded-2xl p-4 shadow-xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-accent/60" />
            </div>
            <span className="text-xs font-semibold text-foreground">Marketing</span>
          </div>
          <div className="flex gap-1 h-16">
            {[45, 70, 40, 90, 60].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-primary/20 rounded-t self-end"
                style={{ height: `${h}%` }}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 1 + i * 0.12 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-24 left-6 w-52 glass rounded-2xl p-4 shadow-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-foreground">Software & AI</span>
            <span className="text-xs text-primary font-medium">Active</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.8, delay: 1.2 }}
              />
            </div>
            <span className="text-xs font-medium text-muted-foreground">78%</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 right-5 w-40 glass rounded-2xl p-3.5 shadow-xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-primary/60 rounded-full" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Managed</div>
              <div className="text-[11px] text-muted-foreground">Always-on</div>
            </div>
          </div>
        </motion.div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
          <motion.path
            d="M 100 80 Q 200 150 180 200 Q 160 260 130 300"
            stroke={isDark ? "hsl(215, 85%, 55%)" : "hsl(215, 90%, 42%)"}
            strokeWidth="1.5"
            fill="none"
            opacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
          />
          <motion.path
            d="M 300 120 Q 250 190 265 250 Q 280 310 310 350"
            stroke={isDark ? "hsl(215, 85%, 55%)" : "hsl(215, 90%, 42%)"}
            strokeWidth="1.5"
            fill="none"
            opacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
          />
        </svg>
      </motion.div>

      {/* Orbiting dots */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "-80px 0" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent/80 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "100px 0" }}
      />
    </div>
  );
}
