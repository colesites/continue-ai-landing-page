"use client";

import { motion } from "motion/react";
import { WaitlistForm } from "./WaitlistForm";
import { fadeIn, easeTransition, getAnimationConfig } from "@/lib/animations";

export function WaitlistSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true, margin: "-100px" }}
          transition={easeTransition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get early access to Continue AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Be among the first to use Continue AI — import chats from top AI apps,
            switch models anytime, and keep everything in one workspace.
          </p>
          <p className="text-sm text-muted-foreground">
            Already using multiple AI tools? You're exactly who this is for.
          </p>
        </motion.div>

        <WaitlistForm />
      </div>
    </section>
  );
}
