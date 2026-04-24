import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_URL, WHATSAPP_MSG_CTA } from "@/lib/constants";

const faqs = [
  {
    q: "A MGM atende hospitais e clínicas de qualquer porte?",
    a: "Sim. Nossa metodologia é escalável para pequenas clínicas, médias redes e hospitais de grande porte. O escopo é personalizado conforme a realidade e os desafios específicos de cada operação — nunca usamos fórmula pronta.",
  },
  {
    q: "Como funciona a gestão de escalas médicas da MGM?",
    a: "Assumimos a operação de escalas de ponta a ponta: planejamento, captação de médicos, substituições, controle de faltas e auditoria de plantões. Mantemos banco ativo de profissionais para garantia de cobertura sem interrupção, 24/7.",
  },
  {
    q: "Em quanto tempo é possível ver resultados concretos?",
    a: "Os primeiros resultados operacionais costumam aparecer entre 30 e 60 dias após o início da execução. Indicadores de produtividade e eficiência são verificáveis dentro do primeiro ciclo de acompanhamento. O prazo exato depende do escopo e do estado inicial da operação.",
  },
  {
    q: "A MGM atende médicos autônomos e PJ médica?",
    a: "Sim. Oferecemos suporte administrativo para médicos que querem operar com mais segurança e organização — desde estruturação de PJ, contratos, documentação e compliance até orientação de carreira e conexão com oportunidades.",
  },
  {
    q: "Como é feito o acompanhamento durante a parceria?",
    a: "Cada projeto tem um gestor dedicado. Realizamos reuniões periódicas de alinhamento, entregamos relatórios de desempenho mensais e mantemos dashboards em tempo real disponíveis para os gestores. A comunicação é direta e contínua.",
  },
  {
    q: "A MGM opera somente em Recife ou em todo o Brasil?",
    a: "Nossa sede é em Recife — PE, mas atuamos com operações presenciais e remotas em todo o Brasil. Nossa equipe tem capacidade de deslocamento e estrutura para atender parceiros em qualquer região do país.",
  },
];

const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 0.05}>
      <div className={`border-b border-border transition-colors duration-200 ${open ? "border-primary/20" : ""}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-start justify-between gap-4 py-5 text-left group"
          aria-expanded={open}
        >
          <span className={`font-heading font-semibold text-base leading-snug transition-colors duration-200 ${open ? "text-primary" : "text-heading group-hover:text-primary"}`}>
            {q}
          </span>
          <span className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
            {open ? <Minus size={11} strokeWidth={2.5} /> : <Plus size={11} strokeWidth={2.5} />}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm text-muted-foreground leading-relaxed font-light">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

const FaqSection = () => (
  <section id="faq" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden">
    <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-accent/4 blur-[100px] pointer-events-none" />
    <div className="container relative">
      <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
        <AnimatedSection>
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5">
              Perguntas{" "}
              <span className="text-primary italic">frequentes</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Tire suas dúvidas sobre como a MGM pode transformar a gestão da sua operação de saúde.
            </p>
            <a
              href={WHATSAPP_URL(WHATSAPP_MSG_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/30 hover:border-primary transition-colors duration-200 pb-0.5"
            >
              Não encontrou sua resposta? Fale com um especialista
            </a>
          </div>
        </AnimatedSection>
        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FaqSection;
