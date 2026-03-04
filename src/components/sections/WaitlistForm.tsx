"use client";

import type { SyntheticEvent } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const { email, setEmail, intent, setIntent, error, status, submit } =
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
          <Select
            value={intent}
            onValueChange={setIntent}
            disabled={status === "loading"}
          >
            <SelectTrigger className="w-full h-11 rounded-lg border border-input bg-transparent px-4 py-2 text-base md:text-sm glass focus-visible:border-violet-500 focus-visible:ring-violet-500/30 focus-visible:ring-[3px] outline-none">
              <SelectValue placeholder="What will you use it for? (optional)" />
            </SelectTrigger>
            <SelectContent className="glass">
              {useCaseOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-200"
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
