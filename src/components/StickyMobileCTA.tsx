import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_MSG_CTA } from "@/lib/constants";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 safe-bottom">
            <a
              href={WHATSAPP_URL(WHATSAPP_MSG_CTA)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-primary text-primary-foreground w-full py-3.5 rounded-xl font-semibold text-sm shadow-elevated"
            >
              <MessageCircle size={18} />
              Falar com especialista agora
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
