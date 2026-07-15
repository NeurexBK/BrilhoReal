"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  IconCalendar,
  IconDocument,
  IconPhone,
  IconSparkles,
} from "@/components/icons";
import { PROCESS_STEPS } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const STEP_ICONS = [IconPhone, IconDocument, IconCalendar, IconSparkles];

export default function Process() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Como funciona"
          title="Simples, do contacto ao brilho."
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative mt-20 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6"
        >
          {/* Linha de ligação (desktop) */}
          <div
            aria-hidden
            className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-ink/10 md:block"
          />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <motion.li
                key={step.number}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 bg-paper text-gold transition-colors duration-500 hover:border-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mt-5 text-xs font-medium tracking-[0.3em] text-gold">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-ink/50">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}
