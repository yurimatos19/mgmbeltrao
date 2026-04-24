import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useCountUp } from "@/hooks/useCountUp";

interface MetricCardProps {
  prefix?: string;
  value: number;
  suffix?: string;
  staticDisplay?: string;
  label: string;
  desc: string;
  inView: boolean;
  delay: number;
}

const MetricCard = ({ prefix = "", value, suffix = "", staticDisplay, label, desc, inView, delay }: MetricCardProps) => {
  const count = useCountUp(value, 1800, inView);
  const display = staticDisplay ?? `${prefix}${count}${suffix}`;
  return (
    <AnimatedSection delay={delay}>
      <div className="group text-center p-8 rounded-xl border border-border/60 bg-background hover:border-primary/30 hover:shadow-elevated transition-all duration-500 h-full">
        <div className="mb-3">
          <span className="text-5xl md:text-6xl font-heading font-bold text-primary">
            {display}
          </span>
        </div>
        <span className="text-sm font-bold text-heading uppercase tracking-widest block mb-2">
          {label}
        </span>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </AnimatedSection>
  );
};

const ResultadosSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultados" ref={ref} className="scroll-mt-24 py-24 md:py-32 bg-card">
      <div className="container">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
              Impacto real
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
            Números que{" "}
            <span className="text-primary italic">comprovam</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Indicadores concretos de operações onde a MGM atuou como parceira estratégica.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            value={0}
            staticDisplay="ZERO"
            suffix=" furos"
            label="Escalas descobertas"
            desc="Cobertura garantida de plantões com substituição ativa"
            inView={inView}
            delay={0}
          />
          <MetricCard
            prefix="–"
            value={40}
            suffix="%"
            label="Redução de custo"
            desc="Queda no custo operacional de escalas emergenciais"
            inView={inView}
            delay={0.1}
          />
          <MetricCard
            prefix="+"
            value={60}
            suffix="%"
            label="Produtividade"
            desc="Aumento de capacidade assistencial sem aumento de custo"
            inView={inView}
            delay={0.2}
          />
          <MetricCard
            value={3}
            suffix="x"
            label="Mais eficiência"
            desc="Mais resultado com os recursos já disponíveis na operação"
            inView={inView}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default ResultadosSection;
