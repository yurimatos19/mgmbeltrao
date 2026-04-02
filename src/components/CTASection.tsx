import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-premium opacity-[0.04]" />
    <div className="container relative">
      <AnimatedSection className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Vamos construir uma saúde mais{" "}
          <span className="text-gradient-premium">estruturada, eficiente</span>{" "}
          e preparada para o futuro
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
          A MGM está pronta para atuar como parceira estratégica de municípios e instituições 
          que desejam transformar gestão em resultado e ampliar o acesso com inteligência.
        </p>
        <a
          href="#"
          className="gradient-premium text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          Falar com especialista
          <ArrowRight size={20} />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
