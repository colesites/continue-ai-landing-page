"use client";

import { motion } from "motion/react";
import { FeatureCard } from "./FeatureCard";
import { Sparkles, Zap, DollarSign } from "lucide-react";
import {
  fadeIn,
  staggerContainer,
  easeTransition,
  getAnimationConfig,
} from "@/lib/animations";

const features = [
  {
    id: "import-everything",
    icon: Sparkles,
    title: "Import everything",
    description:
      "Move chats from the top AI apps into Kontinue AI — keep your history in one place.",
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

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true, margin: "-100px" }}
          transition={easeTransition}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Core capabilities
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Your AI stack, finally unified.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Kontinue AI keeps your conversations, models, and workflows together so you can move faster.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={getAnimationConfig(staggerContainer)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={getAnimationConfig({
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              })}
              transition={{ ...easeTransition, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
