import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import videoGabi from "@/assets/video_gabi.mp4";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[100px] pointer-events-none" />

      <div className="container">
        <AnimatedSection className="text-center mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent font-body">
              Autoridade
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
            Quem lidera{" "}
            <span className="text-primary italic">a MGM</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Gabriela Beltrão compartilha sua visão sobre gestão médica e inovação em saúde.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-sm mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-primary/5" style={{ aspectRatio: "9/16" }}>
              <video
                ref={videoRef}
                src={videoGabi}
                className="w-full h-full object-cover"
                controls={playing}
                playsInline
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />

              {!playing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-primary/40 backdrop-blur-sm cursor-pointer group"
                  onClick={handlePlay}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-elevated mb-4"
                  >
                    <Play size={28} className="text-accent-foreground ml-1" fill="currentColor" />
                  </motion.div>
                  <p className="text-primary-foreground font-semibold text-lg">Assistir palestra</p>
                  <p className="text-primary-foreground/60 text-sm mt-1">Gabriela Beltrão — Gestão Médica e Inovação</p>
                </motion.div>
              )}
            </div>

            {/* Speaker info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-border"
            >
              {[
                { label: "Especialista", value: "Gestão Médica B2B" },
                { label: "Experiência", value: "7 anos em saúde digital" },
                { label: "Formação", value: "MBA Gestão da Saúde" },
              ].map((item) => (
                <div key={item.label} className="text-center px-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-heading">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoSection;
