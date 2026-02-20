import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionCTAProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  icon?: LucideIcon;
  variant?: "inline" | "card" | "minimal";
  className?: string;
}

export function SectionCTA({
  title,
  description,
  buttonText = "Learn More",
  buttonLink = "/contact",
  icon: Icon,
  variant = "card",
  className,
}: SectionCTAProps) {
  if (variant === "inline") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn("flex items-center justify-between gap-4 p-6 rounded-2xl bg-surface-accent border border-border/50", className)}
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          )}
          <div>
            <h4 className="font-semibold text-foreground">{title}</h4>
            {description && <p className="text-sm text-text-secondary mt-0.5">{description}</p>}
          </div>
        </div>
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group whitespace-nowrap"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    );
  }

  if (variant === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn("text-center", className)}
      >
        <p className="text-text-secondary mb-4">{title}</p>
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    );
  }

  // Card variant (default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative p-8 md:p-10 rounded-3xl overflow-hidden card-premium",
        "bg-gradient-to-br from-surface-accent via-card to-card border border-border/50",
        className
      )}
    >
      {/* Decorative gradient orb */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        {Icon && (
          <motion.div 
            className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Icon className="w-7 h-7 text-primary" />
          </motion.div>
        )}

        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {description && (
          <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
            {description}
          </p>
        )}

        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium btn-premium group/btn"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500" />
    </motion.div>
  );
}
