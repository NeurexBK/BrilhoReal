"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { STATS } from "@/lib/data";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

/* Número animado: conta de 0 até ao valor quando entra no ecrã. */
function CountUp({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-paper py-24 md:py-28">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-ink/10 p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_50px_-24px_rgba(13,13,13,0.25)]"
            >
              <p className="font-display text-4xl text-ink md:text-5xl">
                {"value" in stat ? (
                  <CountUp to={stat.value} prefix={stat.prefix} />
                ) : (
                  stat.display
                )}
              </p>
              <p className="mt-3 text-sm text-ink/50">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
