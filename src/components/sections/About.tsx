import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Reveal from "@/components/ui/Reveal";
import { IconSparkles } from "@/components/icons";

const PILLARS = [
  {
    title: "História",
    text: "Nascemos da paixão pelo detalhe e pelo trabalho bem feito.",
  },
  {
    title: "Missão",
    text: "Devolver a cada espaço o seu melhor — com rigor e discrição.",
  },
  {
    title: "Qualidade",
    text: "Produtos profissionais e técnicas de higienização avançadas.",
  },
  {
    title: "Compromisso",
    text: "Pontualidade, transparência e resultados garantidos.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-paper py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Sobre nós"
              title="Uma nova referência em higienização premium."
              sub="Do sofá da sua sala ao iate na marina, tratamos cada superfície com o mesmo rigor — e um compromisso absoluto com o resultado."
            />

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {PILLARS.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.08}>
                  <div className="h-px w-8 bg-gold" />
                  <h3 className="mt-4 font-display text-lg text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/50">
                    {pillar.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Fotografia da equipa — substituir por imagem real */}
          <Reveal delay={0.2} className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <MediaPlaceholder
                icon={<IconSparkles className="h-full w-full" />}
                label="A nossa equipa"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-ink/8 bg-paper px-7 py-5 shadow-[0_24px_60px_-30px_rgba(13,13,13,0.35)] md:-left-8">
              <p className="font-display text-2xl text-ink">
                5<span className="text-gold">★</span>
              </p>
              <p className="mt-1 text-xs tracking-[0.15em] text-ink/45 uppercase">
                Desde o primeiro dia
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
