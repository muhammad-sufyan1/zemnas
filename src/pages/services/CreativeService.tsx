import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { EditorialHero } from "@/components/creative/EditorialHero";
import { PhilosophySection } from "@/components/creative/PhilosophySection";
import { DeepDiveModules } from "@/components/creative/DeepDiveModules";
import { VisualTimeline } from "@/components/creative/VisualTimeline";
import { GrowthBridgeSection } from "@/components/creative/GrowthBridgeSection";
import { WorkGallery } from "@/components/creative/WorkGallery";
import { RelatedCapabilities } from "@/components/creative/RelatedCapabilities";

export default function CreativeService() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Editorial Hero - Cinematic intro */}
        <EditorialHero />
        
        {/* 2. Philosophy - Text as design */}
        <PhilosophySection />
        
        {/* 3. Deep Dive - Alternating capability modules */}
        <DeepDiveModules />
        
        {/* 4. Visual Timeline - Process visualization */}
        <VisualTimeline />
        
        {/* 5. Growth Bridge - Connection to marketing */}
        <GrowthBridgeSection />
        
        {/* 6. Work Gallery - Visual credibility */}
        <WorkGallery />
        
        {/* 7. Related Capabilities - Soft interlinking */}
        <RelatedCapabilities />
        
        {/* 8. Final CTA Section */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
