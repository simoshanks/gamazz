import venteBg from "@/assets/vente.png";
const VenteService = () => {
  return (
    <section className="py-16 px-6 bg-[#FFF8F0]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Texte */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-[#6C2E0A]">
            Service de Vente et Fourniture
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous proposons la vente et la fourniture de matériaux
            de construction, d’équipements et de solutions adaptées
            aux besoins de nos clients, en mettant l’accent sur la qualité
            et la disponibilité des produits.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={venteBg}
            alt="Vente et Fourniture"
            className="w-full max-h-80 rounded-2xl shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default VenteService;
