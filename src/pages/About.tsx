import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { TeamSection } from "@/components/about/TeamSection";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
