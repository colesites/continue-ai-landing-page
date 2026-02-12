"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer, easeTransition, getAnimationConfig } from "@/lib/animations";
import { UseCase } from "@/data/useCases";

interface UseCasesSectionProps {
  useCases: UseCase[];
}

export function UseCasesSection({ useCases }: UseCasesSectionProps) {
  return (
    <section id="use-cases" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true }}
          transition={easeTransition}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Use cases
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Real-world wins with <span className="gradient-text">Kontinue AI</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={getAnimationConfig(staggerContainer)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              variants={getAnimationConfig({
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              })}
              transition={{ ...easeTransition, delay: index * 0.08 }}
            >
              <Card variant="glass" className="h-full">
                <CardHeader>
                  <CardTitle className="font-display text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
