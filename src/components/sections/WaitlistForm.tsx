"use client";

import type { SyntheticEvent } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeIn, easeTransition, getAnimationConfig } from "@/lib/animations";
import { useWaitlist } from "@/hooks/useWaitlist";

const useCaseOptions = [
  "Import chats and continue where I left off",
  "Coding / Debugging",
  "School / Research",
  "Content / Writing",
  "Business / Client work",
  "Just exploring",
];

export function WaitlistForm() {
  const { email, setEmail, useCase, setUseCase, error, status, submit } =
    useWaitlist();

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit();
  };

  if (status === "success") {
    return (
      <motion.div
        className="glass p-8 rounded-xl max-w-md mx-auto text-center"
        initial={getAnimationConfig(fadeIn.initial)}
        animate={getAnimationConfig(fadeIn.animate)}
        transition={easeTransition}
      >
        <h3 className="text-2xl font-bold mb-2 text-primary">
          You're on the list!
        </h3>
        <p className="text-muted-foreground">
          We'll notify you when Kontinue AI launches.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="glass p-8 rounded-xl max-w-md mx-auto"
      initial={getAnimationConfig(fadeIn.initial)}
      animate={getAnimationConfig(fadeIn.animate)}
      transition={easeTransition}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="glass"
            className="text-base"
            disabled={status === "loading"}
            aria-label="Email address"
            aria-invalid={!!error}
            required
          />
          {error && (
            <motion.p
              className="text-destructive text-sm mt-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.p>
          )}
        </div>

        <div>
          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm glass focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
            disabled={status === "loading"}
          >
            <option value="">What will you use it for? (optional)</option>
            {useCaseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining..." : "Join waitlist"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          No spam. Only product updates.
        </p>
      </form>
    </motion.div>
  );
}
