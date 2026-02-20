import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { SoftwareHero } from "@/components/software/SoftwareHero";
import { SoftwarePhilosophy } from "@/components/software/SoftwarePhilosophy";
import { SoftwareModules } from "@/components/software/SoftwareModules";
import { SoftwareTimeline } from "@/components/software/SoftwareTimeline";
import { SoftwareBridgeSection } from "@/components/software/SoftwareBridgeSection";
import { SoftwareUseCases } from "@/components/software/SoftwareUseCases";

export default function SoftwareService() {
  return (
    <>
      <Header />
      <main>
        <SoftwareHero />
        <SoftwarePhilosophy />
        <SoftwareModules />
        <SoftwareTimeline />
        <SoftwareBridgeSection />
        <SoftwareUseCases />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
