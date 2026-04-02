import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import PilaresSection from "@/components/PilaresSection";
import ServicosSection from "@/components/ServicosSection";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ImpactoSection from "@/components/ImpactoSection";
import ModeloAtuacaoSection from "@/components/ModeloAtuacaoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <QuemSomosSection />
      <PilaresSection />
      <ServicosSection />
      <EspecialidadesSection />
      <DiferenciaisSection />
      <ImpactoSection />
      <ModeloAtuacaoSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
