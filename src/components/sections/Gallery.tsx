"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Button from "@/components/ui/Button";
import {
  IconDroplet,
  IconInstagram,
  IconPlay,
  IconSparkles,
} from "@/components/icons";
import { CONTACT, GALLERY_ITEMS } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

/* ── Galeria premium ────────────────────────────────────────
   Portfólio de trabalhos recentes (fotos e vídeos).
   Para media real: colocar ficheiros em public/images/galeria/
   e substituir MediaPlaceholder por <Image /> ou <video />.

   Integração com Instagram: substituir a grelha por um widget
   (ex.: Behold, LightWidget ou a Instagram Basic Display API)
   apontado a @brilhoreal.pt.                                 */

export default function Gallery() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Portfólio"
            title="Trabalho recente."
            sub="Fotos e vídeos reais dos nossos serviços."
          />
          <Button href={CONTACT.instagramUrl} variant="outline-dark">
            <IconInstagram className="h-4 w-4" />
            {CONTACT.instagramHandle}
          </Button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-3"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl bg-graphite ${
                item.tall ? "row-span-2" : ""
              }`}
            >
              <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.05]">
                <MediaPlaceholder
                  icon={
                    item.type === "vídeo" ? (
                      <IconDroplet className="h-full w-full" />
                    ) : (
                      <IconSparkles className="h-full w-full" />
                    )
                  }
                />
              </div>

              {/* Overlay premium no hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 ring-1 ring-transparent transition-all duration-500 ring-inset group-hover:ring-gold/40" />

              {item.type === "vídeo" && (
                <span className="absolute top-4 right-4 text-white/70 transition-colors duration-500 group-hover:text-gold">
                  <IconPlay className="h-7 w-7" />
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-lg text-paper">{item.label}</p>
                <p className="mt-0.5 text-xs tracking-[0.2em] text-gold uppercase">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
