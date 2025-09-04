import { useEffect, useRef, useState } from "react";

const Staticsection = () => {
  const stats = [
    { label: "ANS D'EXPÉRIENCE", target: 20 },
    { label: "MACHINES ET CAMIONS", target: 110 },
    { label: "MOYENS HUMAIN", target: 76 },
    { label: "PROJETS REALISEE", target: 21 },
  ];

  const countersRef = useRef([]);
  const sectionRef = useRef();
  const [startAnimation, setStartAnimation] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    if (!startAnimation) return;

    countersRef.current.forEach((el, index) => {
      const target = stats[index].target;
      let count = 0;
      const increment = target / 100;

      const updateCounter = () => {
        count += increment;
        if (count < target) {
          el.innerText = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          el.innerText = target + "+";
        }
      };

      updateCounter();
    });
  }, [startAnimation]);

  return (
    <section ref={sectionRef} className="bg-[#FFF8F0] py-16 relative">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full max-w-xs bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <h2
                ref={(el) => (countersRef.current[index] = el)}
                className="text-4xl font-extrabold text-[#E5702A] mb-2"
              >
                0
              </h2>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staticsection;
