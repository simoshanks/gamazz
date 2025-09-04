import Footer from "@/components/Footer";
import HeroMoyen from "@/components/HeroMoyen";
import HumainSection from "@/components/HumainSection";
import Navigation from "@/components/Navigation";

const MoyenHumain = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navigation />
      <HeroMoyen />
      <HumainSection />
      <Footer />
    </div>
  );
};

export default MoyenHumain;
