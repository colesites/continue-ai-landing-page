"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check, Play } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import {
  staggerContainer,
  staggerItem,
  easeTransition,
  getAnimationConfig,
} from "@/lib/animations";

export function HeroSection() {
  const scrollToNext = () => {
    const headerHeight = 64; // Height of sticky header
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      const targetPosition = nextSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={getAnimationConfig(staggerContainer)}
            initial="initial"
            animate="animate"
          >
            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              All your AI chats.{" "}
              <span className="gradient-text">One place. One plan.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              Import your conversations from ChatGPT, Claude, Gemini, Perplexity,
              Mistral, T3 Chat and more — then keep chatting with any model
              without juggling subscriptions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              <Button size="lg" className="text-base">
                Start free
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                <Play className="size-4 mr-2" />
                Watch demo
              </Button>
            </motion.div>

            {/* Trust bullets */}
            <motion.div
              className="space-y-3"
              variants={getAnimationConfig(staggerItem)}
              transition={easeTransition}
            >
              <div className="flex items-center gap-2 text-sm">
                <Check className="size-5 text-primary shrink-0" />
                <span>Switch models anytime (best model for the task)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="size-5 text-primary shrink-0" />
                <span>Cheaper than multiple subscriptions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="size-5 text-primary shrink-0" />
                <span>Cross-check hallucinations in one click</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Video Demo */}
          <motion.div
            initial={getAnimationConfig({ opacity: 0, x: 20 })}
            animate={getAnimationConfig({ opacity: 1, x: 0 })}
            transition={{ ...easeTransition, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-4 shadow-2xl">
              <div className="mb-3">
                <h3 className="font-semibold text-lg">See Continue AI in 45 seconds</h3>
                <p className="text-sm text-muted-foreground">
                  Import → organize → switch models → compare answers
                </p>
              </div>
              
              {/* Video placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
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
              
              <p className="text-xs text-muted-foreground mt-3 text-center">
                No credit card needed to try Free.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Compatible platforms strip */}
        <motion.div
          className="mt-16 text-center"
          initial={getAnimationConfig({ opacity: 0, y: 20 })}
          animate={getAnimationConfig({ opacity: 1, y: 0 })}
          transition={{ ...easeTransition, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground mb-4">
            Import your history from the tools you already use
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {["ChatGPT", "Claude", "Gemini", "Perplexity", "Mistral", "T3 Chat"].map((platform) => (
              <div
                key={platform}
                className="text-base font-semibold text-muted-foreground/60"
              >
                {platform}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.button
          onClick={scrollToNext}
          className="mt-12 mx-auto block text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChevronDown className="size-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
