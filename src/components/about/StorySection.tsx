import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function StorySection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Zemnas was founded with a simple belief: businesses deserve partners who understand
              both the creative and technical sides of digital growth.
            </p>
            <p>
              Too often, companies work with agencies that excel at design but struggle with
              implementation, or technical teams that build powerful systems but miss the
              human element. We bridge that gap.
            </p>
            <p>
              Today, we work with companies across the globe, from early-stage startups to
              established enterprises, helping them build digital systems that actually work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
