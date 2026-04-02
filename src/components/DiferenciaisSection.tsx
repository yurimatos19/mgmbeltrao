import { Link2, TrendingDown, TrendingUp, Cpu, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const diffs = [
  { icon: Link2, title: "Integração com o SUS", desc: "Atuação alinhada às diretrizes e sistemas do SUS para máxima aderência." },
  { icon: TrendingDown, title: "Redução de demanda reprimida", desc: "Estratégias para diminuir filas e ampliar o acesso ao cuidado." },
  { icon: TrendingUp, title: "Aumento de receita via indicadores", desc: "Melhoria de indicadores que impactam diretamente o financiamento." },
  { icon: Cpu, title: "Tecnologia + Operação", desc: "Não apenas sistemas — atuação prática com tecnologia e equipe." },
  { icon: Users, title: "Equipe especializada", desc: "Profissionais com experiência real em saúde pública e gestão." },
];

const DiferenciaisSection = () => (
  <section id="diferenciais" className="py-24 md:py-32">
    <div className="container">
      <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Diferenciais
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
          O que faz a MGM{" "}
          <span className="text-primary italic">diferente</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {diffs.map((d, i) => (
          <AnimatedSection
            key={d.title}
            delay={i * 0.08}
            className={i === diffs.length - 1 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none" : ""}
          >
            <div className="p-8 rounded-lg border border-border bg-card hover:shadow-elevated transition-all duration-500 h-full">
              <div className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center mb-5">
                <d.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DiferenciaisSection;
