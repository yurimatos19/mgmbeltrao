import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />

    <div className="container relative">
      <AnimatedSection className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight mb-6">
          Leve a saúde do seu município para{" "}
          <span className="italic text-accent">outro nível</span>
        </h2>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10 font-light">
          A MGM está pronta para atuar como parceira estratégica na transformação 
          da gestão em resultado e na ampliação do acesso com inteligência.
        </p>
        <a
          href="#"
          className="bg-accent text-accent-foreground px-10 py-4 rounded-md font-semibold text-base inline-flex items-center gap-3 hover:bg-accent/90 transition-colors duration-300"
        >
          Agendar conversa
          <ArrowRight size={18} />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
