import contactImg from '@/assets/projet.png';
const HeroProjet= () => {

  return (
        <section
      id="home"
      className="relative overflow-hidden h-[50vh] w-full" 
    >
      <img
        src={contactImg}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75"
        loading="lazy" 

        
      />
    
    </section>


  );
};

export default HeroProjet;