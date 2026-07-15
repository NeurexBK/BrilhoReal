"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  onDark = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  onDark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-gold"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-display text-4xl leading-[1.15] md:text-5xl ${
          onDark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base leading-relaxed ${
            onDark ? "text-white/55" : "text-ink/55"
          }`}
        >
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}
