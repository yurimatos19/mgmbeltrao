import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.jpg";
import { WHATSAPP_URL, WHATSAPP_MSG_CTA } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94];

const services = [
  "Gestão de Escalas",
  "Consultoria Operacional",
  "Gestão Assistencial",
  "Apoio Administrativo",
  "Tecnologia em Saúde",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/6 blur-[80px] pointer-events-none" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-primary/8 text-primary border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Gestão médica inteligente · Nordeste e todo o Brasil
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="text-4xl md:text-5xl lg:text-[3.1rem] font-heading font-bold leading-[1.1] tracking-tight mb-6"
          >
            Sua operação médica com{" "}
            <span className="relative">
              <span className="text-primary italic">cobertura,</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.1, ease }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/60 origin-left rounded-full"
              />
            </span>{" "}
            controle{" "}
            <span className="text-primary italic">e performance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl font-light"
          >
            Estruturamos operações médicas para hospitais, clínicas e instituições de saúde —
            com gestão de escalas, consultoria, tecnologia e acompanhamento contínuo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={WHATSAPP_URL(WHATSAPP_MSG_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-base inline-flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              Falar com especialista
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href={WHATSAPP_URL("Olá! Gostaria de solicitar uma proposta da MGM Beltrão.")}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/20 text-heading px-8 py-4 rounded-md font-semibold text-base inline-flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              Solicitar proposta
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-border"
          >
            {[
              { value: "7 anos", label: "em saúde B2B" },
              { value: "50+", label: "operações estruturadas" },
              { value: "Nacional", label: "Nordeste e todo o Brasil" },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + i * 0.08, duration: 0.4 }}
              >
                <p className="text-xl font-heading font-bold text-heading">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Equipe MGM — gestão médica e consultoria em saúde"
              className="w-full h-[420px] md:h-[500px] lg:h-[560px] object-cover"
              width={960}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/20 -z-10 hidden lg:block" />

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
            className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-elevated p-5 border border-border/50 hidden md:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <ArrowRight size={18} className="text-primary -rotate-45" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-heading">Zero furos</p>
              <p className="text-xs text-muted-foreground">Cobertura garantida de escalas</p>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease }}
            className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-lg px-4 py-2 shadow-elevated hidden md:block"
          >
            <p className="text-xs font-bold uppercase tracking-wide">Gestão B2B</p>
            <p className="text-[11px] opacity-80">Hospitais · Clínicas · Médicos</p>
          </motion.div>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5, ease }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
    >
      <span className="text-xs text-muted-foreground tracking-widest uppercase">Explorar</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ChevronDown size={18} className="text-muted-foreground" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
