"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  easeTransition,
  getAnimationConfig,
} from "@/lib/animations";

const models = [
  { name: "OpenAI", src: "/openai.svg", invert: true },
  { name: "Claude", src: "/claude-ai-icon.svg" },
  { name: "Gemini", src: "/gemini.svg" },
  { name: "Perplexity", src: "/perplexity.svg" },
  { name: "Mistral", src: "/mistral-ai_logo.svg" },
  { name: "T3 Chat", src: "/t3chat.ico" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="orb -left-20 top-10 size-80 bg-fuchsia-500/30" />
      <div className="orb right-[-8rem] top-[-4rem] size-[28rem] bg-violet-500/30" />
      <div className="orb bottom-[-10rem] left-1/2 size-[32rem] -translate-x-1/2 bg-indigo-500/20" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            variants={getAnimationConfig(staggerContainer)}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Unified AI workspace
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-tight"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              All your AI models,
              <span className="gradient-text"> one cockpit.</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              Import your conversations from the top AI apps, then switch models instantly to
              compare answers, keep context, and pay for just one plan.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              <Button asChild size="lg" className="button-glow">
                <Link href="https://chat.kontinueai.com/sign-up">Start free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://chat.kontinueai.com/sign-in">Sign in</Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link href="/waitlist">Join waitlist</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 grid gap-3 text-sm text-muted-foreground"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              {[
                "Compare answers across models in one click",
                "Keep every chat history in one secure workspace",
                "Swap models based on task, speed, or cost",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Models inside Kontinue AI
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {models.map((model) => (
                  <div
                    key={model.name}
                    className="flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-4 py-2"
                  >
                    <img
                      src={model.src}
                      alt={`${model.name} logo`}
                      width={120}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      className={`h-5 w-auto opacity-80 transition duration-300 hover:opacity-100 ${
                        model.invert ? "invert" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={getAnimationConfig({ opacity: 0, y: 30 })}
            animate={getAnimationConfig({ opacity: 1, y: 0 })}
            transition={{ ...easeTransition, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-indigo-500/30 blur-3xl opacity-70" />
            <div className="relative glass glow-border rounded-[2.5rem] p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-lg">See Kontinue AI in 45 seconds</h3>
                  <p className="text-sm text-muted-foreground">
                    Import → organize → switch models → compare answers
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">
                  Live demo
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/60">
                <video
                  controls
                  poster="/demo-poster.jpg"
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>No credit card required</span>
                <span>Zero setup, instant import</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
