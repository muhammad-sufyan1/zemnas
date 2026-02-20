import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicePillarsSection } from "@/components/home/ServicePillarsSection";
import { HowWeThinkSection } from "@/components/home/HowWeThinkSection";
import { LiveCapabilityStrip } from "@/components/home/LiveCapabilityStrip";
import { FutureReadySection } from "@/components/home/FutureReadySection";
import { TrustSection } from "@/components/home/TrustSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicePillarsSection />
        <HowWeThinkSection />
        <LiveCapabilityStrip />
        <FutureReadySection />
        <TrustSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingCTA 
        title="Let's build something great together" 
        buttonText="Get Started"
      />
    </div>
  );
};

export default Index;
