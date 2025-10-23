import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import projet1 from "@/assets/construction.jpeg";
import projet2 from "@/assets/eau-service.png";
import projet3 from "@/assets/vente.png";

const services = [
  { id: 1, title: "Construction", image: projet1 },
  { id: 2, title: "Eau et Assainissement", image: projet2 },
  { id: 3, title: "Vente et Fourniture", image: projet3 },
];

const Sliderimg = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Auto-rotation pour montrer chaque service
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const getDepth = () => {
    if (windowWidth < 640) return 180;
    if (windowWidth < 768) return 220;
    if (windowWidth < 1024) return 260;
    return 300;
  };

  return (
    <div>
      {/* Navigation */}
      <div className="bg-white shadow-md z-20 relative">
        <Navigation />
      </div>

      {/* Section principale */}
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#6C2E0A] via-[#8B4513]/80 to-[#FFF8F0] flex flex-col justify-center items-center overflow-hidden px-3">
        
        {/* Titre */}
        <div
          className="relative z-10 text-center mb-8 sm:mb-12 animate-fadeIn"
          style={{ marginTop: "6rem" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6702A] drop-shadow-lg mb-4">
            Nos Services
          </h2>
          <p className="text-gray-200 mt-3 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-3 leading-relaxed">
            Découvrez notre expertise dans la construction, l'installation d'eau potable 
            et la vente de matériaux de qualité pour tous vos projets.
          </p>
        </div>

        {/* Conteneur du slider - محسن للتركيز */}
        <div className="relative 
                        w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px]
                        h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]
                        perspective-[1000px] mb-12">
          
          {/* Carte centrale (التركيز الرئيسي) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                          w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px]
                          h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]
                          rounded-2xl shadow-2xl overflow-hidden
                          transform-gpu transition-all duration-700
                          border-4 border-white/30
                          z-20">
            <img
              src={services[currentIndex].image}
              alt={services[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#E6702A] to-[#6C2E0A] text-center py-3 sm:py-4">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide drop-shadow-lg">
                {services[currentIndex].title}
              </span>
            </div>
          </div>

          {/* Cartes latérales (متراجعة للخلف) */}
          <div className="absolute w-full h-full"
               style={{
                 transformStyle: "preserve-3d",
                 transform: `rotateY(${currentIndex * -120}deg)`,
                 transition: 'transform 1s ease-in-out'
               }}>
            
            {services.map((service, i) => {
              const angle = (i * 120); // 120 درجة لكل عنصر (360/3)
              const depth = getDepth();
              const isCurrent = i === currentIndex;

              if (isCurrent) return null; // نعرضو في المركز الرئيسي

              return (
                <div
                  key={service.id}
                  className="absolute 
                             w-[200px] sm:w-[240px] md:w-[300px] lg:w-[350px]
                             h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px]
                             left-1/2 top-1/2
                             rounded-xl shadow-lg overflow-hidden 
                             transform-gpu transition-all duration-500
                             border-2 border-white/20
                             opacity-70"
                  style={{
                    transform: `
                      translate(-50%, -50%) 
                      rotateY(${angle}deg) 
                      translateZ(${depth}px)
                    `,
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-[#6C2E0A]/70 text-center py-2">
                    <span className="text-white text-sm sm:text-base font-semibold">
                      {service.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* indicateurs */}
        <div className="flex gap-4 mb-8">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#E6702A] scale-125' 
                  : 'bg-[#E6702A]/40 hover:bg-[#E6702A]/60'
              }`}
            />
          ))}
        </div>

        {/* Animation CSS */}
        <style>
          {`
            @keyframes subtle-float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            
            .perspective-1000 {
              perspective: 1000px;
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Sliderimg;