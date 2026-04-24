import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      setProgress(pct);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: spring, width: "100%" }}
    />
  );
};

export default ScrollProgress;
