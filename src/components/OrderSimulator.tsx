import { useState } from "react";
import { Cake, Cookie, Gift, Sparkles, MessageCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

// ── Step data ─────────────────────────────────────────────────────────────────

const PRODUCTS = [
  { id: "bolo-celebracao", label: "Bolo de Celebração", icon: Cake },
  { id: "doces-finos", label: "Doces Finos e Modelados", icon: Cookie },
  { id: "kit-festa", label: "Kit Festa Completo", icon: Gift },
  { id: "bolo-personalizado", label: "Bolo Personalizado", icon: Sparkles },
];

const GUESTS = [
  { id: "ate-10", label: "Até 10 pessoas" },
  { id: "10-20", label: "10 a 20 pessoas" },
  { id: "20-30", label: "20 a 30 pessoas" },
  { id: "30-50", label: "30 a 50 pessoas" },
  { id: "50-mais", label: "Mais de 50 pessoas" },
];

const FLAVORS_MASSA = [
  { id: "branca", label: "Massa Branca" },
  { id: "chocolate", label: "Massa de Chocolate" },
];

const FLAVORS_RECHEIO = [
  { id: "brigadeiro", label: "Brigadeiro Gourmet" },
  { id: "ninho-nutella", label: "Ninho com Nutella" },
  { id: "frutas-vermelhas", label: "Frutas Vermelhas" },
  { id: "doce-de-leite", label: "Doce de Leite" },
];

// ── Types ─────────────────────────────────────────────────────────────────────

interface Selections {
  product: string;
  guests: string;
  massa: string;
  recheio: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildMessage(s: Selections): string {
  const product = PRODUCTS.find((p) => p.id === s.product)?.label ?? s.product;
  const guests = GUESTS.find((g) => g.id === s.guests)?.label ?? s.guests;
  const massa = FLAVORS_MASSA.find((m) => m.id === s.massa)?.label ?? s.massa;
  const recheio =
    FLAVORS_RECHEIO.find((r) => r.id === s.recheio)?.label ?? s.recheio;

  return `Olá Mônica! Gostaria de fazer um orçamento de *${product}* para *${guests}*, com *${massa}* e recheio de *${recheio}*. Pode me ajudar?`;
}

// ── Step indicator ────────────────────────────────────────────────────────────

function StepBubble({
  n,
  active,
  done,
}: {
  n: number;
  active: boolean;
  done: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
          done
            ? "border-primary bg-primary text-white"
            : active
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-card text-muted-foreground"
        }`}
      >
        {done ? "✓" : n}
      </div>
    </div>
  );
}

// ── Selectable card ───────────────────────────────────────────────────────────

function SimCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`sim-card w-full text-left ${selected ? "selected" : ""}`}
    >
      {children}
    </button>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function OrderSimulator() {
  const [step, setStep] = useState(1);
  const [sel, setSel] = useState<Selections>({
    product: "",
    guests: "",
    massa: "",
    recheio: "",
  });

  const totalSteps = 3;
  const canNext =
    (step === 1 && !!sel.product) ||
    (step === 2 && !!sel.guests) ||
    (step === 3 && !!sel.massa && !!sel.recheio);

  function handleSend() {
    const msg = buildMessage(sel);
    window.open(WHATSAPP_MESSAGE(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="simulador" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Simulador de Encomendas
          </span>
          <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
            Monte o seu{" "}
            <span className="font-script text-gold">pedido ideal</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selecione as opções abaixo e envie diretamente para o WhatsApp da
            Mônica — em segundos!
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-7 shadow-elegant sm:p-10">
          {/* Step indicator */}
          <div className="mb-8 flex items-center justify-center gap-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <StepBubble n={n} active={step === n} done={step > n} />
                {n < totalSteps && (
                  <div
                    className={`h-px w-10 transition-all duration-500 sm:w-16 ${
                      step > n ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── Step 1: Produto ──────────────────────────────────── */}
          {step === 1 && (
            <div>
              <p className="mb-4 text-center font-display text-2xl font-medium text-primary">
                🎂 O que deseja encomendar?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {PRODUCTS.map(({ id, label, icon: Icon }) => (
                  <SimCard
                    key={id}
                    selected={sel.product === id}
                    onClick={() => setSel((s) => ({ ...s, product: id }))}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          sel.product === id
                            ? "bg-primary text-white"
                            : "bg-secondary text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-base font-medium text-foreground">
                        {label}
                      </span>
                    </div>
                  </SimCard>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 2: Convidados ───────────────────────────────── */}
          {step === 2 && (
            <div>
              <p className="mb-4 text-center font-display text-2xl font-medium text-primary">
                👥 Para quantas pessoas?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {GUESTS.map(({ id, label }) => (
                  <SimCard
                    key={id}
                    selected={sel.guests === id}
                    onClick={() => setSel((s) => ({ ...s, guests: id }))}
                  >
                    <span className="font-display text-base font-medium text-foreground">
                      {label}
                    </span>
                  </SimCard>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 3: Sabores ──────────────────────────────────── */}
          {step === 3 && (
            <div className="space-y-6">
              <p className="text-center font-display text-2xl font-medium text-primary">
                🍫 Qual combinação de sabores?
              </p>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Massa
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {FLAVORS_MASSA.map(({ id, label }) => (
                    <SimCard
                      key={id}
                      selected={sel.massa === id}
                      onClick={() => setSel((s) => ({ ...s, massa: id }))}
                    >
                      <span className="font-display text-base font-medium text-foreground">
                        {label}
                      </span>
                    </SimCard>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Recheio
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {FLAVORS_RECHEIO.map(({ id, label }) => (
                    <SimCard
                      key={id}
                      selected={sel.recheio === id}
                      onClick={() => setSel((s) => ({ ...s, recheio: id }))}
                    >
                      <span className="font-display text-base font-medium text-foreground">
                        {label}
                      </span>
                    </SimCard>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-secondary"
              >
                <ChevronLeft className="h-4 w-4" /> Voltar
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                type="button"
                disabled={!canNext}
                onClick={() => setStep((s) => s + 1)}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant disabled:cursor-not-allowed disabled:opacity-40"
              >
                Próximo <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={!canNext}
                onClick={handleSend}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant disabled:cursor-not-allowed disabled:opacity-40"
              >
                <MessageCircle className="h-4 w-4" /> Enviar pedido no WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
