import { Building2, Stethoscope, UserRound, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_URL } from "@/lib/constants";

const audiences = [
  {
    icon: Building2,
    label: "Para Hospitais",
    headline: "Operação hospitalar com cobertura, controle e zero improviso",
    desc: "Gestão completa de escalas de plantão, auditoria médica, protocolos assistenciais e indicadores de desempenho. A MGM reduz o risco operacional e libera a liderança para o que realmente importa.",
    items: [
      "Cobertura garantida de plantões",
      "Auditoria e compliance médico",
      "Indicadores de produtividade e qualidade",
      "Protocolos e segurança do paciente",
    ],
    msg: "Olá! Sou gestor de hospital e quero saber como a MGM pode ajudar nossa operação.",
  },
  {
    icon: Stethoscope,
    label: "Para Clínicas",
    headline: "Processos organizados, agenda controlada, resultado crescendo",
    desc: "Estruturação de fluxos de atendimento, gestão de equipes médicas, otimização de agenda e dashboards de performance. Sua clínica funcionando com eficiência e previsibilidade.",
    items: [
      "Otimização de agenda e fluxo",
      "Gestão de equipe médica",
      "Processos e padronização",
      "Métricas de satisfação e resultado",
    ],
    msg: "Olá! Sou gestor de clínica e quero saber como a MGM pode estruturar minha operação.",
  },
  {
    icon: UserRound,
    label: "Para Médicos",
    headline: "Apoio administrativo para você focar na medicina",
    desc: "Suporte com contratos, documentação, estruturação de PJ médica e orientação para quem quer crescer com mais organização e segurança na carreira.",
    items: [
      "Estruturação de PJ médica",
      "Suporte com contratos e documentação",
      "Orientação de carreira e crescimento",
      "Conexão com oportunidades",
    ],
    msg: "Olá! Sou médico e quero saber como a MGM pode me apoiar administrativamente.",
  },
];

const ParaQuemSection = () => (
  <section id="para-quem" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden">
    <div className="absolute left-0 top-1/4 w-80 h-80 rounded-full bg-accent/4 blur-[80px] pointer-events-none" />

    <div className="container relative">
      <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Para quem é
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
          A MGM atende quem{" "}
          <span className="text-primary italic">precisa de resultado</span>
        </h2>
        <p className="text-muted-foreground font-light leading-relaxed">
          Soluções desenhadas para cada tipo de operação de saúde — sem fórmula genérica.
        </p>
      </AnimatedSection>

      <div className="grid lg:grid-cols-3 gap-6">
        {audiences.map((a, i) => (
          <AnimatedSection key={a.label} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group h-full flex flex-col p-8 rounded-2xl border border-border bg-card hover:border-primary/25 hover:shadow-elevated transition-all duration-400"
            >
              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300 shrink-0">
                  <a.icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-accent">{a.label}</span>
              </div>

              <h3 className="text-xl font-heading font-bold text-heading leading-snug mb-3">
                {a.headline}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6 flex-1">
                {a.desc}
              </p>

              <ul className="space-y-2 mb-8 border-t border-border pt-5">
                {a.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL(a.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-200"
              >
                Falar com especialista
                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ParaQuemSection;
