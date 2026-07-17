"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

/* ── Antes e Depois ─────────────────────────────────────────
   Comparador interativo: o utilizador arrasta o divisor para
   revelar o antes (esquerda) e o depois (direita).

   Fotografias reais: adicionar o par em
     public/images/resultados/<id>-antes.jpg
     public/images/resultados/<id>-depois.jpg
   e registá-lo em MEDIA abaixo. Sem par registado, a variante
   usa a cena ilustrativa <Scene />.                          */

type Variant = "sofas" | "carro" | "maritimo" | "tapetes";

const ITEMS: { id: Variant; label: string; note: string }[] = [
  { id: "sofas", label: "Sofás", note: "Higienização profunda · Resultados reais" },
  { id: "carro", label: "Bancos de carro", note: "Higienização profunda · Resultados reais" },
  { id: "maritimo", label: "Estofos marítimos", note: "Imagem ilustrativa do serviço marítimo" },
  { id: "tapetes", label: "Tapetes", note: "Higienização profunda · Antes e depois" },
];

/* Pares de fotografias (antes/depois) por variante.
   maritimo: fotografia de arquivo (Pexels) com envelhecimento
   editado no "antes" — substituir por fotos reais quando existirem. */
const MEDIA: Partial<Record<Variant, { antes: string; depois: string }>> = {
  sofas: {
    antes: "/images/resultados/sofas-antes.jpg",
    depois: "/images/resultados/sofas-depois.jpg",
  },
  carro: {
    antes: "/images/resultados/carro-antes.jpg",
    depois: "/images/resultados/carro-depois.jpg",
  },
  maritimo: {
    antes: "/images/resultados/maritimo-antes.jpg",
    depois: "/images/resultados/maritimo-depois.jpg",
  },
};

/* Cenas ilustrativas (texturas de estofo) enquanto não há fotos. */
const SCENES: Record<Variant, { base: string; weave: string }> = {
  sofas: {
    base: "linear-gradient(180deg, #c3bbaa 0%, #a49a86 100%)",
    weave: "rgba(255,255,255,0.06)",
  },
  carro: {
    base: "linear-gradient(180deg, #4a443d 0%, #2f2b26 100%)",
    weave: "rgba(255,255,255,0.05)",
  },
  maritimo: {
    base: "linear-gradient(180deg, #edeadf 0%, #d3d0c1 100%)",
    weave: "rgba(0,0,0,0.04)",
  },
  tapetes: {
    base: "linear-gradient(180deg, #b3a58b 0%, #92826a 100%)",
    weave: "rgba(0,0,0,0.06)",
  },
};

const STAINS = [
  "radial-gradient(90px 60px at 28% 38%, rgba(62,47,28,0.5), transparent 70%)",
  "radial-gradient(150px 95px at 62% 60%, rgba(50,38,24,0.45), transparent 70%)",
  "radial-gradient(70px 50px at 80% 28%, rgba(66,51,28,0.4), transparent 70%)",
  "radial-gradient(120px 75px at 40% 80%, rgba(46,36,22,0.42), transparent 70%)",
].join(", ");

function Scene({ variant, state }: { variant: Variant; state: "antes" | "depois" }) {
  const scene = SCENES[variant];
  const texture = `repeating-linear-gradient(45deg, ${scene.weave} 0px, ${scene.weave} 1px, transparent 1px, transparent 7px)`;
  const depth =
    "radial-gradient(140% 90% at 50% 115%, rgba(0,0,0,0.3), transparent 60%)";

  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `${depth}, ${texture}, ${scene.base}`,
          filter:
            state === "antes"
              ? "brightness(0.68) saturate(0.6) sepia(0.22)"
              : undefined,
        }}
      />
      {state === "antes" ? (
        <div className="absolute inset-0" style={{ backgroundImage: STAINS }} />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.16)_48%,transparent_62%)]" />
      )}
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState<Variant>("carro");
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <section id="resultados" className="bg-ink py-28 text-paper md:py-36">
      <Container>
        <SectionHeading
          onDark
          eyebrow="Resultados"
          title="O antes e depois que fala por nós."
          sub="Arraste o divisor e veja a transformação."
        />

        {/* Seletor de tipo de estofo */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {ITEMS.map((item) => (
            <motion.button
              key={item.id}
              variants={fadeUp}
              type="button"
              onClick={() => {
                setActive(item.id);
                setPos(50);
              }}
              className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                active === item.id
                  ? "bg-gold text-ink"
                  : "border border-white/15 text-white/55 hover:border-white/35 hover:text-paper"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Comparador */}
        <Reveal delay={0.15} className="mx-auto mt-10 max-w-4xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] cursor-ew-resize touch-none overflow-hidden rounded-3xl ring-1 ring-white/10 select-none"
            onPointerDown={(e) => {
              dragging.current = true;
              update(e.clientX);
              try {
                e.currentTarget.setPointerCapture(e.pointerId);
              } catch {
                /* alguns browsers não suportam capture neste contexto */
              }
            }}
            onPointerMove={(e) => {
              /* e.buttons garante que o botão continua premido —
                 evita arrasto "colado" se o pointerup se perder */
              if (dragging.current && e.buttons > 0) update(e.clientX);
            }}
            onPointerUp={() => {
              dragging.current = false;
            }}
            onPointerCancel={() => {
              dragging.current = false;
            }}
            onLostPointerCapture={() => {
              dragging.current = false;
            }}
          >
            {/* Camada "depois" (fundo) */}
            {MEDIA[active] ? (
              <Image
                src={MEDIA[active].depois}
                alt={`${ITEMS.find((i) => i.id === active)?.label} — depois da higienização`}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                draggable={false}
                priority
              />
            ) : (
              <Scene variant={active} state="depois" />
            )}

            {/* Camada "antes" (recortada à esquerda do divisor) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              {MEDIA[active] ? (
                <Image
                  src={MEDIA[active].antes}
                  alt={`${ITEMS.find((i) => i.id === active)?.label} — antes da higienização`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  draggable={false}
                  priority
                />
              ) : (
                <Scene variant={active} state="antes" />
              )}
            </div>

            {/* Etiquetas */}
            <span className="absolute top-5 left-5 rounded-full bg-black/50 px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-white/80 uppercase backdrop-blur-sm">
              Antes
            </span>
            <span className="absolute top-5 right-5 rounded-full bg-gold px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-ink uppercase">
              Depois
            </span>

            {/* Divisor + pega */}
            <div
              className="absolute inset-y-0 z-10"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-white/80" />
              <div
                role="slider"
                aria-label="Comparar antes e depois"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 3));
                  if (e.key === "ArrowRight")
                    setPos((p) => Math.min(100, p + 3));
                }}
                className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-[0_8px_30px_rgba(0,0,0,0.4)] outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                </svg>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs tracking-[0.2em] text-white/30 uppercase">
            {ITEMS.find((item) => item.id === active)?.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
