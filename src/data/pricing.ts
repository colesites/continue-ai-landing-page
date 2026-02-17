import { PricingTier } from "@/components/sections/PricingSection";

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "month",
    features: [
      "Try Kontinue AI",
      "Limited chats/messages",
      "Import supported chats",
      "Basic model access",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$8.99",
    period: "month",
    highlighted: true,
    features: [
      "Higher monthly limits",
      "Full chat imports",
      "Access to more models",
      "Faster experience + priority queue",
      "Better organization tools",
    ],
  },
];
