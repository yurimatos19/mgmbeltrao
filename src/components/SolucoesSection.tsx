import { Compass, Stethoscope, MonitorSmartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const solutions = [
  {
    icon: Compass,
    title: "Consultoria Estratégica em Saúde",
    description: "Diagnóstico da rede, planejamento, estruturação de fluxos e acompanhamento de indicadores para uma gestão baseada em dados e resultados.",
  },
  {
    icon: Stethoscope,
    title: "Operação com Serviços Médicos",
    description: "Equipes médicas qualificadas para ampliar a capacidade de atendimento, reduzir demandas reprimidas e fortalecer a atenção básica e especializada.",
  },
  {
    icon: MonitorSmartphone,
    title: "Transformação Digital e Interoperabilidade",
    description: "Integração com sistemas do SUS, jornadas digitais e monitoramento por dados para modernizar a gestão da saúde pública.",
  },
];

const SolucoesSection = () => (
  <section id="solucoes" className="py-24 md:py-32 bg-primary text-primary-foreground">
    <div className="container">
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Soluções
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight max-w-xl">
          Três pilares,{" "}
          <span className="italic text-accent">uma solução integrada</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.12}>
            <div className="group h-full p-8 md:p-10 rounded-lg border border-primary-foreground/10 hover:border-accent/30 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-500">
              <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-6 group-hover:bg-accent/25 transition-colors duration-300">
                <s.icon size={24} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{s.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed font-light">{s.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolucoesSection;
