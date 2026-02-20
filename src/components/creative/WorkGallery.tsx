import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import brandProjectImg from "@/assets/work/brand-project.jpg";
import videoCampaignImg from "@/assets/work/video-campaign.jpg";
import marketingDashboardImg from "@/assets/work/marketing-dashboard.jpg";
import ecommercePlatformImg from "@/assets/work/ecommerce-platform.jpg";
import aiPlatformImg from "@/assets/work/ai-platform.jpg";
import managedServicesImg from "@/assets/work/managed-services.jpg";

const workItems = [
  { id: 1, caption: "SaaS Product Launch", image: videoCampaignImg },
  { id: 2, caption: "Brand Identity System", image: brandProjectImg },
  { id: 3, caption: "Motion Campaign", image: marketingDashboardImg },
  { id: 4, caption: "Social Content Series", image: ecommercePlatformImg },
  { id: 5, caption: "Product UI Design", image: aiPlatformImg },
  { id: 6, caption: "Explainer Video", image: managedServicesImg },
];

function GalleryItem({ item, index }: { item: typeof workItems[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>({ threshold: 0.2 });

  return (
    <Link
      to="/work"
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 block group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.caption}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>

      {/* Caption overlay - always visible with enhanced hover state */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex items-end p-6 transition-all duration-500",
          isHovered ? "from-foreground/90" : "from-foreground/60"
        )}
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-primary-foreground font-medium">{item.caption}</span>
          <span 
            className={cn(
              "flex items-center gap-1 text-sm text-primary-foreground/80 transition-all duration-300",
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}
          >
            View
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function WorkGallery() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div 
          ref={ref}
          className={cn(
            "mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Selected work
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Projects that speak for themselves
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
