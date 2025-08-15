import Footer from "@/components/Footer";
import HeroMoyen from "@/components/HeroMoyen";
import MaterielSection from "@/components/MaterielSection";
import Navigation from "@/components/Navigation";

const MoyenMatiriel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroMoyen />
      <MaterielSection />
      <Footer />
    </div>
  );
};

export default MoyenMatiriel;
