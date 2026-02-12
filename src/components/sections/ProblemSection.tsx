"use client";

import { motion } from "motion/react";
import { fadeIn, easeTransition, getAnimationConfig } from "@/lib/animations";

export function ProblemSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true }}
          transition={easeTransition}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The problem
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            You&apos;re paying for the same answers,
            <span className="gradient-text"> multiple times.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            One month it&apos;s ChatGPT, the next it&apos;s Claude, then Gemini for speed and Perplexity for research.
            The result? Scattered chats, separate limits, and a stack of subscriptions.
          </p>
          <p className="mt-6 text-xl font-semibold">
            Kontinue AI fixes that with one workspace and one plan.
          </p>
        </motion.div>

        <motion.div
          initial={getAnimationConfig({ opacity: 0, y: 30 })}
          whileInView={getAnimationConfig({ opacity: 1, y: 0 })}
          viewport={{ once: true }}
          transition={{ ...easeTransition, delay: 0.1 }}
          className="glass glow-border rounded-3xl p-8"
        >
          <div className="space-y-6">
            {[
              {
                title: "One subscription",
                text: "Access multiple AI models with a single plan.",
              },
              {
                title: "One workspace",
                text: "Keep every chat, project, and prompt in one organized place.",
              },
              {
                title: "One decision",
                text: "Switch models instantly without starting over.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-2 size-2 rounded-full bg-primary" />
                <div>
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
