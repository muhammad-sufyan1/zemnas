import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";

interface FloatingCTAProps {
  title?: string;
  buttonText?: string;
  showAfterScroll?: number; // percentage of page scrolled
  hideBeforeFooter?: boolean;
}

export function FloatingCTA({
  title = "Ready to get started?",
  buttonText = "Let's Talk",
  showAfterScroll = 30,
  hideBeforeFooter = true,
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const nearFooter = hideBeforeFooter && scrollPercentage > 85;
      
      setIsVisible(scrollPercentage > showAfterScroll && !nearFooter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll, hideBeforeFooter, isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="glass-premium rounded-2xl p-4 pr-12 flex items-center gap-4 shadow-2xl">
            {/* Animated gradient border */}
            <div 
              className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden pointer-events-none"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent, hsl(var(--primary) / 0.3))",
              }}
            />
            
            <div className="relative z-10 flex items-center gap-4">
              {/* Pulsing indicator */}
              <div className="relative">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
              </div>

              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {title}
              </span>

              <Button asChild size="sm" className="btn-premium whitespace-nowrap">
                <Link to="/contact" className="flex items-center gap-2">
                  {buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Dismiss button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-secondary/80 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
