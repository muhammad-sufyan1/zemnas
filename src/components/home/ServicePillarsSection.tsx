import { Link } from "react-router-dom";
import { Palette, TrendingUp, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Palette,
    title: "Creative Studio",
    subtitle: "Design & Production",
    description:
      "Video, motion graphics, brand identity, and visual storytelling that captures attention and communicates your value.",
    href: "/services/creative",
    capabilities: ["Explainer Videos", "Motion Design", "Brand Systems", "UI/UX"],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "violet",
  },
  {
    icon: TrendingUp,
    title: "Marketing Engine",
    subtitle: "Growth & Demand",
    description:
      "B2B marketing strategies, conversion funnels, and performance campaigns that drive measurable pipeline growth.",
    href: "/services/marketing",
    capabilities: ["Demand Gen", "Funnels", "SEO/SEM", "Analytics"],
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    accentColor: "emerald",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function ServicePillarsSection() {
  return (
    <section className="section-padding bg-surface-subtle relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Capabilities
          </motion.span>
          <h2 className="font-display text-foreground">
            Two pillars of <span className="gradient-text">growth</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            An integrated approach where creative and marketing work together to
            build momentum and measurable results.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const glowX = useTransform(x, (val) => val * 0.15);
  const glowY = useTransform(y, (val) => val * 0.15);

  return (
    <Link
      ref={cardRef}
      to={service.href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col h-full p-8 lg:p-10 bg-card border border-border/50 rounded-3xl card-premium"
    >
      {/* Dynamic glow that follows cursor */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          x: glowX,
          y: glowY,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Gradient background on hover */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="relative z-10">
        {/* Icon & Title Row */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <motion.div 
              className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-all duration-500"
              whileHover={{ scale: 1.08, rotate: 5 }}
            >
              <service.icon className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-text-muted mt-1.5 font-medium">{service.subtitle}</p>
          </div>
          <motion.div
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed mb-8 text-lg">
          {service.description}
        </p>

        {/* Capabilities Tags */}
        <div className="flex flex-wrap gap-2.5 mt-auto">
          {service.capabilities.map((cap, i) => (
            <motion.span 
              key={cap}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-4 py-1.5 text-sm font-medium bg-secondary text-text-secondary rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
            >
              {cap}
            </motion.span>
          ))}
        </div>
      </div>
    </Link>
  );
}
