import Footer from "@/components/Footer";
import Heromatireil from "@/components/Heromatireil";

import MaterielSection from "@/components/MaterielSection";
import Navigation from "@/components/Navigation";

const MoyenMatiriel = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navigation />
      <Heromatireil/>
      <MaterielSection />
      <Footer />
    </div>
  );
};

export default MoyenMatiriel;
