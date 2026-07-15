"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { IconClose, IconMenu } from "@/components/icons";
import { CONTACT, NAV_LINKS } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  /* Sentinela no topo da página: quando sai do viewport,
     a navbar ganha fundo escuro com glassmorphism. */
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting)
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-6"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          {/* Logótipo */}
          <Link
            href="#inicio"
            className="font-display text-lg tracking-[0.18em] text-paper"
            onClick={() => setOpen(false)}
          >
            BRILHO <span className="text-gold">REAL</span>
          </Link>

          {/* Navegação desktop */}
          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/65 transition-colors duration-300 hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href={CONTACT.whatsapp}>Solicitar orçamento</Button>
          </div>

          {/* Menu mobile */}
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-paper lg:hidden"
          >
            {open ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="border-b border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-6 py-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-lg text-white/75 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Button href={CONTACT.whatsapp} className="w-full">
                    Solicitar orçamento
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
