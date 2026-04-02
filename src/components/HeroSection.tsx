import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-abstract.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
    </div>

    {/* Decorative accent */}
    <div className="absolute top-32 right-16 w-72 h-72 rounded-full bg-accent/10 blur-3xl hidden lg:block" />
    <div className="absolute bottom-20 right-48 w-40 h-40 rounded-full bg-primary/10 blur-2xl hidden lg:block" />

    <div className="container relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-6">
            Estratégia · Operação · Tecnologia
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight mb-6"
        >
          Transformando a saúde com{" "}
          <span className="text-gradient-premium">estratégia, operação</span>{" "}
          e inteligência
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
        >
          A MGM atua ao lado de municípios e instituições de saúde para ampliar acesso, 
          reduzir demandas reprimidas e estruturar soluções completas em gestão, serviços 
          médicos e transformação digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#cta"
            className="gradient-premium text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Falar com especialista
            <ArrowRight size={18} />
          </a>
          <a
            href="#pilares"
            className="border border-border text-heading px-8 py-4 rounded-lg font-semibold text-base inline-flex items-center justify-center hover:bg-muted transition-colors"
          >
            Conhecer soluções
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
