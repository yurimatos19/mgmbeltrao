import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Resultados", href: "#resultados" },
    { label: "Contato", href: "#cta" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex flex-col">
          <span className="font-heading text-2xl font-bold tracking-tight text-heading">MGM</span>
          <span className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground font-medium -mt-0.5">
            Serviços Médicos e Consultoria
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            Falar com especialista
          </a>
        </nav>

        <button
          className="md:hidden text-heading"
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
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
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
