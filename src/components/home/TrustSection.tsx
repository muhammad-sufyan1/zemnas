import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Zemnas transformed our digital presence. Their strategic approach and attention to detail exceeded our expectations.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    avatar: "SC",
    rating: 5,
  },
  {
    quote:
      "Working with Zemnas felt like having an in-house team. They understood our vision and delivered beyond what we imagined.",
    author: "Marcus Johnson",
    role: "Founder, GrowthLab",
    avatar: "MJ",
    rating: 5,
  },
  {
    quote:
      "The AI integration they built saved us 40 hours a week. The ROI was immediate and continues to grow.",
    author: "Elena Rodriguez",
    role: "COO, DataFlow Inc",
    avatar: "ER",
    rating: 5,
  },
  {
    quote:
      "From creative to execution, Zemnas delivered a cohesive brand experience that truly resonates with our audience.",
    author: "David Park",
    role: "Marketing Director, Elevate",
    avatar: "DP",
    rating: 5,
  },
];

const clientLogos = [
  "TechCorp",
  "InnovateLab",
  "FutureScale",
  "DataDriven",
  "CloudFirst",
  "AIVentures",
];

export function TrustSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding-sm bg-secondary/40 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-wider font-medium">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="text-xl font-bold text-muted-foreground transition-all duration-300 cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            {/* Main testimonial card */}
            <div className="glass-premium rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-xl">
              {/* Quote decoration */}
              <Quote className="absolute top-6 left-6 sm:top-8 sm:left-8 w-10 h-10 sm:w-14 sm:h-14 text-primary/10" />
              
              {/* Testimonial content */}
              <div className="relative min-h-[280px] sm:min-h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 pt-8 sm:pt-0"
                  >
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4 sm:mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <blockquote className="text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed mb-8 sm:mb-10 font-light font-display">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/20 flex-shrink-0">
                        <span className="text-base sm:text-lg font-bold text-primary">
                          {testimonials[currentIndex].avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-base sm:text-lg">
                          {testimonials[currentIndex].author}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border/50">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goTo(index)}
                      className={cn(
                        "h-2 sm:h-2.5 rounded-full transition-all duration-500",
                        index === currentIndex 
                          ? "bg-primary w-8 sm:w-10" 
                          : "bg-muted-foreground/25 w-2 sm:w-2.5 hover:bg-muted-foreground/40"
                      )}
                    />
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={goPrev}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-border flex items-center justify-center hover:bg-secondary/60 hover:border-border/80 transition-all duration-300 group"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-border flex items-center justify-center hover:bg-secondary/60 hover:border-border/80 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
