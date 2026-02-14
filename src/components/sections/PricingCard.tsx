"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { getAnimationConfig } from "@/lib/animations";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={getAnimationConfig({ scale: 1.03, y: -6 })}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        variant="glass"
        className={
          highlighted
            ? "h-full border-primary/40 shadow-[0_30px_70px_-50px_rgba(255,86,179,0.8)]"
            : "h-full"
        }
      >
        <CardHeader>
          {highlighted && (
            <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-[0.2em]">
              Most popular
            </div>
          )}
          <CardTitle className="font-display text-2xl">{name}</CardTitle>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-semibold">{price}</span>
            <span className="text-muted-foreground">/{period}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <Check className="size-4 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant={highlighted ? "default" : "outline"} size="lg" className="w-full">
            <Link href="https://chat.kontinueai.com/sign-up" target="_blank" rel="noopener noreferrer">Get started</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
