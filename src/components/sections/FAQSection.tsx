"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer, easeTransition, getAnimationConfig } from "@/lib/animations";

const faqs = [
  {
    question: "Can I really import chats from different AI apps?",
    answer:
      "Yes — Continue AI lets you bring your existing conversations into one workspace.",
  },
  {
    question: "Do I need separate subscriptions for each model?",
    answer:
      "No. Continue AI is built so you can use different models in one place.",
  },
  {
    question: "How does it help with hallucinations?",
    answer:
      "You can cross-check the same prompt across models quickly and compare results.",
  },
  {
    question: "Is Pro really $5?",
    answer:
      'Yes — Pro is designed to be the simple "one upgrade" instead of multiple subscriptions.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={getAnimationConfig(fadeIn.initial)}
          whileInView={getAnimationConfig(fadeIn.animate)}
          viewport={{ once: true }}
          transition={easeTransition}
        >
          FAQ
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={getAnimationConfig(staggerContainer)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={getAnimationConfig({
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              })}
              transition={{ ...easeTransition, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
