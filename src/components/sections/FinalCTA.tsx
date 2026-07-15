"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { IconInstagram, IconMail, IconWhatsapp } from "@/components/icons";
import { CONTACT } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section
      id="contactos"
      className="relative overflow-hidden bg-ink py-32 text-paper md:py-44"
    >
      {/* Brilho dourado subtil ao centro */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,rgba(200,169,107,0.1),transparent_70%)]"
      />

      <Container className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-gold"
          >
            Brilho Real
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl leading-[1.15] md:text-6xl"
          >
            O cuidado e a qualidade que o seu espaço merece.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-12">
            <Button href={CONTACT.whatsapp} size="lg">
              Solicitar orçamento gratuito
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-14 flex flex-col items-center gap-5 text-sm text-white/50 sm:flex-row sm:gap-10"
          >
            <li>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors duration-300 hover:text-gold"
              >
                <IconWhatsapp className="h-4 w-4 text-gold/70" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 transition-colors duration-300 hover:text-gold"
              >
                <IconMail className="h-4 w-4 text-gold/70" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors duration-300 hover:text-gold"
              >
                <IconInstagram className="h-4 w-4 text-gold/70" />
                {CONTACT.instagramHandle}
              </a>
            </li>
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}
