"use client";

import { motion } from "motion/react";
import { PricingCard } from "./PricingCard";
import {
  fadeIn,
  staggerContainer,
  easeTransition,
  getAnimationConfig,
} from "@/lib/animations";

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingSectionProps {
  tiers: PricingTier[];
}

export function PricingSection({ tiers }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true, margin: "-100px" }}
          transition={easeTransition}
        >
          Simple, Transparent Pricing
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-16 text-lg"
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true }}
          transition={easeTransition}
        >
          One plan instead of paying for multiple AI subscriptions.
        </motion.p>

        {/* Pricing Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
          variants={getAnimationConfig(staggerContainer)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className="w-full md:w-80"
              variants={getAnimationConfig({
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              })}
              transition={{ ...easeTransition, delay: index * 0.1 }}
            >
              <PricingCard
                name={tier.name}
                price={tier.price}
                period={tier.period}
                features={tier.features}
                highlighted={tier.highlighted}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
