import eauImg from "@/assets/eau-service.png";
const EauService = () => {
  return (
    <section className="py-16 px-6 bg-[#FFF8F0]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:flex-row-reverse">
        
        {/* Texte */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-[#6C2E0A]">
            Service de Distribution d'Eau
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous assurons l’installation, la gestion et l’entretien 
            des réseaux de distribution d’eau potable, 
            en respectant les normes de qualité et de sécurité 
            pour garantir un service fiable et durable.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={eauImg}
            alt="Distribution d'Eau"
             className="w-full max-h-80 rounded-2xl shadow-xl object-cover"
             loading="lazy" 
          />
        </div>

      </div>
    </section>
  );
};

export default EauService;
