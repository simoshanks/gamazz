import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import projet1 from "@/assets/construction.jpg";
import projet2 from "@/assets/eau-service.png";
import projet3 from "@/assets/vente.png";

const services = [
  { id: 1, title: "Construction", image: projet1 },
  { id: 2, title: "Eau et Assainissement", image: projet2 },
  { id: 3, title: "Vente et Fourniture", image: projet3 },
];

const Sliderimg = () => {
  useEffect(() => {
    // ممكن مستقبلاً نزيد تحكم فالسرعة أو الاتجاه
  }, []);

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white shadow-md z-20 relative">
        <Navigation />
      </div>

      {/* Section principale */}
      <section className="relative h-[90vh] bg-gradient-to-b from-[#6C2E0A] via-[#8B4513]/80 to-[#FFF8F0] flex flex-col justify-center items-center overflow-hidden">
        {/* Titre */}
        <div
          className="relative z-10 text-center mb-10 animate-fadeIn"
          style={{ marginTop: "6rem" }}
        >
          <h2 className="text-5xl font-extrabold text-[#E6702A] drop-shadow-lg">
            Nos Services
          </h2>
          <p className="text-gray-300 mt-3 text-lg max-w-xl mx-auto">
            Découvrez notre expertise dans la construction, l’installation d’eau potable et la vente de matériaux de qualité.
          </p>
        </div>

        {/* Cercle 3D tournant */}
        <div className="relative w-[500px] h-[400px] perspective-[1200px]">
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              animation: "spin 25s linear infinite",
            }}
          >
            {services.map((service, i) => {
              const angle = (i * 360) / services.length;
              return (
                <div
                  key={service.id}
                  className="absolute w-[480px] h-[340px] left-[10px] top-[10px] rounded-2xl shadow-2xl overflow-hidden transform-gpu transition-transform duration-700 hover:scale-110"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(520px)`,
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy" 
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-[#6C2E0A]/70 text-center py-3">
                    <span className="text-white text-xl font-semibold tracking-wide drop-shadow-md">
                      {service.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animation CSS */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotateY(0deg); }
              100% { transform: rotateY(-360deg); }
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Sliderimg;
