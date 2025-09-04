import aboutImg from '@/assets/humain.jpg';

const HeroMoyen = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[50vh] w-full" 
    >
      <img
        src={aboutImg}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75" 
        
        
        
      />
      
    </section>
  );
};

export default HeroMoyen;
