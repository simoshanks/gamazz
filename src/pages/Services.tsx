import ConstructionService from "@/components/ConstructionService";
import EauService from "@/components/EauService";
import Footer from "@/components/Footer";


import Sliderimg from "@/components/Sliderimg";
import VenteService from "@/components/VenteService";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
        
        
        <Sliderimg/>
        <ConstructionService/>
        <EauService/>
        <VenteService/>
        <Footer/>

    </div>


  );
};

export default Services;
