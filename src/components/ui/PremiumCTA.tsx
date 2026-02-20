import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface PremiumCTAProps {
  variant?: "default" | "gradient" | "dark" | "glass";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  showSecondaryButton?: boolean;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export function PremiumCTA({
  variant = "default",
  title = "Ready to transform your digital presence?",
  subtitle = "Let's discuss how we can help you achieve your goals.",
  buttonText = "Start a Conversation",
  buttonLink = "/contact",
  showSecondaryButton = false,
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "/work",
}: PremiumCTAProps) {
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

  const backgrounds = {
    default: "bg-surface-subtle",
    gradient: "bg-gradient-to-br from-primary via-primary/90 to-primary-glow",
    dark: "bg-foreground",
    glass: "glass-premium",
  };

  const textColors = {
    default: "text-foreground",
    gradient: "text-primary-foreground",
    dark: "text-background",
    glass: "text-foreground",
  };

  const subtitleColors = {
    default: "text-text-secondary",
    gradient: "text-primary-foreground/80",
    dark: "text-background/80",
    glass: "text-text-secondary",
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`relative ${backgrounds[variant]} rounded-3xl p-10 md:p-16 lg:p-20 overflow-hidden`}
          style={{
            boxShadow: variant === "gradient" || variant === "dark" 
              ? "var(--shadow-2xl)" 
              : "var(--shadow-lg)",
          }}
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute w-96 h-96 rounded-full pointer-events-none"
            style={{
              x: glowX,
              y: glowY,
              background: variant === "gradient" || variant === "dark"
                ? "radial-gradient(circle, hsl(0 0% 100% / 0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-current rounded-full opacity-20"
              style={{ color: variant === "default" || variant === "glass" ? "hsl(var(--primary))" : "hsl(0 0% 100%)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-current rounded-full opacity-15"
              style={{ color: variant === "default" || variant === "glass" ? "hsl(var(--primary))" : "hsl(0 0% 100%)" }}
            />
          </div>

          {/* Sparkles decoration */}
          <motion.div
            className="absolute top-8 left-8"
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Sparkles 
              className="w-8 h-8 opacity-20" 
              style={{ color: variant === "default" || variant === "glass" ? "hsl(var(--primary))" : "hsl(0 0% 100%)" }}
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className={`font-display text-3xl md:text-4xl lg:text-5xl ${textColors[variant]} leading-tight`}
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`mt-6 text-lg md:text-xl ${subtitleColors[variant]} max-w-xl mx-auto`}
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className={`text-base px-8 h-13 group btn-premium ${
                  variant === "gradient" || variant === "dark"
                    ? "bg-background text-foreground hover:bg-background/90"
                    : ""
                }`}
              >
                <Link to={buttonLink}>
                  <Calendar className="mr-2 w-5 h-5" />
                  {buttonText}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              {showSecondaryButton && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`text-base px-8 h-13 ${
                    variant === "gradient" || variant === "dark"
                      ? "border-background/30 text-background hover:bg-background/10"
                      : ""
                  }`}
                >
                  <Link to={secondaryButtonLink}>
                    {secondaryButtonText}
                  </Link>
                </Button>
              )}
            </motion.div>

            {/* Trust indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`mt-8 text-sm ${
                variant === "gradient" || variant === "dark"
                  ? "text-background/60"
                  : "text-text-muted"
              }`}
            >
              ✓ No commitment required · Response within 24 hours
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
