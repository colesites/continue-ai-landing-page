"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { fadeIn, easeTransition, getAnimationConfig } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true }}
          transition={easeTransition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop juggling AI subscriptions.
          </h2>
          <p className="text-2xl text-muted-foreground mb-8">
            Bring your chats. Switch models. Pay once.
          </p>
          <Button size="lg" className="text-lg px-8">
            Start free
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
