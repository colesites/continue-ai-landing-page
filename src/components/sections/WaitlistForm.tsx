"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeIn, easeTransition, getAnimationConfig } from "@/lib/animations";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useCaseOptions = [
  "Coding / Debugging",
  "School / Research",
  "Content / Writing",
  "Business / Client work",
  "Just exploring",
];

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate success
      if (Math.random() > 0.1) {
        setIsSubmitted(true);
        setEmail("");
        setUseCase("");
      } else {
        throw new Error("Failed to join waitlist");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
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
          We'll notify you when Kontinue AI launches. Early users get Pro perks!
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

