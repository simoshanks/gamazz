import footerTopImg from "../assets/footerTop.png"; 

const FooterTop = () => {
  return (
    
    <div className="relative bg-[#FFF8F0]">
      
      <div className="container mx-auto px-4">
        <section
          className="
            relative
            z-20
            text-white
            bg-cover
            bg-center
            bg-no-repeat
            min-h-[350px]
            flex
            items-center
            justify-center
            shadow-md
            rounded-lg
            -mb-20  /* يخلي الـsection تنزل على الفوتر */
          "
          style={{ backgroundImage: `url(${footerTopImg})` }}
        >
          
          <div className="absolute inset-0 bg-black/50 z-10 rounded-lg"></div>

          
          <p className="relative z-20 font-bold font-sans text-2xl md:text-4xl max-w-4xl text-center">
            Commencez dès maintenant votre projet avec <span className="text-yellow-400">GAMAZ</span>, partenaire de confiance pour un avenir durable et de qualité.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FooterTop;

