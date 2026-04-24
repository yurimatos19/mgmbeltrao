import { CalendarClock, BarChart3, ShieldCheck, ClipboardList, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const solutions = [
  {
    icon: CalendarClock,
    number: "01",
    title: "Gestão de Escalas Médicas",
    description:
      "Cobertura total de plantões com substituições garantidas, controle de faltas e previsibilidade para a operação médica.",
    highlights: ["Cobertura e substituição 24/7", "Controle e auditoria de plantões", "Redução de furos e custos emergenciais"],
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Consultoria Operacional em Saúde",
    description:
      "Diagnóstico da operação, mapeamento de gargalos, estruturação de processos e acompanhamento por indicadores de desempenho.",
    highlights: ["Diagnóstico e plano de ação", "KPIs e dashboards de resultado", "Padronização de processos médicos"],
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Gestão Assistencial",
    description:
      "Protocolos clínicos, auditoria médica, qualidade assistencial e segurança do paciente com foco em compliance e excelência.",
    highlights: ["Protocolos e qualidade assistencial", "Auditoria médica e compliance", "Segurança do paciente"],
  },
  {
    icon: ClipboardList,
    number: "04",
    title: "Apoio Administrativo Médico",
    description:
      "Onboarding de equipes, gestão de contratos, documentação e rotinas operacionais para que a liderança foque no que importa.",
    highlights: ["Onboarding e contratos", "Comunicação e rotinas operacionais", "Suporte à gestão de equipes"],
  },
  {
    icon: Zap,
    number: "05",
    title: "Tecnologia e Automação em Saúde",
    description:
      "Integração com sistemas, automações operacionais, dashboards e relatórios inteligentes para operar com mais dados e menos ruído.",
    highlights: ["Automações e integrações", "Relatórios e dashboards em tempo real", "IA aplicada à gestão de saúde"],
  },
];

const SolucoesSection = () => (
  <section id="solucoes" className="scroll-mt-24 py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-5 pointer-events-none"
      style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
    />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

    <div className="container relative">
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Soluções
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight max-w-xl">
            Cinco pilares,{" "}
            <span className="italic text-accent">uma operação completa</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-sm font-light md:text-right">
            Do diagnóstico à execução, estruturamos sua operação médica de ponta a ponta.
          </p>
        </div>
      </AnimatedSection>

      {/* 3 + 2 layout */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {solutions.slice(0, 3).map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group h-full p-8 md:p-10 rounded-xl border border-primary-foreground/10 hover:border-accent/40 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-500 flex flex-col"
            >
              <span className="text-5xl font-heading font-bold text-primary-foreground/10 group-hover:text-accent/20 transition-colors duration-500 mb-4 block leading-none">
                {s.number}
              </span>
              <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                <s.icon size={22} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{s.title}</h3>
              <p className="text-primary-foreground/65 leading-relaxed font-light mb-6 flex-1">{s.description}</p>
              <ul className="space-y-2 border-t border-primary-foreground/10 pt-5 mt-auto">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {solutions.slice(3).map((s, i) => (
          <AnimatedSection key={s.title} delay={(i + 3) * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group h-full p-8 md:p-10 rounded-xl border border-primary-foreground/10 hover:border-accent/40 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-500 flex flex-col md:flex-row md:gap-8"
            >
              <div className="mb-4 md:mb-0 shrink-0">
                <span className="text-5xl font-heading font-bold text-primary-foreground/10 group-hover:text-accent/20 transition-colors duration-500 block leading-none mb-4">
                  {s.number}
                </span>
                <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <s.icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-heading font-bold mb-3">{s.title}</h3>
                <p className="text-primary-foreground/65 leading-relaxed font-light mb-6 flex-1">{s.description}</p>
                <ul className="space-y-2 border-t border-primary-foreground/10 pt-5 mt-auto">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolucoesSection;
