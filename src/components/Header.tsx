import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoMgm from "@/assets/logo-mgm.png";
import { WHATSAPP_URL, WHATSAPP_MSG_CTA } from "@/lib/constants";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["sobre", "solucoes", "para-quem", "diferenciais", "resultados", "faq", "cta"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const links = [
    { label: "Soluções", href: "#solucoes", id: "solucoes" },
    { label: "Para quem", href: "#para-quem", id: "para-quem" },
    { label: "Como funciona", href: "#processo", id: "processo" },
    { label: "Sobre", href: "#sobre", id: "sobre" },
    { label: "Contato", href: "#cta", id: "cta" },
  ];

  const logo = logoMgm;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary ${scrolled ? "shadow-lg" : ""}`}>
      <div className="container flex items-center justify-between h-24">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="MGM Beltrão — Gestão Médica e Consultoria"
            className="h-16 w-auto transition-all duration-300"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 relative ${
                activeSection === l.id
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {l.label}
              {activeSection === l.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </a>
          ))}
          <a
            href={WHATSAPP_URL(WHATSAPP_MSG_CTA)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-accent/80 transition-colors duration-300"
          >
            Falar com especialista
          </a>
        </nav>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === l.id ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL(WHATSAPP_MSG_CTA)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold text-center"
              >
                Falar com especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
