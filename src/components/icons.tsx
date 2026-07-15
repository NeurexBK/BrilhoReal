import type { ReactNode } from "react";

/* ── Ícones de linha minimalistas ──────────────────────────
   Traço fino (1.5), herdam a cor via currentColor.          */

function Icon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

type P = { className?: string };

export const IconSofa = ({ className }: P) => (
  <Icon className={className}>
    <path d="M5 10V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2" />
    <path d="M5 10a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-4 0v1H7v-1a2 2 0 0 0-2-2Z" />
    <path d="M6 18v2M18 18v2" />
  </Icon>
);

export const IconBed = ({ className }: P) => (
  <Icon className={className}>
    <path d="M3 18V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10" />
    <path d="M3 14h18" />
    <path d="M6 10.5h5a1 1 0 0 1 1 1V14" />
    <path d="M3 18v2M21 18v2" />
  </Icon>
);

export const IconRug = ({ className }: P) => (
  <Icon className={className}>
    <rect x="6" y="4" width="12" height="16" rx="1" />
    <path d="M9 8h6M9 12h6M9 16h6" opacity={0.6} />
    <path d="M4 5v2M4 11v2M4 17v2M20 5v2M20 11v2M20 17v2" />
  </Icon>
);

export const IconCar = ({ className }: P) => (
  <Icon className={className}>
    <path d="M5 16l1.3-4.2A2 2 0 0 1 8.2 10h7.6a2 2 0 0 1 1.9 1.8L19 16" />
    <path d="M4 16h16v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Z" />
    <path d="M7.5 13.5h.01M16.5 13.5h.01" />
  </Icon>
);

export const IconAnchor = ({ className }: P) => (
  <Icon className={className}>
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v13" />
    <path d="M5 12H3c0 5 4 8 9 8s9-3 9-8h-2" />
  </Icon>
);

export const IconYacht = ({ className }: P) => (
  <Icon className={className}>
    <path d="M3 17h18l-2.5 3.5H5.5L3 17Z" />
    <path d="M12 3v14" />
    <path d="M12 5c4.5 1.5 7 5.5 7 9h-7" />
    <path d="M12 8c-2.8 1-4.6 3.5-5 6h5" opacity={0.6} />
  </Icon>
);

export const IconBuilding = ({ className }: P) => (
  <Icon className={className}>
    <rect x="5" y="3" width="14" height="18" rx="1" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    <path d="M11 21v-3h2v3" />
  </Icon>
);

export const IconPhone = ({ className }: P) => (
  <Icon className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Icon>
);

export const IconDocument = ({ className }: P) => (
  <Icon className={className}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </Icon>
);

export const IconCalendar = ({ className }: P) => (
  <Icon className={className}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M4 11h16" />
  </Icon>
);

export const IconSparkles = ({ className }: P) => (
  <Icon className={className}>
    <path d="M12 4l1.8 4.6 4.6 1.8-4.6 1.8L12 17l-1.8-4.8-4.6-1.8 4.6-1.8L12 4Z" />
    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
  </Icon>
);

export const IconStar = ({ className }: P) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
  </svg>
);

export const IconInstagram = ({ className }: P) => (
  <Icon className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.8" />
    <path d="M17.2 6.8h.01" strokeWidth={2.2} />
  </Icon>
);

export const IconWhatsapp = ({ className }: P) => (
  <Icon className={className}>
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
    <path d="M9 8.5c.3 3 3.2 5.9 6.2 6.2l1-1.6-2.1-1.2-.9.7a6.4 6.4 0 0 1-2.1-2.1l.7-.9L10.6 7.5 9 8.5Z" opacity={0.8} />
  </Icon>
);

export const IconMail = ({ className }: P) => (
  <Icon className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </Icon>
);

export const IconArrowRight = ({ className }: P) => (
  <Icon className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const IconPlay = ({ className }: P) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5v7l6-3.5-6-3.5Z" />
  </Icon>
);

export const IconCheck = ({ className }: P) => (
  <Icon className={className}>
    <path d="m4.5 12.5 5 5L20 6.5" />
  </Icon>
);

export const IconMenu = ({ className }: P) => (
  <Icon className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const IconClose = ({ className }: P) => (
  <Icon className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const IconDroplet = ({ className }: P) => (
  <Icon className={className}>
    <path d="M12 3s6 6.3 6 10.2A6 6 0 0 1 6 13.2C6 9.3 12 3 12 3Z" />
  </Icon>
);
