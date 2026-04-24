import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import medico1 from "@/assets/medico1.jpg";
import medica2 from "@/assets/medica2.jpg";
import medica3 from "@/assets/medica3.jpg";

const depoimentos = [
  {
    quote:
      "Antes da MGM, nossa gestão de escalas era um pesadelo. Furos de plantão toda semana, custos extras e equipe sobrecarregada. Em três meses eliminamos esse problema e temos visibilidade total da operação.",
    name: "Dr. Roberto Almeida",
    role: "Diretor Médico",
    empresa: "Hospital Regional do Nordeste",
    resultado: "Zero furos",
    foto: medico1,
  },
  {
    quote:
      "O diagnóstico da MGM revelou gargalos que nunca havíamos mapeado. O plano de ação foi cirúrgico — em 60 dias nossa produtividade aumentou significativamente e o time trabalha com muito mais clareza.",
    name: "Dra. Mariana Fonseca",
    role: "Sócia-Diretora",
    empresa: "Clínica Fonseca Medicina Avançada",
    resultado: "+60% produtividade",
    foto: medica2,
  },
  {
    quote:
      "O que diferencia a MGM é que eles chegam e executam de verdade. A equipe atuou dentro da nossa operação, estruturou processos e ficou até o resultado aparecer. Isso é parceria de verdade.",
    name: "Dra. Patricia Rocha",
    role: "Gestora Operacional",
    empresa: "Rede de Clínicas VascSaúde",
    resultado: "–40% custo",
    foto: medica3,
  },
];

const DepoimentosSection = () => (
  <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
    />
    <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[130px] pointer-events-none" />

    <div className="container relative">
      <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
            Depoimentos
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
          O que dizem nossos{" "}
          <span className="italic text-accent">parceiros</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {depoimentos.map((d, i) => (
          <AnimatedSection key={d.name} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-7 flex flex-col h-full hover:border-accent/30 transition-colors duration-300"
            >
              <Quote size={28} className="text-accent/50 mb-5 shrink-0" strokeWidth={1} fill="currentColor" />

              <blockquote className="text-primary-foreground/85 leading-relaxed font-light text-sm flex-1 mb-6">
                "{d.quote}"
              </blockquote>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={d.foto}
                    alt={d.name}
                    className="w-11 h-11 rounded-full object-cover object-top border-2 border-accent/30"
                  />
                  <div>
                    <p className="font-heading font-semibold text-primary-foreground text-sm">{d.name}</p>
                    <p className="text-xs text-primary-foreground/50 mt-0.5">{d.role}</p>
                  </div>
                </div>
                <div className="bg-accent/15 border border-accent/25 rounded-lg px-4 py-2 inline-flex items-center gap-2">
                  <span className="text-accent font-heading font-bold text-sm">{d.resultado}</span>
                  <span className="text-[10px] text-primary-foreground/40 uppercase tracking-wider">resultado</span>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSection;
