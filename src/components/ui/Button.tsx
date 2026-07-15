import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "outline-light" | "outline-dark";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-soft",
  "outline-light":
    "border border-white/25 text-paper hover:border-gold/70 hover:text-gold",
  "outline-dark":
    "border border-ink/20 text-ink hover:border-gold hover:text-ink/70",
};

const SIZES: Record<Size, string> = {
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  href,
  variant = "gold",
  size = "md",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
