import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { MarketingHero } from "@/components/marketing/MarketingHero";
import { MarketingSystemVisual } from "@/components/marketing/MarketingSystemVisual";
import { MarketingModules } from "@/components/marketing/MarketingModules";
import { MarketingTimeline } from "@/components/marketing/MarketingTimeline";
import { MarketingBridgeSection } from "@/components/marketing/MarketingBridgeSection";
import { MarketingEngagements } from "@/components/marketing/MarketingEngagements";

export default function MarketingService() {
  return (
    <>
      <Header />
      <main>
        <MarketingHero />
        <MarketingSystemVisual />
        <MarketingModules />
        <MarketingTimeline />
        <MarketingBridgeSection />
        <MarketingEngagements />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
