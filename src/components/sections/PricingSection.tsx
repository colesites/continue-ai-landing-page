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
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true, margin: "-100px" }}
          transition={easeTransition}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            One plan beats five subscriptions.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Transparent pricing that scales with the way you actually work.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
          variants={getAnimationConfig(staggerContainer)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className="w-full md:w-[22rem]"
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
