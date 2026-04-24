import { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap, Play } from "lucide-react";
import gabiImg from "@/assets/gabi.jpg";
import videoGabi from "@/assets/video_gabi.mp4";

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

const QuemSomosSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="sobre" className="scroll-mt-24 py-20 md:py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-primary/4 blur-[60px] pointer-events-none" />

      <div className="container">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 lg:gap-16 items-start">

          {/* ── VÍDEO VERTICAL (esquerda no desktop, topo no mobile) ── */}
          <AnimatedSection>
            {/* Label só no mobile — aparece antes do vídeo */}
            <div className="flex items-center gap-3 mb-5 lg:hidden">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
                Sobre a MGM
              </span>
            </div>

            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div
                className="relative rounded-2xl overflow-hidden shadow-elevated cursor-pointer group"
                style={{ aspectRatio: "9/16" }}
                onClick={!playing ? handlePlay : undefined}
              >
                <video
                  ref={videoRef}
                  src={videoGabi}
                  className="w-full h-full object-cover"
                  controls={playing}
                  playsInline
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                />

                {!playing && (
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 backdrop-blur-[2px] transition-colors duration-300 flex flex-col items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.94 }}
                      className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-elevated mb-5"
                    >
                      <Play size={28} className="text-accent-foreground ml-1" fill="currentColor" />
                    </motion.div>
                    <p className="text-primary-foreground font-semibold text-lg">
                      Assistir palestra
                    </p>
                    <p className="text-primary-foreground/60 text-sm mt-1">
                      Gabriela Beltrão — Gestão Médica
                    </p>
                  </div>
                )}
              </div>

              {/* Decorative frame — só desktop */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary/15 -z-10 hidden lg:block" />
            </div>
          </AnimatedSection>

          {/* ── TEXTO + FOTO (direita no desktop, abaixo no mobile) ── */}
          <AnimatedSection delay={0.15}>
            {/* Label só no desktop */}
            <div className="hidden lg:flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
                Sobre a MGM
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight mb-2">
              Gestão médica{" "}
              <span className="text-primary italic">séria, comprometida e especializada</span>
            </h2>

            {/* ── Foto + nome inline ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex items-center gap-4 mt-6 mb-6 p-4 rounded-xl bg-card border border-border/50 shadow-card"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-accent/30 ring-offset-2 ring-offset-background shrink-0">
                <img
                  src={gabiImg}
                  alt="Maria Gabriela Beltrão — Fundadora MGM"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-heading text-base md:text-lg">
                  Maria Gabriela Beltrão
                </p>
                <p className="text-muted-foreground text-sm">Fundadora · MGM Beltrão</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="w-6 h-6 rounded-md bg-accent/15 flex items-center justify-center">
                    <GraduationCap size={12} className="text-accent" />
                  </div>
                  <span className="text-xs text-muted-foreground">MBA Gestão da Saúde · Product Growth PM3</span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4 mb-7">
              <p className="text-muted-foreground leading-relaxed text-base font-light">
                A MGM Beltrão nasceu da trajetória de Gabriela Beltrão — especialista com 7 anos
                em saúde digital, inovação e gestão de operações médicas em algumas das maiores
                empresas de saúde do Brasil.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base font-light">
                Combinamos expertise de mercado, visão de gestão e tecnologia para estruturar
                operações que reduzem risco, aumentam eficiência e entregam resultado mensurável.
              </p>
            </div>

            <ul className="space-y-2.5 mb-7">
              {credenciais.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-sm text-muted-foreground">{c}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-5 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={13} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  Trajetória profissional em
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {background.map((b, i) => (
                  <motion.div
                    key={b.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                    className="flex flex-wrap items-center gap-x-2 gap-y-0.5"
                  >
                    <span className="text-sm font-semibold text-heading">{b.name}</span>
                    <span className="text-muted-foreground/40 hidden sm:inline">·</span>
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
};

export default QuemSomosSection;
