import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Cake,
  Cookie,
  Gift,
  Heart,
  Sparkles,
  Leaf,
  HandHeart,
  Star,
  MapPin,
  Phone,
  Instagram,
  Navigation,
  MessageCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { Header } from "@/components/Header";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { FAQ } from "@/components/FAQ";
import { OrderSimulator } from "@/components/OrderSimulator";

import logo from "@/assets/logo-fideles.png";
import cakeRoseGlitter from "@/assets/cake-rose-glitter.png";
import cakeButterflies from "@/assets/cake-butterflies.png";
import cakeButterfliesPurple from "@/assets/cake-butterflies-purple.png";
import cakeBrigadeiro from "@/assets/cake-brigadeiro.png";
import cakeBolofofos from "@/assets/cake-bolofofos.png";
import cakeHearts from "@/assets/cake-hearts.png";
import cakeBryan from "@/assets/cake-bryan.png";
import cakeGalo from "@/assets/cake-galo.png";
import cakeDino from "@/assets/cake-dino.png";
import cakeWeddingOrchids from "@/assets/cake-wedding-orchids.png";
import cakeParabens from "@/assets/cake-parabens.png";
import cakeStrawberryDrip from "@/assets/cake-strawberry-drip.png";
import cakePudimSquare from "@/assets/cake-pudim-square.png";
import cakePineapple from "@/assets/cake-pineapple.png";
import cakeWhiteStrawberry from "@/assets/cake-white-strawberry.png";

import {
  WHATSAPP_LINK,
  INSTAGRAM,
  EMAIL,
  ADDRESS_LINE1,
  ADDRESS_CITY,
  MAPS_URL,
  MAPS_EMBED_SRC,
} from "@/lib/constants";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "Confeitaria Fideles — Alta Confeitaria Artesanal em João Monlevade" },
      {
        name: "description",
        content:
          "Bolos de celebração, doces finos e sobremesas artesanais feitos com carinho. Encomende pelo WhatsApp — Rua Caetés, 120, Bairro Industrial, João Monlevade — MG.",
      },
      { property: "og:title", content: "Confeitaria Fideles — Alta Confeitaria Artesanal" },
      {
        property: "og:description",
        content:
          "Cada doce, uma carícia para os sentidos. Bolos artesanais, brigadeiros gourmet e doces finos sob encomenda.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

// ── Constants ─────────────────────────────────────────────────────────────────

const menu = [
  {
    icon: Cake,
    title: "Bolos de Celebração",
    desc: "Aniversários, casamentos e datas inesquecíveis com sabor de afeto.",
  },
  {
    icon: Sparkles,
    title: "Bolos Autorais",
    desc: "Combinações exclusivas criadas pela nossa confeiteira-chefe.",
  },
  {
    icon: Cookie,
    title: "Doces Finos e Modelados",
    desc: "Doces personalizados, delicados e modelados à mão para transformar sua celebração em algo inesquecível.",
  },
  {
    icon: Heart,
    title: "Brigadeiros Gourmet",
    desc: "Cremosos, brilhantes e em sabores que pedem mais um.",
  },
  {
    icon: Star,
    title: "Sobremesas Especiais",
    desc: "Pavês, tortas e taças cuidadosamente compostas.",
  },
  {
    icon: Gift,
    title: "Kits para Festas",
    desc: "Mesas completas, harmonizadas e prontas para celebrar.",
  },
];

const diferenciais = [
  { icon: Leaf, title: "Ingredientes selecionados", desc: "Manteiga nobre, chocolate belga e frutas frescas." },
  { icon: HandHeart, title: "Produção 100% artesanal", desc: "Feito à mão, em pequenos lotes, sem pressa." },
  { icon: MessageCircle, title: "Atendimento personalizado", desc: "Conversamos com você para criar o doce ideal." },
  { icon: Sparkles, title: "Cuidado em cada detalhe", desc: "Acabamento, sabor e apresentação impecáveis." },
];

const galeria = [
  { src: cakeWeddingOrchids, alt: "Bolo de casamento com três andares e orquídeas roxas" },
  { src: cakeRoseGlitter, alt: "Bolo rosé com glitter, rosas e borboletas douradas" },
  { src: cakeButterflies, alt: "Bolo branco com borboletas" },
  { src: cakeStrawberryDrip, alt: "Bolo rosé com calda vermelha e morangos" },
  { src: cakeBrigadeiro, alt: "Bolo naked com brigadeiros e morangos" },
  { src: cakeWhiteStrawberry, alt: "Bolo quadrado branco com morangos frescos" },
  { src: cakeHearts, alt: "Bolo branco com corações e laços" },
  { src: cakeParabens, alt: "Bolo de chocolate com fita rosa e topo Parabéns" },
  { src: cakePineapple, alt: "Bolo quadrado de abacaxi com chantilly" },
  { src: cakePudimSquare, alt: "Bolo quadrado decorado com pudins individuais" },
  { src: cakeBolofofos, alt: "Bolo infantil Bolofofos" },
  { src: cakeBryan, alt: "Bolo personalizado de aniversário infantil" },
  { src: cakeGalo, alt: "Bolo do Atlético Mineiro" },
  { src: cakeDino, alt: "Bolo infantil tema dinossauros" },
];

const depoimentos = [
  {
    name: "Ana Paula S.",
    text: "Gente, eu ia mostrar o meu pedaço, mas a vontade de comer foi tanta que não consegui mostrar. A Fideles Confeitaria é a melhor de João Monlevade e região. Não tem jeito, é maravilhoso!",
  },
  {
    name: "Beatriz M.",
    text: "Esse bolo de pudim está perfeito. Massa fofinha embaixo e o pudim super cremoso por cima, com uma caldinha maravilhosa. O bolo de chocolate com calda está simplesmente irresistível. Muito obrigada pelo atendimento e pelos bolos, estava uma maravilha!",
  },
  {
    name: "Carla R.",
    text: "Boa tarde, Mônica. Quero te agradecer mais uma vez por me atender com um pedido de última hora. Estava uma delícia como sempre. Todos adoraram. Deus abençoe!",
  },
  {
    name: "Daniela L.",
    text: "Suas mãos são guiadas por Deus. Você é uma profissional perfeita, não teve nenhum defeito.",
  },
  {
    name: "Fernanda T.",
    text: "O atendimento foi excelente e o bolo estava maravilhoso. Dá para sentir o carinho em cada detalhe.",
  },
  {
    name: "Gabriela P.",
    text: "Tudo muito bem feito, saboroso e lindo. A apresentação é impecável.",
  },
];

const horarios = [
  { dia: "Segunda a Sexta", hora: "08h às 18h" },
  { dia: "Sábado", hora: "09h às 13h" },
  { dia: "Domingo", hora: "Fechado" },
];

// ── Scroll reveal hook ────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── Avatar initials ───────────────────────────────────────────────────────────

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-rose/60 text-sm font-bold text-white shadow-soft">
      {initials}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

function Index() {
  useReveal();

  // Lightbox state
  const [lightbox, setLightbox] = useState<{ open: boolean; idx: number }>({
    open: false,
    idx: 0,
  });

  const openLightbox = (idx: number) => setLightbox({ open: true, idx });
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));
  const prevImg = () =>
    setLightbox((s) => ({ ...s, idx: (s.idx - 1 + galeria.length) % galeria.length }));
  const nextImg = () =>
    setLightbox((s) => ({ ...s, idx: (s.idx + 1) % galeria.length }));

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <WhatsAppFab />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-warm opacity-80" />
        <div className="absolute -top-40 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-rose blur-3xl opacity-50 sm:h-[500px] sm:w-[500px]" />
        <div className="absolute -bottom-40 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-accent blur-3xl opacity-50 sm:h-[500px] sm:w-[500px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-5 md:grid-cols-2 md:gap-14">
          {/* IMAGE — first on mobile, second on desktop */}
          <div className="relative order-1 animate-float-up md:order-2 md:[animation-delay:200ms]">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-gold opacity-30 blur-3xl" />
            <img
              src={cakeButterfliesPurple}
              alt="Bolo lilás artesanal de dois andares com borboletas roxas — Fideles Confeitaria"
              width={1200}
              height={1500}
              loading="eager"
              fetchPriority="high"
              className="mx-auto aspect-[4/5] w-full max-w-[300px] rounded-[1.75rem] bg-secondary object-contain shadow-elegant sm:max-w-sm sm:rounded-[2rem] md:max-w-none"
            />
            <div className="absolute -top-4 -right-4 hidden rotate-6 rounded-full bg-white p-2 shadow-elegant sm:block">
              <img src={logo} alt="" width={72} height={72} className="h-16 w-16 rounded-full object-contain" />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white px-5 py-4 shadow-elegant sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Heart className="h-5 w-5 text-white" fill="white" />
                </div>
                <div>
                  <p className="font-display text-lg leading-none text-cocoa">Desde 2015</p>
                  <p className="text-xs text-muted-foreground">adoçando histórias</p>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="order-2 animate-float-up text-center md:order-1 md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/70 px-3.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" /> João Monlevade — MG
            </span>

            <h1 className="mt-4 flex flex-col items-center leading-none md:items-start">
              <span className="text-gradient-brand font-display text-[2.6rem] font-semibold tracking-[0.16em] sm:text-6xl md:text-7xl">
                FIDELES
              </span>
              <span className="mt-2 font-display text-[0.95rem] font-medium tracking-[0.42em] text-cocoa/80 sm:text-xl md:text-2xl">
                CONFEITARIA
              </span>
              <span className="mt-3 h-px w-14 bg-primary/40 md:w-20" />
            </h1>

            <p className="mx-auto mt-4 max-w-md font-display text-lg italic text-cocoa/80 sm:text-2xl md:mx-0">
              Transformando momentos em memórias doces desde 2015.
            </p>
            <p className="mx-auto mt-3 max-w-md text-[0.92rem] leading-relaxed text-muted-foreground sm:text-base md:mx-0 md:max-w-lg">
              Bolos de celebração, brigadeiros gourmet e sobremesas feitos à mão,
              com ingredientes selecionados e o carinho de uma confeitaria de família.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-1.5 md:justify-start">
              {["+1000 bolos produzidos", "100% artesanal", "Desde 2015"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[0.65rem] font-semibold text-cocoa shadow-soft backdrop-blur sm:px-3 sm:py-1.5 sm:text-xs"
                >
                  <Heart className="h-3 w-3 text-primary" fill="currentColor" /> {b}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-soft sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" /> Fazer encomenda
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-white/70 px-7 py-4 text-sm font-semibold text-primary backdrop-blur transition-all hover:bg-white sm:w-auto"
              >
                <Instagram className="h-4 w-4" /> Ver Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ──────────────────────────────────────────────────────────── */}
      <section id="sobre" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-5 md:items-center">
          <div className="reveal md:col-span-2">
            <img
              src={cakeHearts}
              alt="Bolo branco artesanal com corações vermelhos"
              loading="lazy"
              width={900}
              height={1200}
              className="aspect-[3/4] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
          <div className="reveal reveal-delay-1 md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Nossa história
            </span>
            <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
              Feito à mão,{" "}
              <span className="font-script text-gold">com afeto</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A <strong className="text-primary">Confeitaria Fideles</strong> nasceu em
                <strong> 2015</strong>, em João Monlevade — MG, do desejo de transformar
                momentos simples em memórias doces e marcantes. Cada receita carrega tempo,
                paciência e o cuidado de quem entende que comida também é abraço.
              </p>
              <p>
                Trabalhamos em pequenos lotes, com matéria-prima escolhida a dedo, para
                garantir um sabor que só o artesanal sabe entregar. Nosso compromisso é
                com a sua celebração — do primeiro contato até a última fatia.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "2015", l: "ano de fundação" },
                { n: "+1000", l: "bolos produzidos" },
                { n: "100%", l: "artesanal" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft">
                  <p className="font-display text-3xl text-primary">{s.n}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CARDÁPIO ───────────────────────────────────────────────────────── */}
      <section id="cardapio" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Cardápio
            </span>
            <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
              Doces para cada <span className="font-script text-gold">ocasião</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Do bolo de aniversário aos kits para grandes celebrações: tudo feito sob
              medida para o seu momento.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-white shadow-soft transition-transform group-hover:rotate-[-6deg]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Pedir orçamento
            </a>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ───────────────────────────────────────────────────── */}
      <section id="diferenciais" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Por que Fideles
            </span>
            <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
              O detalhe está <span className="font-script text-gold">no sabor</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} rounded-3xl border border-border/50 bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIMULADOR ──────────────────────────────────────────────────────── */}
      <div className="bg-cream">
        <OrderSimulator />
      </div>

      {/* ── GALERIA ────────────────────────────────────────────────────────── */}
      <section id="galeria" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Galeria
            </span>
            <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
              Criações da <span className="font-script text-gold">Fideles</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Clique em qualquer foto para ver em detalhes. Bolos e doces feitos com
              carinho para momentos especiais.
            </p>
          </div>

          <div className="mt-10 columns-2 gap-2.5 sm:mt-14 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">
            {galeria.map((g, idx) => (
              <figure
                key={g.alt}
                onClick={() => openLightbox(idx)}
                className="group relative mb-2.5 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/[0.03] transition-all duration-500 hover:shadow-elegant sm:mb-4 sm:rounded-[1.25rem] lg:mb-5"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 px-4 pb-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:px-5 sm:pb-4">
                  <p className="font-display text-sm italic text-white drop-shadow-sm sm:text-base">
                    {g.alt}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-0.5"
            >
              <Instagram className="h-4 w-4" /> Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ───────────────────────────────────────────────────────── */}
      <Dialog open={lightbox.open} onOpenChange={(o) => !o && closeLightbox()}>
        <DialogContent className="max-h-[95dvh] max-w-4xl border-0 bg-cocoa/95 p-0 shadow-elegant backdrop-blur-sm [&>button:last-child]:hidden">
          <div className="relative flex items-center justify-center">
            {/* Close */}
            <button
              aria-label="Fechar"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              aria-label="Imagem anterior"
              onClick={prevImg}
              className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="flex max-h-[85dvh] w-full items-center justify-center p-4 sm:p-8">
              <img
                src={galeria[lightbox.idx].src}
                alt={galeria[lightbox.idx].alt}
                className="max-h-[80dvh] w-auto max-w-full rounded-2xl object-contain shadow-elegant"
              />
            </div>

            {/* Next */}
            <button
              aria-label="Próxima imagem"
              onClick={nextImg}
              className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Caption + counter */}
          <div className="px-6 pb-5 text-center">
            <p className="font-display text-base italic text-white/80">
              {galeria[lightbox.idx].alt}
            </p>
            <p className="mt-1 text-xs text-white/40">
              {lightbox.idx + 1} / {galeria.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── DEPOIMENTOS ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Depoimentos
            </span>
            <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
              Quem prova, <span className="font-script text-gold">se apaixona</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <figure
                key={i}
                className="reveal reveal-delay-1 rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-4 font-display text-xl italic leading-snug text-primary">
                  "{d.text}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Avatar name={d.name} />
                  <div>
                    <span className="text-sm font-semibold text-primary">{d.name}</span>
                    <div className="mt-0.5 flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── CTA ENCOMENDA ──────────────────────────────────────────────────── */}
      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-cocoa px-8 py-16 text-center text-white shadow-elegant sm:px-16 sm:py-20">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-gold opacity-30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-rose opacity-30 blur-3xl" />
          <span className="font-script text-3xl text-gold">Vamos celebrar?</span>
          <h2 className="mt-2 text-4xl text-white sm:text-5xl">
            Encomende seu doce especial
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Conte-nos sobre sua festa, escolha sabores e deixe que cuidamos do resto com
            todo o carinho que sua celebração merece.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Pedir pelo WhatsApp
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <Instagram className="h-4 w-4" /> Ver Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTATO ────────────────────────────────────────────────────────── */}
      <section id="contato" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Contato
            </span>
            <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
              Venha nos <span className="font-script text-gold">visitar</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Estamos prontas para criar o doce perfeito para o seu momento.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Endereço
                  </p>
                  <p className="text-base text-primary">{ADDRESS_LINE1}</p>
                  <p className="text-sm text-cocoa/80">{ADDRESS_CITY}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-primary hover:underline"
                  >
                    Conversar agora
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Instagram
                  </p>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-primary hover:underline"
                  >
                    @fidelesconfeitaria
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Pedir pelo WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-0.5"
              >
                <Instagram className="h-4 w-4" /> Ver Instagram
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" /> Como chegar
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="reveal reveal-delay-1 overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Localização Confeitaria Fideles — Rua Caetés, 120, Bairro Industrial, João Monlevade"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <div className="p-6 text-center sm:p-7">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs">
                Onde estamos
              </p>
              <h3 className="mt-2 font-display text-2xl text-primary sm:text-3xl">
                Rua Caetés, 120
              </h3>
              <p className="mt-1 text-sm text-cocoa/80 sm:text-base">Bairro Industrial</p>
              <p className="text-sm text-cocoa/80 sm:text-base">João Monlevade — MG</p>
              <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
                Atendimento sob agendamento. Encomendas com antecedência mínima de 48h.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" /> Como chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-cocoa text-white/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-script text-3xl text-gold">Fideles</p>
            <p className="text-[0.7rem] font-semibold tracking-[0.3em] text-white/60">
              CONFEITARIA ARTESANAL
            </p>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Bolos e doces feitos à mão para celebrar o que importa.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Navegue
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#sobre" className="transition-colors hover:text-white">Sobre</a></li>
              <li><a href="#cardapio" className="transition-colors hover:text-white">Cardápio</a></li>
              <li><a href="#simulador" className="transition-colors hover:text-white">Simular Pedido</a></li>
              <li><a href="#galeria" className="transition-colors hover:text-white">Galeria</a></li>
              <li><a href="#faq" className="transition-colors hover:text-white">Dúvidas Frequentes</a></li>
              <li><a href="#contato" className="transition-colors hover:text-white">Contato</a></li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Horários
            </p>
            <ul className="mt-4 space-y-2">
              {horarios.map((h) => (
                <li key={h.dia} className="flex items-start gap-2 text-sm">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/70" />
                  <span>
                    <span className="text-white/60">{h.dia}:</span>{" "}
                    <span className="font-medium text-white/90">{h.hora}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/50">
              * Atendimento com agendamento prévio.
            </p>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Contato
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  @fidelesconfeitaria
                </a>
              </li>
              <li>
                <a href={EMAIL} className="break-all transition-colors hover:text-white">
                  fidelismonica46@gmail.com
                </a>
              </li>
              <li className="text-white/60">{ADDRESS_LINE1}</li>
              <li className="text-white/60">{ADDRESS_CITY}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Confeitaria Fideles · Feito com carinho.
        </div>
      </footer>
    </div>
  );
}
