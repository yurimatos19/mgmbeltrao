import { TrendingDown, TrendingUp, Network, Activity, DollarSign, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const impacts = [
  { icon: TrendingDown, title: "Redução de filas" },
  { icon: TrendingUp, title: "Ampliação da capacidade de atendimento" },
  { icon: Network, title: "Melhoria da organização da rede" },
  { icon: Activity, title: "Apoio ao desempenho dos indicadores" },
  { icon: DollarSign, title: "Mais eficiência no uso dos recursos" },
  { icon: ShieldCheck, title: "Fortalecimento da tomada de decisão" },
];

const ImpactoSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
          Impacto
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Impacto real na{" "}
          <span className="text-gradient-premium">gestão e no cuidado</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {impacts.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="flex items-center gap-4 bg-background rounded-xl p-6 border border-border/50 shadow-card">
              <div className="w-12 h-12 rounded-xl gradient-premium flex items-center justify-center shrink-0">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <p className="font-medium text-heading">{item.title}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactoSection;
