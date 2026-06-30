import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const faqs = [
  {
    q: "Com quanto tempo de antecedência devo fazer o pedido?",
    a: "Para garantir a qualidade artesanal que a Fideles oferece, pedimos um mínimo de 48 horas de antecedência. Para bolos de casamento, 15 anos ou eventos grandes, o ideal é nos contatar com pelo menos 2 semanas de antecedência para que possamos planejar cada detalhe com carinho.",
  },
  {
    q: "Vocês entregam ou preciso retirar?",
    a: "Atendemos com retirada no endereço: Rua Caetés, 120 — Bairro Industrial, João Monlevade/MG. Entre em contato pelo WhatsApp para verificar disponibilidade de entrega na sua região.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos Pix, dinheiro e cartões de débito e crédito. Para encomendas maiores, solicitamos um sinal de 50% no momento da confirmação para garantir a reserva da data.",
  },
  {
    q: "Fazem bolos diet, sem lactose ou sem glúten?",
    a: "Sim! Trabalhamos com adaptações especiais sob consulta. Converse conosco pelo WhatsApp para discutirmos as melhores opções para suas necessidades alimentares, sem abrir mão do sabor e da qualidade.",
  },
  {
    q: "Atendem festas e eventos corporativos?",
    a: "Com muito prazer! Atendemos aniversários, casamentos, festas de 15 anos, chás de bebê, confraternizações empresariais e qualquer evento especial. Entre em contato para recebermos sua proposta e montarmos um orçamento personalizado.",
  },
  {
    q: "Como funciona o processo de encomenda?",
    a: "É simples e personalizado! (1) Entre em contato pelo WhatsApp e conte sobre o seu evento; (2) Conversamos sobre sabores, tamanho, decoração e data; (3) Confirmamos o pedido com o pagamento do sinal; (4) No dia combinado, seu doce estará pronto com todo o cuidado da Fideles.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
            Temos a <span className="font-script text-gold">resposta</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reunimos as perguntas mais comuns para tornar sua experiência ainda
            mais tranquila e especial.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-soft transition-all duration-300 hover:shadow-elegant data-[state=open]:border-primary/30 data-[state=open]:bg-secondary/30 [&>*:last-child]:border-b-0 border-b-0"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-primary hover:no-underline">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-gold opacity-70" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-1 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Fale diretamente conosco pelo WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
