import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ProblemSolutionProps {
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    points: string[];
  };
}

export function ProblemSolution({ problem, solution }: ProblemSolutionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "grid md:grid-cols-2 gap-12 lg:gap-16 animate-on-scroll",
            isVisible && "visible"
          )}
        >
          {/* Problem */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-destructive/20 rounded-full" />
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
              {problem.title}
            </h2>
            <ul className="space-y-4">
              {problem.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-sm mt-0.5">
                    ✕
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/30 rounded-full" />
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
              {solution.title}
            </h2>
            <ul className="space-y-4">
              {solution.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                  style={{ transitionDelay: `${(index + problem.points.length) * 100}ms` }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm mt-0.5">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
