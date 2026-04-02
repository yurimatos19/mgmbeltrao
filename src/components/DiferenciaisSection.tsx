import { Brain, Cog, BarChart3, HeartPulse, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const diffs = [
  { icon: Brain, text: "Pensa estrategicamente" },
  { icon: Cog, text: "Opera na prática" },
  { icon: BarChart3, text: "Integra tecnologia à gestão" },
  { icon: HeartPulse, text: "Entende a lógica da saúde pública" },
  { icon: Target, text: "Foca em resultado, não apenas planejamento" },
];

const DiferenciaisSection = () => (
  <section id="diferenciais" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-premium opacity-[0.03]" />
    <div className="container relative">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
          Diferenciais
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Muito além da{" "}
          <span className="text-gradient-premium">consultoria tradicional</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        {diffs.map((d, i) => (
          <AnimatedSection key={d.text} delay={i * 0.08}>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <d.icon size={24} className="text-primary" />
              </div>
              <p className="text-sm font-medium text-heading">{d.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <p className="text-2xl md:text-3xl font-heading font-bold text-gradient-premium">
          Pensamos, estruturamos e executamos.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default DiferenciaisSection;
