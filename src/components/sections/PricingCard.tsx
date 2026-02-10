"use client";

import { motion } from "motion/react";
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
      whileHover={getAnimationConfig({
        scale: 1.05,
        rotateY: 3,
        z: 50,
      })}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        variant="glass"
        className={`h-full ${
          highlighted ? "glass-heavy border-primary/50 shadow-lg shadow-primary/20" : ""
        }`}
      >
        <CardHeader>
          {highlighted && (
            <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
              Most Popular
            </div>
          )}
          <CardTitle className="text-2xl">{name}</CardTitle>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-muted-foreground ml-2">/{period}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            variant={highlighted ? "default" : "glass"}
            className="w-full"
            size="lg"
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
