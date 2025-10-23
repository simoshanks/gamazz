import constimg from "@/assets/construction.jpeg";
const ConstructionService = () => {
  return (
    <section className="py-16 px-6 bg-[#FFF8F0]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Texte */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-[#6C2E0A]">
            Service de Construction
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous réalisons des projets de construction avec expertise et 
            professionnalisme, en garantissant la qualité, la durabilité et 
            la satisfaction de nos clients.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={constimg} 
            alt="Construction"
            className="w-full max-h-80 rounded-2xl shadow-xl object-cover"
            loading="lazy" 
          />
        </div>

      </div>
    </section>
  );
};

export default ConstructionService;