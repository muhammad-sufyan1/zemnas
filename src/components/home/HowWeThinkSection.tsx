import { motion } from "framer-motion";
import { Lightbulb, Target, Wrench, Handshake } from "lucide-react";

const principles = [
  {
    icon: Lightbulb,
    title: "Strategy before execution",
    description:
      "Every project begins with understanding your goals, audience, and market. We align every decision with measurable outcomes.",
    step: "01",
  },
  {
    icon: Target,
    title: "Design aligned with performance",
    description:
      "Beautiful isn't enough. Our creative work is built to convert, engage, and drive the metrics that matter to your business.",
    step: "02",
  },
  {
    icon: Wrench,
    title: "Technology with real use cases",
    description:
      "We don't build for the sake of innovation. Every tool, system, and integration solves a specific problem you face.",
    step: "03",
  },
  {
    icon: Handshake,
    title: "Long-term partnership mindset",
    description:
      "We're not here for one project. We build relationships that grow with your business and evolve with your needs.",
    step: "04",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function HowWeThinkSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-subtle/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 bg-primary/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <motion.span 
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our Philosophy
            </motion.span>
            <h2 className="font-display text-foreground max-w-xl">
              How Zemnas <span className="gradient-text">thinks</span>
            </h2>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
              Our approach is built on principles that guide every project from discovery to delivery.
            </p>
          </motion.div>

          {/* Principles with premium styling */}
          <div className="relative">
            {/* Animated gradient line */}
            <motion.div 
              className="hidden lg:block absolute left-8 top-12 bottom-12 w-[2px]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ originY: 0 }}
            >
              <div className="h-full bg-gradient-to-b from-primary via-primary/50 to-primary/10 rounded-full" />
            </motion.div>

            <motion.div 
              className="space-y-8 lg:space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  variants={itemVariants}
                  className="group flex gap-6 lg:gap-12 relative"
                >
                  {/* Step indicator */}
                  <div className="relative flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-card border-2 border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-surface-accent transition-all duration-500 shadow-md"
                      whileHover={{ scale: 1.08, rotate: 5 }}
                    >
                      <principle.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <motion.span 
                      className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground text-xs font-bold rounded-lg flex items-center justify-center shadow-lg shadow-primary/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      {principle.step}
                    </motion.span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pt-1">
                    <div className="p-6 lg:p-8 rounded-2xl bg-card/50 border border-border/50 group-hover:bg-card group-hover:border-border group-hover:shadow-lg transition-all duration-500">
                      <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {principle.title}
                      </h3>
                      <p className="mt-4 text-text-secondary leading-relaxed text-lg">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
