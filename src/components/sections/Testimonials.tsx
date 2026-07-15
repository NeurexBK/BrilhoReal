"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { IconStar } from "@/components/icons";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section className="bg-[#faf9f6] py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Avaliações"
          title="A confiança dos nossos clientes."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.figure
              key={testimonial.quote}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-ink/8 bg-paper p-9 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(13,13,13,0.3)]"
            >
              <div className="flex gap-1 text-gold" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl leading-snug text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-8 text-sm text-ink/45">
                <span className="font-medium text-ink/70">
                  {testimonial.author}
                </span>
                <span className="mx-2 text-ink/20">·</span>
                {testimonial.context}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
