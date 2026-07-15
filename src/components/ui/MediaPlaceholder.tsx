import type { ReactNode } from "react";

/* ── Placeholder de media premium ──────────────────────────
   Painel escuro com brilho dourado subtil, usado enquanto
   as fotografias/vídeos reais não são adicionados.
   Para usar imagens reais: substituir este componente por
   <Image fill className="object-cover" src="/images/..." />  */
export default function MediaPlaceholder({
  icon,
  label,
  className = "",
}: {
  icon?: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[#141414] ${className}`}
    >
      {/* brilho dourado subtil no canto superior */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_72%_18%,rgba(200,169,107,0.16),transparent_62%)]" />
      {/* vinheta inferior para profundidade */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_115%,rgba(0,0,0,0.5),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-3 text-white/30">
        {icon && <span className="h-12 w-12 text-gold/60">{icon}</span>}
        {label && (
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
