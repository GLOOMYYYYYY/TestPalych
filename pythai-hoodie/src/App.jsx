import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import PromoSection from './components/PromoSection';
import ImageMessageSection from './components/ImageMessageSection';
import ProductStatementSection from './components/ProductStatementSection';
import NFTDigitalSection from './components/NFTDigitalSection';
import DesignInspirationSection from './components/DesignInspirationSection';
import WearableExpressionSection from './components/WearableExpressionSection';
import SustainabilitySection from './components/SustainabilitySection';
import InterviewSection from './components/InterviewSection';
import NFTOwnershipSection from './components/NFTOwnershipSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <HeroSection />
      {/* <PromoSection /> */}
      <ImageMessageSection />
      <ProductStatementSection />
      <NFTDigitalSection />
      <DesignInspirationSection />
      <WearableExpressionSection />
      <SustainabilitySection />
      <InterviewSection />
      <NFTOwnershipSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
