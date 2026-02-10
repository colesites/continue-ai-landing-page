import { Sparkles, Zap, DollarSign } from "lucide-react";
import { Feature } from "@/components/sections/FeaturesSection";

export const coreValueProps: Feature[] = [
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
