import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Cpu, Workflow, Plug } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored platforms designed around your workflows and constraints. Built for scale, maintainability, and real-world use.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    href: "/services/software/custom-development",
  },
  {
    icon: Cpu,
    title: "AI-Powered Tools",
    description: "Applied AI for automation, intelligence, and efficiency — not novelty. Solutions that enhance human decision-making.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    href: "/services/software/ai-powered-tools",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Reducing manual work through smart, maintainable systems. Automation that adapts as your processes evolve.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
    href: "/services/software/workflow-automation",
  },
  {
    icon: Plug,
    title: "Integration & APIs",
    description: "Connecting tools, platforms, and data into cohesive systems. Breaking silos while maintaining security.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    href: "/services/software/integration-apis",
  },
];

export const SoftwareModules = () => {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            What we build
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Thoughtful technology
          </h2>
        </div>

        <div className="space-y-24">
          {modules.map((module, index) => (
            <ModuleItem key={module.title} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ModuleItem = ({
  module,
  index,
}: {
  module: (typeof modules)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>({ threshold: 0.2 });
  const isEven = index % 2 === 0;
  const Icon = module.icon;

  return (
    <Link
      to={module.href}
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group cursor-pointer`}
    >
      <div
        className={`order-2 ${isEven ? "lg:order-1" : "lg:order-2"}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateX(0)"
            : `translateX(${isEven ? "-30px" : "30px"})`,
          transition: "all 700ms ease-out 200ms",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-foreground/5 rounded-lg group-hover:bg-foreground/10 transition-colors">
            <Icon className="w-5 h-5 text-foreground/60" />
          </div>
          <span className="text-sm text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4 group-hover:text-primary transition-colors">
          {module.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {module.description}
        </p>
      </div>

      <div
        className={`order-1 ${isEven ? "lg:order-2" : "lg:order-1"}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(1.02)",
          transition: "all 600ms ease-out",
        }}
      >
        <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </Link>
  );
};
