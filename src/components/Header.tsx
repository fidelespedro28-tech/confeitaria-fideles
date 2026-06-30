import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-fideles.png";
import { WHATSAPP_LINK } from "@/lib/constants";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-soft"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="Confeitaria Fideles">
          <img
            src={logo}
            alt="Confeitaria Fideles"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-contain shadow-soft sm:h-14 sm:w-14"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-script text-2xl text-primary">Fideles</span>
            <span className="text-[0.6rem] font-semibold tracking-[0.32em] text-cocoa/70">
              CONFEITARIA ARTESANAL
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-cocoa/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105 hover:shadow-elegant md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" /> Encomendar
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-primary transition-transform active:scale-90 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-cocoa/85 transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Encomendar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
