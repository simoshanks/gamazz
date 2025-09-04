import Footer from "@/components/Footer";
import HeroProjet from "@/components/HeroProjet";
import Navigation from "@/components/Navigation";
import Projetrealisee from "@/components/Projetrealisee";
import Projetsection from "@/components/Projetsection";

const Projet = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
        <Navigation/>
        <HeroProjet />
        <Projetrealisee/>

        <Footer/>
    </div>

  );
};

export default Projet;
