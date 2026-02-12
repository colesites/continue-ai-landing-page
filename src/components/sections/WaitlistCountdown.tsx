"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const DAY = 1000 * 60 * 60 * 24;
const COUNTDOWN_DAYS = 60;

function format(value: number) {
  return value.toString().padStart(2, "0");
}

export function WaitlistCountdown() {
  const target = useMemo(() => {
    const now = Date.now();
    return now + COUNTDOWN_DAYS * DAY;
  }, []);

  const [timeLeft, setTimeLeft] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(Math.max(0, target - Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const days = Math.floor(timeLeft / DAY);
  const hours = Math.floor((timeLeft % DAY) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const blocks = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {blocks.map((block) => (
        <motion.div
          key={block.label}
          className="glass glow-border rounded-2xl px-5 py-6 text-center"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
        >
          <div className="font-display text-3xl md:text-4xl">{format(block.value)}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {block.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
