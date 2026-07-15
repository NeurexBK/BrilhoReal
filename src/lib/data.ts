/* ── Dados centrais da Brilho Real ─────────────────────────
   Toda a informação editável do site vive aqui: contactos,
   navegação, serviços, estatísticas, avaliações e galeria.  */

export const CONTACT = {
  phone: "+351 934 415 350",
  whatsapp: `https://wa.me/351934415350?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento gratuito."
  )}`,
  email: "geral@brilhoreal.pt",
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
    /* Substituir por fotografia real: public/images/servicos/residencial.jpg */
  },
  {
    id: "automovel",
    title: "Automóvel",
    description:
      "Bancos, interior completo e higienização com acabamento de detalhe.",
    items: ["Bancos", "Interior completo", "Higienização"],
    /* Substituir por fotografia real: public/images/servicos/automovel.jpg */
  },
  {
    id: "maritimo",
    title: "Marítimo",
    description:
      "Barcos, lanchas e iates — estofos e interiores à altura do mar.",
    items: ["Barcos", "Lanchas", "Iates"],
    /* Substituir por fotografia real: public/images/servicos/maritimo.jpg */
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
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { label: "Sofá chaise-longue", location: "Lisboa", type: "foto", tall: true },
  { label: "Interior completo", location: "Cascais", type: "vídeo" },
  { label: "Iate 42 pés", location: "Vilamoura", type: "foto" },
  { label: "Tapete de lã", location: "Sintra", type: "foto" },
  { label: "Colchão premium", location: "Porto", type: "foto", tall: true },
  { label: "Lancha", location: "Troia", type: "vídeo" },
];
