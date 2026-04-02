import AnimatedSection from "./AnimatedSection";

const steps = [
  { number: "01", title: "Diagnóstico", desc: "Análise detalhada da rede e das necessidades locais" },
  { number: "02", title: "Planejamento", desc: "Estratégia personalizada com metas e indicadores" },
  { number: "03", title: "Implantação", desc: "Execução estruturada com equipe especializada" },
  { number: "04", title: "Operação", desc: "Atuação contínua com profissionais capacitados" },
  { number: "05", title: "Monitoramento", desc: "Acompanhamento de resultados e ajustes contínuos" },
];

const ModeloAtuacaoSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
          Metodologia
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Como{" "}
          <span className="text-gradient-premium">atuamos</span>
        </h2>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.1}>
            <div className="flex items-start gap-6 md:gap-8 relative pb-12 last:pb-0">
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 w-px h-[calc(100%-3.5rem)] bg-gradient-to-b from-primary/30 to-transparent" />
              )}
              <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center shrink-0 text-primary-foreground font-heading font-bold text-sm">
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ModeloAtuacaoSection;
