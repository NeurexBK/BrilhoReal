import Link from "next/link";
import Container from "@/components/ui/Container";
import { IconInstagram, IconMail, IconWhatsapp } from "@/components/icons";
import { CONTACT, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Logótipo + slogan */}
          <div>
            <p className="font-display text-xl tracking-[0.18em]">
              BRILHO <span className="text-gold">REAL</span>
            </p>
            <p className="mt-3 text-sm text-white/45">
              Limpeza que transforma.
            </p>
          </div>

          {/* Navegação */}
          <ul className="flex flex-col gap-3 text-sm text-white/55">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contactos */}
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/55 transition-colors duration-300 hover:text-gold"
              >
                <IconInstagram className="h-5 w-5 text-gold/70 transition-colors group-hover:text-gold" />
                {CONTACT.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/55 transition-colors duration-300 hover:text-gold"
              >
                <IconWhatsapp className="h-5 w-5 text-gold/70 transition-colors group-hover:text-gold" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-3 text-white/55 transition-colors duration-300 hover:text-gold"
              >
                <IconMail className="h-5 w-5 text-gold/70 transition-colors group-hover:text-gold" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-white/35 md:flex-row">
          <p>
            © {new Date().getFullYear()} Brilho Real. Todos os direitos
            reservados.
          </p>
          <p className="tracking-[0.2em] uppercase">Portugal</p>
        </div>
      </Container>
    </footer>
  );
}
