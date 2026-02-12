import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pricingTiers } from "@/data/pricing";
import { useCases } from "@/data/useCases";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <UseCasesSection useCases={useCases} />
        <PricingSection tiers={pricingTiers} />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
