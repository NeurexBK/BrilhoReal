"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, VIEWPORT } from "@/lib/motion";

/* Wrapper de entrada suave: fade + deslize ao entrar no viewport. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
