import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const engagements = [
  {
    title: "B2B Campaign",
    outcome: "Sustained pipeline growth through integrated content and paid strategy.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
  },
  {
    title: "Funnel Redesign",
    outcome: "Simplified user journey resulting in clearer conversion paths.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Website Rebuild",
    outcome: "Modern infrastructure supporting marketing automation and personalization.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
];

export const MarketingEngagements = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-4 block">
            Selected work
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Quiet proof
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagements.map((engagement, index) => (
            <div
              key={engagement.title}
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
                  src={engagement.image}
                  alt={engagement.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {engagement.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {engagement.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
