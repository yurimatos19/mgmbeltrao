import AnimatedSection from "./AnimatedSection";

const metrics = [
  { value: "–40%", label: "Redução de filas", desc: "Diminuição significativa do tempo de espera" },
  { value: "+60%", label: "Produtividade", desc: "Aumento na capacidade de atendimento" },
  { value: "+35%", label: "Indicadores", desc: "Melhoria nos indicadores de desempenho" },
  { value: "3x", label: "Eficiência", desc: "Mais resultados com os mesmos recursos" },
];

const ResultadosSection = () => (
  <section id="resultados" className="py-24 md:py-32 bg-card">
    <div className="container">
      <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Impacto
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
          Resultados que{" "}
          <span className="text-primary italic">transformam</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1}>
            <div className="text-center p-8">
              <span className="text-4xl md:text-5xl font-heading font-bold text-primary block mb-2">
                {m.value}
              </span>
              <span className="text-sm font-semibold text-heading uppercase tracking-wide block mb-2">
                {m.label}
              </span>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ResultadosSection;
