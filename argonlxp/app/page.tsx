import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import CtaSection from "@/components/landing/CtaSection";
import MissionSection from "@/components/landing/MissionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
}
