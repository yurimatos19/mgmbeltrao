import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL, WHATSAPP_MSG_CTA } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94];

const stats = [
  { value: "7 anos", label: "em saúde B2B" },
  { value: "50+", label: "operações estruturadas" },
  { value: "Zero furos", label: "na cobertura de escalas" },
  { value: "Nacional", label: "Nordeste e todo o Brasil" },
];

const HeroSection = () => (
  <section
    className="relative min-h-screen flex flex-col overflow-hidden"
    style={{ background: "var(--gradient-dark)" }}
  >
    {/* Diagonal line texture */}
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-[0.035]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -55deg,
          hsl(60 5% 95%),
          hsl(60 5% 95%) 1px,
          transparent 1px,
          transparent 72px
        )`,
      }}
    />

    {/* Gold accent line — top */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

    {/* Glow blobs */}
    <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[130px] pointer-events-none" />
    <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[110px] pointer-events-none" />

    {/* Ghost watermark */}
    <div
      aria-hidden
      className="absolute bottom-24 right-0 font-heading font-bold leading-none select-none pointer-events-none overflow-hidden"
      style={{
        fontSize: "clamp(10rem, 28vw, 28rem)",
        color: "hsl(60 5% 95% / 0.025)",
        letterSpacing: "-0.04em",
      }}
    >
      MGM
    </div>

    {/* Main content */}
    <div className="container relative z-10 flex-1 flex flex-col justify-center pt-36 pb-12">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        className="mb-10"
      >
        <span className="inline-flex items-center gap-2.5 border border-accent/40 text-accent rounded-full px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          Gestão médica B2B · Nordeste e todo o Brasil
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
        className="font-heading font-bold leading-[1.0] tracking-tight mb-10"
        style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)", color: "hsl(60 5% 95%)" }}
      >
        Sua operação médica{" "}
        <br className="hidden sm:block" />
        com{" "}
        <span className="text-gradient-gold italic">cobertura,</span>
        {" "}controle{" "}
        <br className="hidden sm:block" />
        <span className="text-gradient-gold italic">e performance</span>
      </motion.h1>

      {/* Body copy + CTAs */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-end">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="text-lg md:text-xl leading-relaxed font-light"
          style={{ color: "hsl(60 5% 95% / 0.55)" }}
        >
          Estruturamos operações médicas para hospitais, clínicas e instituições
          de saúde — com gestão de escalas, consultoria, tecnologia e
          acompanhamento contínuo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="flex flex-col sm:flex-row lg:justify-end gap-4"
        >
          <a
            href={WHATSAPP_URL(WHATSAPP_MSG_CTA)}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-base inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300 shadow-elevated"
          >
            Falar com especialista
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href={WHATSAPP_URL("Olá! Gostaria de solicitar uma proposta da MGM Beltrão.")}
            target="_blank"
            rel="noopener noreferrer"
            className="border px-8 py-4 rounded-md font-semibold text-base inline-flex items-center justify-center transition-all duration-300"
            style={{
              borderColor: "hsl(60 5% 95% / 0.18)",
              color: "hsl(60 5% 95% / 0.85)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "hsl(60 5% 95% / 0.4)";
              (e.currentTarget as HTMLAnchorElement).style.background = "hsl(60 5% 95% / 0.06)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "hsl(60 5% 95% / 0.18)";
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            Solicitar proposta
          </a>
        </motion.div>
      </div>
    </div>

    {/* Stats bar — pinned to bottom */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.75, ease }}
      className="relative z-10 mt-auto"
      style={{ borderTop: "1px solid hsl(60 5% 95% / 0.08)" }}
    >
      <div className="container grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 + i * 0.07, duration: 0.4 }}
            className="py-8 px-6 relative"
            style={{ borderRight: i < stats.length - 1 ? "1px solid hsl(60 5% 95% / 0.08)" : "none" }}
          >
            {/* Gold left accent on first stat */}
            {i === 0 && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-accent rounded-full" />
            )}
            <p
              className="text-3xl font-heading font-bold leading-none mb-1.5"
              style={{ color: "hsl(60 5% 95%)" }}
            >
              {stat.value}
            </p>
            <p className="text-sm" style={{ color: "hsl(60 5% 95% / 0.4)" }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.6, ease }}
      className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown size={16} style={{ color: "hsl(60 5% 95% / 0.25)" }} />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
