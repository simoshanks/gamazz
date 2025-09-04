import { FiActivity } from "react-icons/fi";
import { VscWorkspaceTrusted, VscGraphLine } from "react-icons/vsc";
import { motion } from "framer-motion";

const ValuesSection = () => {
  const values = [
    { icon: <VscGraphLine size={28} />, title: "Innovation", desc: "Nous innovons constamment." },
    { icon: <VscWorkspaceTrusted size={28} />, title: "Confiance", desc: "Nous bâtissons des relations solides." },
    { icon: <FiActivity size={28} />, title: "Durabilité", desc: "Nous priorisons les solutions durables." },
  ];

  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, 
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-[#FFF8F0] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#6C2E0A]">
            Nos valeurs d'excellence
          </h2>
          <br />
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Découvrez les principes fondamentaux qui guident chacune de nos actions et nous permettent de vous offrir un service exceptionnel.
          </p>
        </div>

        {/* grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {values.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              className={`w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 flex flex-col items-center justify-center text-center rounded-full bg-white p-6 shadow-lg`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} 
              custom={i}
            >
              
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#E5702A] text-white mb-4 sm:mb-6">
                {icon}
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-[#1e1e1e] mb-2 sm:mb-3">
                {title}
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
