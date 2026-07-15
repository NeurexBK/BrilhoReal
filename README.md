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

> Nota: o e-mail `geral@brilhoreal.pt` é um placeholder — confirmar o endereço
> real em `src/lib/data.ts`.

## Preparação para o futuro

A secção **Futuro** (Cursos · Formação · Área premium · Conteúdo exclusivo)
já está construída mas invisível. Para ativar, mudar `FUTURE_ENABLED` para
`true` em `src/components/sections/Future.tsx`.

## Design system

- **Preto** `#0D0D0D` (`ink`) · **Cinza escuro** `#1E1E1E` (`graphite`)
- **Dourado suave** `#C8A96B` (`gold`) · **Branco** `#FFFFFF` (`paper`)
- Tipografia: Playfair Display (títulos) + Inter (texto)
- Tokens definidos em `src/app/globals.css` (`@theme`)
