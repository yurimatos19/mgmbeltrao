import { ShieldCheck, Clock4, Users, Cpu, TrendingUp, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const diffs = [
  {
    icon: ShieldCheck,
    title: "Cobertura garantida, sem improviso",
    desc: "Não deixamos plantão descoberto. Mantemos banco ativo de médicos e processos de substituição que eliminam a dependência do acaso.",
  },
  {
    icon: Clock4,
    title: "Resposta rápida em situações críticas",
    desc: "Atuamos como extensão da sua equipe de gestão. Em situações de emergência operacional, a MGM responde com agilidade e solução concreta.",
  },
  {
    icon: Users,
    title: "Equipe especializada em saúde B2B",
    desc: "Não somos generalistas. Nosso time combina medicina, gestão hospitalar e tecnologia com experiência real em operações de saúde.",
  },
  {
    icon: Cpu,
    title: "Tecnologia aplicada à operação",
    desc: "Dashboards, automações e integrações que dão visibilidade em tempo real. Não apenas sistemas — tecnologia que resolve problema de verdade.",
  },
  {
    icon: TrendingUp,
    title: "Foco em resultado mensurável",
    desc: "Tudo tem indicador. Cada entrega é acompanhada por métricas claras para que gestores vejam o impacto real no negócio.",
  },
  {
    icon: FileCheck,
    title: "Compliance e auditoria rigorosos",
    desc: "Operamos dentro das normas do CFM, da ANS e da legislação trabalhista, reduzindo o risco jurídico e regulatório da sua instituição.",
  },
];

const DiferenciaisSection = () => (
  <section id="diferenciais" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/4 blur-[80px] pointer-events-none" />

    <div className="container">
      <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Diferenciais
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
          Por que escolher{" "}
          <span className="text-primary italic">a MGM</span>
        </h2>
        <p className="text-muted-foreground font-light leading-relaxed">
          Uma abordagem que combina especialização médica, capacidade operacional e tecnologia —
          tudo em uma parceria comprometida com seu resultado.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {diffs.map((d, i) => (
          <AnimatedSection key={d.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group p-7 rounded-xl border border-border bg-card hover:border-primary/25 hover:shadow-elevated transition-all duration-400 h-full flex flex-col"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <d.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-heading font-bold mb-2 text-heading">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{d.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DiferenciaisSection;
