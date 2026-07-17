/* ── Dados centrais da Brilho Real ─────────────────────────
   Toda a informação editável do site vive aqui: contactos,
   navegação, serviços, estatísticas, avaliações e galeria.  */

export const CONTACT = {
  phone: "+351 934 415 350",
  whatsapp: `https://wa.me/351934415350?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento gratuito."
  )}`,
  email: "prestigeclean2000@gmail.com",
  instagramHandle: "@brilhoreal.pt",
  instagramUrl: "https://instagram.com/brilhoreal.pt",
};

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Contactos", href: "#contactos" },
];

export type Stat = { label: string } & (
  | { value: number; prefix: string }
  | { display: string }
);

export const STATS: Stat[] = [
  { value: 500, prefix: "+", label: "Clientes satisfeitos" },
  { value: 1000, prefix: "+", label: "Serviços realizados" },
  { display: "Portugal", label: "Atendimento em todo o país" },
  { display: "0€", label: "Orçamento — sempre gratuito" },
];

export const SERVICE_CATEGORIES = [
  {
    id: "residencial",
    title: "Residencial",
    description:
      "Sofás, colchões e tapetes renovados com higienização profunda.",
    items: ["Sofás", "Colchões", "Tapetes"],
    image: "/images/servicos/servico-residencial.jpg",
  },
  {
    id: "automovel",
    title: "Automóvel",
    description:
      "Bancos, interior completo e higienização com acabamento de detalhe.",
    items: ["Bancos", "Interior completo", "Higienização"],
    image: "/images/servicos/servico-automovel.jpg",
  },
  {
    id: "maritimo",
    title: "Marítimo",
    description:
      "Barcos, lanchas e iates — estofos e interiores à altura do mar.",
    items: ["Barcos", "Lanchas", "Iates"],
    image: "/images/servicos/servico-maritimo.jpg",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Contacto",
    description: "Fale connosco por WhatsApp, telefone ou e-mail.",
  },
  {
    number: "02",
    title: "Orçamento",
    description: "Proposta gratuita, clara e sem compromisso.",
  },
  {
    number: "03",
    title: "Agendamento",
    description: "Escolha o dia e o local. Nós tratamos do resto.",
  },
  {
    number: "04",
    title: "Serviço realizado",
    description: "Resultados impecáveis, com garantia de qualidade.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Profissionalismo impecável.",
    author: "Marta S.",
    context: "Limpeza de sofá · Lisboa",
  },
  {
    quote: "Resultado incrível.",
    author: "Ricardo P.",
    context: "Interior automóvel · Cascais",
  },
  {
    quote: "Voltarei a contratar.",
    author: "Inês C.",
    context: "Estofos marítimos · Vilamoura",
  },
];

export type GalleryItem = {
  label: string;
  location: string;
  type: "foto" | "vídeo";
  tall?: boolean;
  /** Fotografia real em public/images/galeria; sem ela usa placeholder. */
  image?: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    label: "Sofá em tecido",
    location: "Higienização profunda",
    type: "foto",
    tall: true,
    image: "/images/galeria/galeria-sofa.jpg",
  },
  {
    label: "Interior automóvel",
    location: "Detalhe completo",
    type: "foto",
    image: "/images/galeria/galeria-carro.jpg",
  },
  {
    label: "Interior de iate",
    location: "Estofos marítimos",
    type: "foto",
    image: "/images/galeria/galeria-iate.jpg",
  },
  {
    label: "Tapete de lã",
    location: "Limpeza profunda",
    type: "foto",
    image: "/images/galeria/galeria-tapete.jpg",
  },
  {
    label: "Estofos renovados",
    location: "Resultado final",
    type: "foto",
    tall: true,
    image: "/images/galeria/galeria-sofa-detalhe.jpg",
  },
  {
    label: "Lancha",
    location: "Serviço marítimo",
    type: "foto",
    image: "/images/galeria/galeria-lancha.jpg",
  },
];
