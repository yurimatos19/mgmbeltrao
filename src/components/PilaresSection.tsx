import { Lightbulb, Users, MonitorSmartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: Lightbulb,
    title: "Estratégia",
    description: "Diagnóstico, planejamento, organização da rede, estruturação de fluxos e foco em indicadores.",
  },
  {
    icon: Users,
    title: "Operação",
    description: "Atuação com médicos e profissionais capacitados para apoiar demandas reprimidas e ampliar a capacidade de atendimento.",
  },
  {
    icon: MonitorSmartphone,
    title: "Tecnologia",
    description: "Transformação digital, integração com sistemas do SUS, monitoramento e apoio à gestão baseada em dados.",
  },
];

const PilaresSection = () => (
  <section id="pilares" className="py-24 md:py-32 bg-card">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
          Nossos Pilares
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Três frentes, uma{" "}
          <span className="text-gradient-premium">solução completa</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12}>
            <div className="group bg-background rounded-2xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow duration-500 h-full border border-border/50">
              <div className="w-14 h-14 rounded-xl gradient-premium flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <p.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PilaresSection;
