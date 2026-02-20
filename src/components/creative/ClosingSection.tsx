import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

export function ClosingSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.4 });

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 bg-surface-subtle"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={`text-4xl md:text-5xl font-light text-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Ready to build something that lasts?
          </h2>
          
          <p 
            className={`text-xl text-muted-foreground mb-10 leading-relaxed transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            We work with teams who value clarity, consistency, and thoughtful execution. 
            If that sounds like you, let's talk.
          </p>
          
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button 
              asChild
              size="lg" 
              className="px-8 py-6 text-base"
            >
              <Link to="/contact">
                Start a conversation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
