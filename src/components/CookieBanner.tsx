import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "mgm_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50"
        >
          <div className="bg-background border border-border rounded-xl shadow-elevated p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie size={16} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-heading mb-1">Privacidade & Cookies</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Usamos cookies essenciais para o funcionamento do site. Ao continuar, você concorda com nossa{" "}
                  <span className="text-primary">Política de Privacidade</span> (LGPD).
                </p>
              </div>
              <button
                onClick={accept}
                aria-label="Fechar aviso de cookies"
                className="text-muted-foreground hover:text-heading transition-colors shrink-0"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={accept}
                className="flex-1 bg-primary text-primary-foreground text-xs font-semibold py-2.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                Entendi
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
