import AnimatedSection from "./AnimatedSection";

const specialties = [
  "Clínica Médica",
  "Pediatria",
  "Ginecologia",
  "Cardiologia",
  "Ortopedia",
  "Dermatologia",
  "Psiquiatria",
];

const EspecialidadesSection = () => (
  <section className="py-24 md:py-32 bg-card">
    <div className="container">
      <AnimatedSection className="text-center mb-16">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
          Especialidades
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Alinhadas às{" "}
          <span className="text-gradient-premium">necessidades da rede</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-10">
          {specialties.map((s) => (
            <div
              key={s}
              className="px-6 py-3 rounded-full border border-border bg-background text-heading font-medium text-sm hover:border-primary/40 hover:shadow-card transition-all duration-300"
            >
              {s}
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground max-w-xl mx-auto">
          Atuação direcionada às especialidades mais demandadas pelos municípios e pela rede assistencial.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default EspecialidadesSection;
