/* ══════════════════════════════════════════════════════════
   PREPARAÇÃO PARA O FUTURO — secção desativada.

   Estrutura pronta para as próximas fases da Brilho Real:
   • Cursos            • Formação
   • Área premium      • Conteúdo exclusivo

   Para ativar: mudar FUTURE_ENABLED para true (e, mais tarde,
   ligar cada card à respetiva rota/página quando existir).
   ══════════════════════════════════════════════════════════ */

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";

const FUTURE_ENABLED = false;

const FUTURE_ITEMS = [
  {
    title: "Cursos",
    description: "Aprenda as técnicas profissionais da Brilho Real.",
    href: "#", // futura rota: /cursos
  },
  {
    title: "Formação",
    description: "Certificação para equipas e profissionais do setor.",
    href: "#", // futura rota: /formacao
  },
  {
    title: "Área premium",
    description: "Acesso reservado a clientes e parceiros.",
    href: "#", // futura rota: /premium
  },
  {
    title: "Conteúdo exclusivo",
    description: "Guias, bastidores e novidades em primeira mão.",
    href: "#", // futura rota: /conteudo
  },
];

export default function Future() {
  if (!FUTURE_ENABLED) return null;

  return (
    <section id="futuro" className="bg-paper py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Em breve"
          title="O universo Brilho Real está a crescer."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FUTURE_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-ink/10 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50"
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/50">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-gold uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Saber mais
                <IconArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
