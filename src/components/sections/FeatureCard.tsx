"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { getAnimationConfig } from "@/lib/animations";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={getAnimationConfig({
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      })}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card variant="glass" className="h-full">
        <CardHeader>
          <div className="mb-4 p-3 rounded-lg glass-light w-fit">
            <Icon className="size-6 text-primary" />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
