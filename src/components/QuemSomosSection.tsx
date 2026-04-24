import gabiImg from "@/assets/gabi.jpg";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap } from "lucide-react";
import { CNPJ } from "@/lib/constants";

const background = [
  { name: "Amigo Tech", desc: "Maior empresa da AL em contabilidade médica" },
  { name: "TI.Saúde · DPSP", desc: "Uma das maiores redes farmacêuticas do Brasil" },
  { name: "TASCOM", desc: "Saúde digital e transformação B2G" },
];

const credenciais = [
  "MBA Executiva em Gestão da Saúde",
  "Especialização em Product Growth (PM3)",
  "7 anos em novos negócios e inovação digital em saúde",
  "Gestão de carteiras com Unimed, Cassems e Porto Seguro",
];

const QuemSomosSection = () => (
  <section id="sobre" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden">
    <div className="absolute left-0 top-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
    <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-primary/4 blur-[60px] pointer-events-none" />

    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Gabi photo side */}
        <AnimatedSection>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={gabiImg}
                alt="Maria Gabriela Beltrão — Fundadora MGM"
                className="w-full h-[420px] md:h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary-foreground font-heading font-bold text-xl">Maria Gabriela Beltrão</p>
                <p className="text-primary-foreground/70 text-sm mt-0.5">Fundadora · MGM Beltrão</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary/15 -z-10 hidden lg:block" />

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-background rounded-xl shadow-elevated p-4 border border-border/50 hidden md:flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <GraduationCap size={16} className="text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-heading">MBA Gestão da Saúde</p>
                <p className="text-[10px] text-muted-foreground">+ Product Growth · PM3</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-elevated hidden md:block"
            >
              <p className="text-xs font-bold uppercase tracking-wide">7 anos</p>
              <p className="text-[11px] opacity-70">Saúde B2B · Digital</p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Text side */}
        <AnimatedSection delay={0.15}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
              Sobre a MGM
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-6">
            Gestão médica{" "}
            <span className="text-primary italic">séria, comprometida e especializada</span>
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground leading-relaxed text-base font-light">
              A MGM Beltrão nasceu da trajetória de Gabriela Beltrão — especialista com 7 anos
              em saúde digital, inovação e gestão de operações médicas em algumas das maiores
              empresas de saúde do Brasil.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base font-light">
              Combinamos expertise de mercado, visão de gestão e tecnologia para estruturar
              operações que reduzem risco, aumentam eficiência e entregam resultado mensurável —
              com presença ativa em cada etapa da jornada.
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {credenciais.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={17} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-sm text-muted-foreground">{c}</span>
              </motion.li>
            ))}
          </ul>

          {/* Background companies */}
          <div className="pt-6 border-t border-border">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={13} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Trajetória profissional em</span>
            </div>
            <div className="flex flex-col gap-3">
              {background.map((b, i) => (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-sm font-semibold text-heading">{b.name}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="text-xs text-muted-foreground">{b.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default QuemSomosSection;
