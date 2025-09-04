import { useEffect, useRef, useState } from "react";
import projet1 from "@/assets/construction.jpg";
import projet2 from "@/assets/eau-service.png";
import projet3 from "@/assets/vente.png";
import Navigation from "@/components/Navigation";

const services = [
  { id: 1, title: "Construction", image: projet1 },
  { id: 2, title: "Eau et Assainissement", image: projet2 },
  { id: 3, title: "Vente et Fourniture", image: projet3 },
];

const Sliderimg = () => {
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number>();
  const step = 0.25;

  const animate = () => {
    setRotation(prev => (prev - step) % 360); 
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => requestRef.current && cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div>
      
      <div className="bg-white shadow-md z-20 relative">
        <Navigation />
      </div>

      
      <section className="relative h-[80vh] bg-gradient-to-b from-[#6C2E0A] via-[#8B4513]/80 to-[#FFF8F0] overflow-hidden flex flex-col justify-center items-center">
        
        <div className="relative z-10 text-center mb-10 animate-fadeIn" style={{ marginTop: "6rem" }}>
          <h2 className="text-5xl font-extrabold text-[#E6702A] drop-shadow-lg">
            Nos Services
          </h2>
          <p className="text-gray-300 mt-3 text-lg max-w-xl mx-auto">
            Découvrez notre expertise dans la construction, l’installation d’eau potable et la vente de matériaux de qualité.
          </p>
        </div>

        
        <div className="relative w-[500px] h-[380px] mx-auto perspective-[1400px]">
          <div
            className="absolute w-full h-full transition-transform duration-1000 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {services.map((service, i) => {
              const angle = (i * 360) / services.length;
              const rotationMod = ((rotation + angle) % 360 + 360) % 360;
              const isFront = rotationMod < 90 || rotationMod > 270;

              return (
                <div
                  key={service.id}
                  className="absolute w-[480px] h-[340px] left-[10px] top-[10px] rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform-gpu transition-transform duration-700 hover:scale-110 animate-zoomIn"
                  style={{ transform: `rotateY(${angle}deg) translateZ(520px)` }}
                >
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      opacity: isFront ? 1 : 0.5,
                      backgroundColor: isFront ? "transparent" : "rgba(230, 112, 42, 0.3)",
                      transition: "opacity 0.3s ease, background-color 0.3s ease",
                      backdropFilter: isFront ? "none" : "blur(4px)",
                      borderRadius: "12px"
                    }}
                  />

                  
                  <div
                    className={`absolute bottom-0 left-0 w-full z-20 transition-opacity duration-500 ${
                      isFront ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="bg-[#6C2E0A]/70 w-full text-center py-3">
                      <span className="text-white text-xl font-semibold tracking-wide drop-shadow-md">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sliderimg;
