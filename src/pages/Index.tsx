import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DoresSection from "@/components/DoresSection";
import SolucoesSection from "@/components/SolucoesSection";
import ParaQuemSection from "@/components/ParaQuemSection";
import ComoTrabalhamosSection from "@/components/ComoTrabalhamosSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import ResultadosSection from "@/components/ResultadosSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import VideoSection from "@/components/VideoSection";
import FaqSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import CookieBanner from "@/components/CookieBanner";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => (
  <>
    <ScrollProgress />
    <Header />
    <main>
      <HeroSection />
      <DoresSection />
      <SolucoesSection />
      <ParaQuemSection />
      <ComoTrabalhamosSection />
      <DiferenciaisSection />
      <DepoimentosSection />
      <ResultadosSection />
      <QuemSomosSection />
      <VideoSection />
      <FaqSection />
      <CTASection />
    </main>
    <Footer />
    <WhatsAppButton />
    <CookieBanner />
    <StickyMobileCTA />
  </>
);

export default Index;
