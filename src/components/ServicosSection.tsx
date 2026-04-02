import { ClipboardList, Stethoscope, Wifi, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: ClipboardList,
    title: "Consultoria Estratégica",
    items: ["Diagnóstico da rede", "Planejamento em saúde", "Apoio à gestão", "Acompanhamento de indicadores"],
  },
  {
    icon: Stethoscope,
    title: "Serviços Médicos",
    items: ["Profissionais capacitados", "Ampliação da oferta assistencial", "Apoio à atenção básica e especializada", "Redução de filas e demandas reprimidas"],
  },
  {
    icon: Wifi,
    title: "Transformação Digital",
    items: ["Estruturação de jornadas digitais", "Apoio à modernização da rede", "Monitoramento por dados", "Integração com diretrizes do SUS"],
  },
  {
    icon: GraduationCap,
    title: "Capacitação",
    items: ["Treinamento de equipes", "Protocolos", "Qualificação operacional", "Alinhamento assistencial e gerencial"],
  },
];

const ServicosSection = () => (
  <section id="servicos" className="py-24 md:py-32">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
          Serviços
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Soluções completas{" "}
          <span className="text-gradient-premium">para a saúde</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 shadow-card h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
              </div>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
