import { Search, LayoutList, Map, Rocket, BarChart3, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    desc: "Mapeamos a operação em profundidade: fluxos, equipes, indicadores, gargalos e oportunidades. Sem diagnóstico sólido, não há solução real.",
  },
  {
    icon: LayoutList,
    number: "02",
    title: "Mapeamento de gargalos",
    desc: "Identificamos exatamente onde a operação perde eficiência, margem ou qualidade. Cada problema é priorizado pelo impacto que gera.",
  },
  {
    icon: Map,
    number: "03",
    title: "Plano de ação",
    desc: "Desenvolvemos um plano sob medida com metas claras, responsáveis definidos e cronograma realista — nada genérico.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementação",
    desc: "Nossa equipe atua diretamente na operação. Processos, escalas, tecnologia e equipes são estruturados com acompanhamento próximo.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Acompanhamento por indicadores",
    desc: "Tudo é medido. Relatórios periódicos, dashboards em tempo real e reuniões de alinhamento garantem visibilidade total dos resultados.",
  },
  {
    icon: RefreshCcw,
    number: "06",
    title: "Melhoria contínua",
    desc: "O trabalho não termina com a entrega inicial. Revisamos estratégias, absorvemos novos desafios e ajustamos o plano para manter a evolução.",
  },
];

const ComoTrabalhamosSection = () => (
  <section id="processo" className="scroll-mt-24 py-24 md:py-32 bg-card relative overflow-hidden">
    <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

    <div className="container relative">
      <AnimatedSection className="text-center mb-20 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Metodologia
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
          Como a MGM{" "}
          <span className="text-primary italic">trabalha</span>
        </h2>
        <p className="text-muted-foreground font-light leading-relaxed">
          Um processo estruturado em seis etapas que garante resultados reais — não promessas sem entrega.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group relative p-7 rounded-xl bg-background border border-border hover:border-primary/25 hover:shadow-elevated transition-all duration-400 h-full flex flex-col"
            >
              {/* Step number */}
              <span className="absolute top-4 right-5 text-4xl font-heading font-bold text-primary/8 group-hover:text-primary/12 transition-colors duration-300 leading-none select-none">
                {step.number}
              </span>

              <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <step.icon size={19} className="text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="text-base font-heading font-bold text-heading mb-2.5">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light flex-1">{step.desc}</p>

              {/* Connector hint */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-border hidden lg:block" />
              )}
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5} className="mt-12 text-center">
        <p className="text-sm text-muted-foreground font-light italic">
          Maturidade corporativa com presença ativa em cada etapa da jornada.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ComoTrabalhamosSection;
