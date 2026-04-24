import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const dores = [
  {
    tag: "Escalas",
    headline: "Furo de escala custa caro.",
    sub: "Plantão descoberto é risco jurídico, insatisfação de paciente e custo emergencial. Sem gestão ativa, o problema se repete.",
  },
  {
    tag: "Processos",
    headline: "Gestão médica sem processo vira incêndio diário.",
    sub: "Equipes sem fluxo definido criam retrabalho, conflitos e ineficiência que consomem tempo da liderança e margem da operação.",
  },
  {
    tag: "Risco",
    headline: "Hospital não pode depender de improviso.",
    sub: "Decisões reativas em operações críticas elevam o risco assistencial e expõem a instituição a passivos trabalhistas e regulatórios.",
  },
  {
    tag: "Resultados",
    headline: "Clínica sem indicadores perde margem.",
    sub: "Sem métricas claras de produtividade e qualidade, é impossível identificar gargalos, melhorar desempenho ou justificar investimentos.",
  },
];

const DoresSection = () => (
  <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}
    />

    <div className="container relative">
      <AnimatedSection className="max-w-xl mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Reconhece algum desses cenários?
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
          Os problemas que a MGM{" "}
          <span className="italic text-accent">resolve de verdade</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-px bg-primary-foreground/10 rounded-xl overflow-hidden border border-primary-foreground/10">
        {dores.map((d, i) => (
          <AnimatedSection key={d.tag} delay={i * 0.08}>
            <motion.div
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              transition={{ duration: 0.2 }}
              className="p-8 md:p-10 bg-primary-foreground/4 h-full flex flex-col gap-3"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent/80 border border-accent/25 rounded-full px-3 py-1 w-fit">
                {d.tag}
              </span>
              <h3 className="text-xl font-heading font-bold text-primary-foreground leading-snug">
                {d.headline}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed font-light">
                {d.sub}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.35} className="mt-10 text-center">
        <p className="text-primary-foreground/50 font-light text-sm italic">
          Se qualquer um desses cenários soa familiar, a MGM foi feita para a sua operação.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default DoresSection;
