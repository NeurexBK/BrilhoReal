"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  IconArrowRight,
  IconBuilding,
  IconCheck,
} from "@/components/icons";
import { CONTACT, SERVICE_CATEGORIES } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

export default function Services() {
  return (
    <section id="servicos" className="bg-paper py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Excelência em cada superfície."
          sub="Três universos, o mesmo padrão de rigor."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {SERVICE_CATEGORIES.map((category) => {
            return (
              <motion.a
                key={category.id}
                variants={fadeUp}
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl bg-graphite text-paper ring-1 ring-transparent transition-all duration-500 hover:ring-gold/40"
              >
                {/* Imagem grande do serviço */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-[1.05]">
                    <Image
                      src={category.image}
                      alt={`Serviço ${category.title.toLowerCase()} — Brilho Real`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                </div>

                {/* Conteúdo do card */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-2xl">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {category.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-xs text-white/50"
                      >
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Pedir orçamento
                    <IconArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Nota — limpeza residencial e empresarial completa */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-ink/50 sm:flex-row"
        >
          <span className="flex items-center gap-2">
            <IconCheck className="h-4 w-4 text-gold" />
            Limpeza residencial e empresarial completa
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-ink/20 sm:block" />
          <span className="flex items-center gap-2">
            <IconBuilding className="h-4 w-4 text-gold" />
            Soluções à medida para empresas
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
