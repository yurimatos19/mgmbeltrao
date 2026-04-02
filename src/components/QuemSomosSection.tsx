import AnimatedSection from "./AnimatedSection";

const QuemSomosSection = () => (
  <section id="quem-somos" className="py-24 md:py-32">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Uma nova forma de{" "}
            <span className="text-gradient-premium">estruturar a saúde</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A MGM é uma marca construída para atuar de forma estratégica, operacional e 
            tecnológica dentro da realidade da saúde brasileira.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Combinamos inteligência em gestão, capacidade assistencial e visão de transformação 
            digital para apoiar municípios e instituições que precisam avançar em organização 
            da rede, acesso ao cuidado, eficiência e resultado.
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed italic">
            Acreditamos que saúde de verdade exige mais do que planejamento. Exige execução, 
            acompanhamento e compromisso com impacto real.
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default QuemSomosSection;
