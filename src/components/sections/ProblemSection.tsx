"use client";

import { motion } from "motion/react";
import { fadeIn, easeTransition, getAnimationConfig } from "@/lib/animations";

export function ProblemSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true }}
          transition={easeTransition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You're paying for the same thing…{" "}
            <span className="gradient-text">multiple times.</span>
          </h2>
          <div className="text-xl text-muted-foreground space-y-4 leading-relaxed">
            <p>One month it's ChatGPT. Next month it's Claude.</p>
            <p>Then Gemini for speed, Perplexity for research.</p>
            <p className="font-semibold text-foreground">
              You end up with scattered chats, separate limits, and multiple bills.
            </p>
            <p className="text-2xl font-bold text-primary mt-8">
              Continue AI fixes that.
            </p>
            <p>
              One workspace where you can bring your chats, switch models anytime,
              and pick one simple plan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
