import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import brandProjectImg from "@/assets/work/brand-project.jpg";
import videoCampaignImg from "@/assets/work/video-campaign.jpg";
import marketingDashboardImg from "@/assets/work/marketing-dashboard.jpg";
import ecommercePlatformImg from "@/assets/work/ecommerce-platform.jpg";
import aiPlatformImg from "@/assets/work/ai-platform.jpg";
import managedServicesImg from "@/assets/work/managed-services.jpg";

const modules = [
  {
    id: 1,
    title: "Explainer & Product Videos",
    description: "Clear, concise videos designed to explain products, features, and workflows without overwhelming the viewer.",
    imagePosition: "left",
    image: videoCampaignImg,
    hoverDetails: {
      stats: "85% viewer retention",
      cta: "See video examples",
      hasVideo: true,
      link: "/services/creative/explainer-videos",
    },
  },
  {
    id: 2,
    title: "Motion & Animation",
    description: "Dynamic motion graphics and animations that bring static content to life and capture attention across platforms.",
    imagePosition: "right",
    image: brandProjectImg,
    hoverDetails: {
      stats: "3x engagement boost",
      cta: "View motion work",
      hasVideo: true,
      link: "/services/creative/motion-animation",
    },
  },
  {
    id: 3,
    title: "Short-form Content",
    description: "Scroll-stopping social content optimized for TikTok, Reels, and Stories that drives engagement and shares.",
    imagePosition: "left",
    image: marketingDashboardImg,
    hoverDetails: {
      stats: "2M+ views generated",
      cta: "Explore social content",
      hasVideo: false,
      link: "/services/creative/short-form-content",
    },
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Thoughtful interface design that balances beauty with usability, creating products people love to use.",
    imagePosition: "right",
    image: ecommercePlatformImg,
    hoverDetails: {
      stats: "40% conversion lift",
      cta: "See UI projects",
      hasVideo: false,
      link: "/services/creative/ui-ux-design",
    },
  },
  {
    id: 5,
    title: "Marketing Creatives",
    description: "Campaign assets, ads, and promotional materials designed for impact and conversion across channels.",
    imagePosition: "left",
    image: aiPlatformImg,
    hoverDetails: {
      stats: "5x ROAS average",
      cta: "View campaigns",
      hasVideo: false,
      link: "/services/creative/marketing-creatives",
    },
  },
  {
    id: 6,
    title: "Brand Visual Systems",
    description: "Comprehensive visual identities that scale from logo to full brand guidelines, ensuring consistency everywhere.",
    imagePosition: "right",
    image: managedServicesImg,
    hoverDetails: {
      stats: "50+ brands built",
      cta: "Explore brand work",
      hasVideo: false,
      link: "/services/creative/brand-visual-systems",
    },
  },
];

function ModuleImage({ 
  module, 
  isVisible 
}: { 
  module: typeof modules[0]; 
  isVisible: boolean; 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={module.hoverDetails.link}
      className={cn(
        "block aspect-[4/3] rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-700",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main image */}
      <img
        src={module.image}
        alt={module.title}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          isHovered ? "scale-110 blur-sm" : "scale-100"
        )}
      />

      {/* Dark overlay on hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-foreground/60 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Hover content */}
      <div 
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500",
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Video play button */}
        {module.hoverDetails.hasVideo && (
          <div 
            className={cn(
              "w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110",
              isHovered ? "scale-100 translate-y-0" : "scale-75 translate-y-4"
            )}
          >
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        )}

        {/* Stats */}
        <span 
          className={cn(
            "text-2xl font-bold text-primary-foreground mb-2 transition-all duration-500 delay-100",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          {module.hoverDetails.stats}
        </span>

        {/* CTA Button */}
        <span 
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium text-primary-foreground transition-all duration-500 delay-200 hover:bg-primary/40",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          {module.hoverDetails.cta}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>

      {/* Corner accent */}
      <div 
        className={cn(
          "absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary transition-all duration-500",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
        )}
      />
      <div 
        className={cn(
          "absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary transition-all duration-500",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
        )}
      />
    </Link>
  );
}

function ModuleItem({ module, index }: { module: typeof modules[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const isLeftImage = module.imagePosition === "left";

  return (
    <div 
      ref={ref}
      className={cn(
        "group grid md:grid-cols-2 gap-8 md:gap-16 items-center",
        index > 0 && "mt-20 md:mt-28"
      )}
    >
      {/* Image */}
      <div className={isLeftImage ? "md:order-1" : "md:order-2"}>
        <ModuleImage module={module} isVisible={isVisible} />
      </div>

      {/* Text */}
      <div 
        className={cn(
          isLeftImage ? "md:order-2" : "md:order-1",
          "transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <span 
          className={cn(
            "inline-block text-sm font-mono text-muted-foreground mb-4 transition-all duration-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 
          className={cn(
            "text-2xl md:text-3xl font-medium text-foreground mb-4 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          )}
        >
          {module.title}
        </h3>
        <p 
          className={cn(
            "text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          )}
        >
          {module.description}
        </p>
      </div>
    </div>
  );
}

export function DeepDiveModules() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div 
          ref={ref}
          className={cn(
            "mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            What we create
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Full-spectrum creative services
          </h2>
        </div>

        {/* Modules */}
        {modules.map((module, index) => (
          <ModuleItem key={module.id} module={module} index={index} />
        ))}
      </div>
    </section>
  );
}
