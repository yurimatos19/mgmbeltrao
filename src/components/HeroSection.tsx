import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-cover.jpg";

const ease = [0.25, 0.46, 0.45, 0.94];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
    {/* Background subtle pattern */}
    <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-secondary/8 blur-3xl hidden lg:block" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl hidden lg:block" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
                Estratégia · Operação · Tecnologia
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.15] tracking-tight mb-8"
          >
            Transformando a saúde pública com{" "}
            <span className="text-primary italic">estratégia, tecnologia</span>{" "}
            e cuidado
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl font-light"
          >
            Soluções completas para ampliar atendimento, reduzir filas e melhorar 
            indicadores no SUS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
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
              Solicitar diagnóstico
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Ambiente institucional de saúde moderno"
              className="w-full h-[520px] object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          {/* Decorative border accent */}
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/20 -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
