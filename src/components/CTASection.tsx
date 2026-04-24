import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { WHATSAPP_URL, WHATSAPP_MSG_CTA, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

const operacoes = [
  "Hospital",
  "Clínica",
  "Rede de Saúde",
  "Médico Autônomo / PJ",
  "Outro",
];

const CTASection = () => {
  const [form, setForm] = useState({ nome: "", empresa: "", cargo: "", whatsapp: "", operacao: "", dor: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Vim pelo site da MGM.\n\n*Nome:* ${form.nome}\n*Empresa:* ${form.empresa}\n*Cargo:* ${form.cargo}\n*WhatsApp:* ${form.whatsapp}\n*Tipo de operação:* ${form.operacao}\n*Principal desafio:* ${form.dor}`;
    window.open(WHATSAPP_URL(msg), "_blank");
    setSent(true);
  };

  const phoneFormatted = `+55 (81) 9 9485-8474`;

  return (
    <section id="cta" className="scroll-mt-24 py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-secondary/10 blur-[80px] pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — CTA */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
                Vamos conversar
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight mb-6">
              Estruture sua operação médica com{" "}
              <span className="italic text-accent">quem entende do negócio</span>
            </h2>
            <p className="text-lg text-primary-foreground/65 leading-relaxed mb-10 font-light">
              A MGM está pronta para ser sua parceira estratégica — da gestão de escalas ao
              diagnóstico completo da operação, com acompanhamento e resultado garantido.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.a
                href={WHATSAPP_URL(WHATSAPP_MSG_CTA)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-base inline-flex items-center justify-center gap-3 hover:bg-accent/90 transition-colors duration-300 shadow-elevated"
              >
                Falar no WhatsApp agora
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              <a
                href={`mailto:${EMAIL}`}
                className="border border-primary-foreground/20 text-primary-foreground/80 px-8 py-4 rounded-md font-semibold text-base inline-flex items-center justify-center hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all duration-300"
              >
                Enviar e-mail
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/40 uppercase tracking-widest mb-4">Confiança</p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-2xl font-heading font-bold text-accent">24h</p>
                  <p className="text-xs text-primary-foreground/50">Tempo médio de resposta</p>
                </div>
                <div className="w-px h-8 bg-primary-foreground/10" />
                <div>
                  <p className="text-2xl font-heading font-bold text-accent">100%</p>
                  <p className="text-xs text-primary-foreground/50">Foco em saúde B2B</p>
                </div>
                <div className="w-px h-8 bg-primary-foreground/10" />
                <div>
                  <p className="text-2xl font-heading font-bold text-accent">BR</p>
                  <p className="text-xs text-primary-foreground/50">Atuação nacional</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form + Contact */}
          <AnimatedSection delay={0.2}>
            {!sent ? (
              <form
                onSubmit={handleSubmit}
                className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 md:p-10 space-y-5"
              >
                <h3 className="text-xl font-heading font-bold mb-2">Solicitar proposta</h3>
                <p className="text-sm text-primary-foreground/50 mb-6">Preencha e responderemos em até 24h.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-primary-foreground/50 uppercase tracking-wider mb-1.5">Nome *</label>
                    <input
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full bg-primary-foreground/8 border border-primary-foreground/15 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-primary-foreground/50 uppercase tracking-wider mb-1.5">Empresa</label>
                    <input
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      placeholder="Hospital / Clínica"
                      className="w-full bg-primary-foreground/8 border border-primary-foreground/15 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-primary-foreground/50 uppercase tracking-wider mb-1.5">Cargo</label>
                    <input
                      value={form.cargo}
                      onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                      placeholder="Diretor, Gestor..."
                      className="w-full bg-primary-foreground/8 border border-primary-foreground/15 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-primary-foreground/50 uppercase tracking-wider mb-1.5">WhatsApp *</label>
                    <input
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="+55 (81) 9 0000-0000"
                      className="w-full bg-primary-foreground/8 border border-primary-foreground/15 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-primary-foreground/50 uppercase tracking-wider mb-1.5">Tipo de operação</label>
                  <select
                    value={form.operacao}
                    onChange={(e) => setForm({ ...form, operacao: e.target.value })}
                    className="w-full bg-primary-foreground/8 border border-primary-foreground/15 rounded-lg px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:border-accent/50 transition-colors"
                  >
                    <option value="" className="bg-primary text-primary-foreground">Selecione...</option>
                    {operacoes.map((o) => (
                      <option key={o} value={o} className="bg-primary text-primary-foreground">{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-primary-foreground/50 uppercase tracking-wider mb-1.5">Principal desafio</label>
                  <textarea
                    value={form.dor}
                    onChange={(e) => setForm({ ...form, dor: e.target.value })}
                    placeholder="Descreva brevemente o principal problema que quer resolver..."
                    rows={3}
                    className="w-full bg-primary-foreground/8 border border-primary-foreground/15 rounded-lg px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold text-sm hover:bg-accent/90 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Quero estruturar minha operação médica
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={28} className="text-accent -rotate-45" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Mensagem enviada!</h3>
                <p className="text-primary-foreground/60 font-light text-sm">
                  Você será redirecionado ao WhatsApp. Retornaremos em até 24h.
                </p>
              </div>
            )}

            {/* Quick contacts */}
            <div className="mt-6 space-y-3">
              <a
                href={WHATSAPP_URL(WHATSAPP_MSG_CTA)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300 border border-primary-foreground/8 hover:border-accent/30"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-primary-foreground font-medium text-sm">{phoneFormatted}</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300 border border-primary-foreground/8 hover:border-accent/30"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
                  <Mail size={16} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-0.5">E-mail</p>
                  <p className="text-primary-foreground font-medium text-sm">{EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/8">
                <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-secondary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/40 uppercase tracking-wider mb-0.5">Sede</p>
                  <p className="text-primary-foreground font-medium text-sm">Recife — PE</p>
                  <p className="text-xs text-primary-foreground/40 mt-0.5">Atuação em todo o Brasil</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
