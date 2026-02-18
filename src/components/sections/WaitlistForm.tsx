"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeIn, easeTransition, getAnimationConfig } from "@/lib/animations";
import { sendGTMEvent } from "@next/third-parties/google";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useCaseOptions = [
  "Import chats and continue where I left off",
  "Coding / Debugging",
  "School / Research",
  "Content / Writing",
  "Business / Client work",
  "Just exploring",
];

const trackJoinWaitlistSuccess = () => {
  sendGTMEvent({
    event: "join_waitlist_success",
  });
};

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email);
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          useCase,
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Failed to join waitlist");
      }

      setIsSubmitted(true);
      trackJoinWaitlistSuccess();
      setEmail("");
      setUseCase("");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Joining..." : "Join waitlist"}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          No spam. Only product updates.
        </p>
      </form>
    </motion.div>
  );
}
