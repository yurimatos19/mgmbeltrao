import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.jpg";
import logoMgm from "@/assets/logo-mgm.png";

const ease = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    {/* Subtle background accents */}
    <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-secondary/6 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/4 blur-3xl" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Brand + Message */}
        <div>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-8"
          >
            <img src={logoMgm} alt="MGM — Serviços Médicos e Consultoria" className="h-20 md:h-24 w-auto" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent font-body">
                Atuação estratégica, operacional e digital na saúde pública
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="text-3xl md:text-4xl lg:text-[2.85rem] font-heading font-bold leading-[1.15] tracking-tight mb-6"
          >
            Transformando a saúde com{" "}
            <span className="text-primary italic">estratégia, operação</span>{" "}
            e inteligência
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl font-light"
          >
            Atuamos ao lado de municípios para ampliar acesso, reduzir filas e 
            estruturar soluções completas em gestão, serviços médicos e transformação digital.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cta"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-base inline-flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              Falar com especialista
              <ArrowRight size={18} />
            </a>
            <a
              href="#solucoes"
              className="border border-primary/20 text-heading px-8 py-4 rounded-md font-semibold text-base inline-flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              Conhecer soluções
            </a>
          </motion.div>
        </div>

        {/* Right — Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Equipe médica analisando indicadores de saúde em ambiente moderno"
              className="w-full h-[400px] md:h-[480px] lg:h-[540px] object-cover"
              width={960}
              height={1080}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </div>

          {/* Decorative frame */}
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-accent/15 -z-10 hidden lg:block" />

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-elevated p-5 border border-border/50 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <ArrowRight size={18} className="text-primary -rotate-45" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-heading">+60%</p>
                <p className="text-xs text-muted-foreground">Capacidade de atendimento</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
