"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Sparkles, Zap, DollarSign } from "lucide-react";
import { pricingTiers } from "@/data/pricing";
import { useCases } from "@/data/useCases";

const coreValueProps = [
  {
    id: "import-everything",
    icon: Sparkles,
    title: "Import everything",
    description:
      "Move chats from the top AI apps into Continue AI — keep your history in one place.",
  },
  {
    id: "use-any-model",
    icon: Zap,
    title: "Use any model",
    description:
      "Switch between models based on the task: coding, writing, research, reasoning, speed.",
  },
  {
    id: "spend-less",
    icon: DollarSign,
    title: "Spend less, get more",
    description:
      "A single Free plan + $5 Pro is usually cheaper than stacking subscriptions.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection features={coreValueProps} />
        <UseCasesSection useCases={useCases} />
        <PricingSection tiers={pricingTiers} />
        <FAQSection />
        <FinalCTA />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
