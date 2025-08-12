import { FaWater, FaBuilding, FaTools } from "react-icons/fa";
import { services } from "../data/db.js";  

const mainColor = "#6C2E0A";


const iconMap = {
  FaWater: <FaWater size={40} color={mainColor} />,
  FaBuilding: <FaBuilding size={40} color={mainColor} />,
  FaTools: <FaTools size={40} color={mainColor} />
};

const Servicesection = () => {
  return (
    <section className="bg-[#FFF8F0] py-16 px-5 text-center text-[#6C2E0A] font-sans">
      <h2 className="text-3xl font-bold mb-10">Nos Services</h2>

      <div className="flex justify-center gap-16 flex-wrap">
        {services.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-white w-[220px] h-[220px] rounded-full shadow-md flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:scale-105"
          >
            <div className="mb-4">{iconMap[icon]}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicesection;