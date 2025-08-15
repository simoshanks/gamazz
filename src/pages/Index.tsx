import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ConfianceSection from '@/components/ConfianceSection';
import Servicesection from '@/components/Servicesection';
import Projetsection from '@/components/Projetsection';
import Staticsection from '@/data/Staticsection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Staticsection/>
      <Servicesection/>
      <ConfianceSection />
      <Projetsection />
      
      
      <Footer />
    </div>
  );
};

export default Index;
