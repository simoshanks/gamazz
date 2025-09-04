import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroAbout from '@/components/HeroAbout';
import MessionVesion from '@/components/MessionVesion';
import OurHistory from '@/components/OurHistory';
import ValuesSection from '@/components/ValuesSection';
import Staticsection from '@/components/Staticsection';
import CompanyCard from '@/components/CompanyCard';
import ServicesAbout from '@/components/ServicesAbout';



const About = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navigation />
      <HeroAbout />
      <CompanyCard />
      <MessionVesion/>
      <ServicesAbout />
      <OurHistory />
      <Staticsection />
      <ValuesSection />
      
      
      
      <Footer />
    </div>
  );
};

export default About;
