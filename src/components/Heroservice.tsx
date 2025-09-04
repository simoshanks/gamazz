import contactImg from '@/assets/contact1.jpg';
const Heroservice = () => {
  return (
         <section
      id="home"
      className="relative overflow-hidden h-[50vh] w-full" 
    >
      <img
        src={contactImg}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75"

        
      />
    
    </section>
  );
};

export default Heroservice;
