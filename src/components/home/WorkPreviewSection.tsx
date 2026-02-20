import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

import brandProjectImg from "@/assets/work/brand-project.jpg";
import ecommercePlatformImg from "@/assets/work/ecommerce-platform.jpg";
import marketingDashboardImg from "@/assets/work/marketing-dashboard.jpg";
import aiPlatformImg from "@/assets/work/ai-platform.jpg";

const workItems = [
  {
    title: "Complete Brand Transformation",
    category: "Creative",
    description: "Cohesive brand system across every touchpoint",
    image: brandProjectImg,
    hasVideo: true,
  },
  {
    title: "E-commerce Platform Rebuild",
    category: "Software",
    description: "Faster storefront + smarter recommendations",
    image: ecommercePlatformImg,
    hasVideo: false,
  },
  {
    title: "B2B Lead Generation Engine",
    category: "Marketing",
    description: "Predictable pipeline with measurable growth",
    image: marketingDashboardImg,
    hasVideo: false,
  },
  {
    title: "AI Operations Platform",
    category: "Technology",
    description: "Automation that saves teams hours every week",
    image: aiPlatformImg,
    hasVideo: true,
  },
];

export function WorkPreviewSection() {
  const { ref, isVisible, getStaggerDelay } = useStaggeredAnimation<HTMLDivElement>(
    workItems.length
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 lg:py-16 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Selected work
            </h2>
            <p className="mt-2 text-muted-foreground">
              A glimpse of what we've built with our partners.
            </p>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-2 gap-5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide"
        >
          {/* NOTE: ref must be on a real element (not `contents`) so IntersectionObserver can trigger */}
          <div ref={ref} className="flex lg:contents gap-5">
            {workItems.map((item, index) => (
              <WorkCard
                key={item.title}
                item={item}
                index={index}
                isVisible={isVisible}
                getStaggerDelay={getStaggerDelay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ 
  item, 
  index, 
  isVisible, 
  getStaggerDelay 
}: { 
  item: typeof workItems[0]; 
  index: number; 
  isVisible: boolean;
  getStaggerDelay: (index: number) => React.CSSProperties;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 flex-shrink-0 w-[85%] sm:w-[70%] lg:w-auto snap-center",
        "opacity-0 translate-y-8",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={getStaggerDelay(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
        />
      </div>

      {/* Always visible overlay - gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent">
        {/* Video play indicator */}
        {item.hasVideo && (
          <div 
            className={cn(
              "absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300",
              isHovered ? "scale-110 bg-primary" : ""
            )}
          >
            <Play className={cn("w-4 h-4 ml-0.5", isHovered ? "text-primary-foreground" : "text-foreground")} />
          </div>
        )}

        {/* Content - always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block px-2.5 py-1 bg-primary/90 text-primary-foreground text-xs font-medium uppercase tracking-wider rounded mb-3">
            {item.category}
          </span>
          <h3 className="text-xl font-semibold text-primary-foreground mb-1">
            {item.title}
          </h3>
          <p 
            className={cn(
              "text-sm text-primary-foreground/80 transition-all duration-300",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
