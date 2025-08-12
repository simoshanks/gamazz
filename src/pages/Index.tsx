import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ConfianceSection from '@/components/ConfianceSection';
import Servicesection from '@/components/Servicesection';
import Projetsection from '@/components/Projetsection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Servicesection/>
      <ConfianceSection />
      <Projetsection />
      
      
      <Footer />
    </div>
  );
};

export default Index;
