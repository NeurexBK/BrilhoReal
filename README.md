# Brilho Real — Limpeza que transforma.

Website premium da **Brilho Real**, especialistas em higienização residencial,
automóvel e marítima.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## Correr o projeto

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Onde adicionar media real

O site usa placeholders elegantes até as fotografias e vídeos reais serem
adicionados:

| Local | Ficheiro |
| --- | --- |
| Vídeo do hero | `public/videos/hero.mp4` (+ poster opcional `public/images/hero-poster.jpg`) |
| Cards de serviços | `public/images/servicos/{residencial,automovel,maritimo}.jpg` — substituir `MediaPlaceholder` em `src/components/sections/Services.tsx` |
| Antes/Depois | `public/images/resultados/<id>-antes.jpg` e `<id>-depois.jpg` — ver `src/components/sections/BeforeAfter.tsx` |
| Galeria | `public/images/galeria/*` — ver `src/components/sections/Gallery.tsx` |
| Foto da equipa | substituir `MediaPlaceholder` em `src/components/sections/About.tsx` |

## Conteúdo editável

Todos os textos, contactos, serviços, estatísticas e avaliações estão
centralizados em **`src/lib/data.ts`**.

### Imagens de arquivo

Algumas imagens usam fotografias do [Pexels](https://www.pexels.com)
(licença gratuita para uso comercial, sem atribuição obrigatória):

- Antes/depois **marítimo**: [17859032](https://www.pexels.com/photo/17859032/)
- Antes/depois **tapetes**: [28379848](https://www.pexels.com/photo/28379848/)
- Galeria **interior de iate**: [8356428](https://www.pexels.com/photo/8356428/)
- Galeria **lancha**: [34405154](https://www.pexels.com/photo/34405154/)
- Card de serviço **marítimo**: [8356420](https://www.pexels.com/photo/8356420/)
- Poster do hero: [6510311](https://www.pexels.com/photo/6510311/)

Os "antes" marítimo e de tapetes têm envelhecimento aplicado por edição
(a legenda do comparador assinala "imagem ilustrativa") — substituir por
fotografias reais de serviços quando existirem. As restantes imagens
(sofás, automóvel, galeria, sobre nós) são fotografias reais da Brilho Real.

## Preparação para o futuro

A secção **Futuro** (Cursos · Formação · Área premium · Conteúdo exclusivo)
já está construída mas invisível. Para ativar, mudar `FUTURE_ENABLED` para
`true` em `src/components/sections/Future.tsx`.

## Design system

- **Preto** `#0D0D0D` (`ink`) · **Cinza escuro** `#1E1E1E` (`graphite`)
- **Dourado suave** `#C8A96B` (`gold`) · **Branco** `#FFFFFF` (`paper`)
- Tipografia: Playfair Display (títulos) + Inter (texto)
- Tokens definidos em `src/app/globals.css` (`@theme`)
