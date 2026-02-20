import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { ManagedHero } from "@/components/managed/ManagedHero";
import { ManagedPhilosophy } from "@/components/managed/ManagedPhilosophy";
import { ManagedSupportAreas } from "@/components/managed/ManagedSupportAreas";
import { ManagedFlow } from "@/components/managed/ManagedFlow";
import { ManagedEditorial } from "@/components/managed/ManagedEditorial";

export default function ManagedService() {
  return (
    <>
      <Header />
      <main>
        <ManagedHero />
        <ManagedPhilosophy />
        <ManagedSupportAreas />
        <ManagedFlow />
        <ManagedEditorial />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
