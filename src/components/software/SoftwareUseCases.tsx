import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const useCases = [
  {
    title: "AI Workflow Automation",
    description: "Intelligent systems that handle repetitive tasks and surface insights.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  },
  {
    title: "Custom Internal Tools",
    description: "Purpose-built applications designed around your team's specific needs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Data Processing Systems",
    description: "Pipelines that transform raw data into actionable information.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
  },
];

export const SoftwareUseCases = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            Examples
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Use cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 600ms ease-out",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="aspect-[3/2] bg-muted rounded-lg overflow-hidden mb-6">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
