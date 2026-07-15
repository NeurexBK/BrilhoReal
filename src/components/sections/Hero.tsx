"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/data";
import { EASE, fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden bg-ink text-paper"
    >
      {/* Fundo de reserva enquanto o vídeo não carrega (ou não existe) */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_60%_20%,#23201a_0%,#0d0d0d_60%)]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/*
        Vídeo premium em background.
        Adicionar o ficheiro em: public/videos/hero.mp4
        (limpeza de sofás, higienização automóvel, barcos, equipa em ação)
        Poster opcional: public/images/hero-poster.jpg
      */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* Conteúdo */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-gold"
        >
          Higienização Premium · Portugal
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl leading-[1.1] md:text-7xl"
        >
          Cuidamos dos detalhes que fazem a diferença.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-base text-white/65 md:text-lg"
        >
          Especialistas em higienização residencial, automóvel e marítima.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href={CONTACT.whatsapp} size="lg">
            Solicitar orçamento
          </Button>
          <Button href="#servicos" variant="outline-light" size="lg">
            Ver serviços
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1, ease: EASE }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-gold"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
