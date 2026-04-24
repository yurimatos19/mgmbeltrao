import logoMgm from "@/assets/logo-mgm.png";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_MSG_DEFAULT, EMAIL, CNPJ } from "@/lib/constants";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Para Hospitais", href: "#para-quem" },
  { label: "Para Clínicas", href: "#para-quem" },
  { label: "Como funciona", href: "#processo" },
  { label: "Sobre a MGM", href: "#sobre" },
  { label: "Contato", href: "#cta" },
];

const contactLinks = [
  { label: "+55 (81) 9 9485-8474", href: WHATSAPP_URL(WHATSAPP_MSG_DEFAULT), external: true },
  { label: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: "Recife — PE · Brasil", href: "#", external: false },
];

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <a href="#" className="inline-block mb-5">
            <img src={logoMgm} alt="MGM Beltrão" className="h-12 w-auto" />
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xs mb-4">
            Gestão médica inteligente para hospitais, clínicas e profissionais de saúde que precisam de cobertura, controle e performance.
          </p>
          <p className="text-xs text-muted-foreground/50 mb-4">CNPJ: {CNPJ}</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">Atendimento ativo</span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-heading uppercase tracking-widest mb-5">Navegação</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-heading uppercase tracking-widest mb-5">Contato</h4>
          <ul className="space-y-3">
            {contactLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-light inline-flex items-center gap-1 group"
                >
                  {l.label}
                  {l.external && (
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container py-5 pb-24 md:pb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MGM Beltrão Serviços Médicos e Consultoria LTDA. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground/50">
          Gestão Médica B2B · Recife, PE · Brasil
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
