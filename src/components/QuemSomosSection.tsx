import AnimatedSection from "./AnimatedSection";

const QuemSomosSection = () => (
  <section id="sobre" className="py-24 md:py-32">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
              Sobre a MGM
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-8">
            Inteligência aplicada à{" "}
            <span className="text-primary italic">gestão da saúde</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              A MGM combina consultoria estratégica, capacidade operacional com equipes 
              médicas qualificadas e tecnologia integrada ao SUS para oferecer soluções 
              completas a municípios e instituições de saúde.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Atuamos em toda a cadeia — do diagnóstico à execução — com foco em ampliar 
              o acesso ao cuidado, melhorar indicadores e trazer eficiência real para a 
              gestão pública de saúde.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso modelo une inteligência em dados, transformação digital e operação 
              assistencial para gerar resultados mensuráveis e sustentáveis.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-px bg-accent" />
              <p className="text-sm font-medium text-accent italic font-heading">
                Estratégia que se transforma em resultado.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default QuemSomosSection;
