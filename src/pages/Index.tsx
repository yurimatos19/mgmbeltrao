import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import SolucoesSection from "@/components/SolucoesSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ResultadosSection from "@/components/ResultadosSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <QuemSomosSection />
      <SolucoesSection />
      <DiferenciaisSection />
      <ResultadosSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
