import React from "react";
import {
  FaUserTie,
  FaLaptop,
  FaMoneyCheckAlt,
  FaMapMarkedAlt,
  FaHardHat,
  FaProjectDiagram,
  FaTruck,
  FaTools,
  FaHammer,
  FaUserCog,
} from "react-icons/fa";

const HumainSection = () => {
  const data = {
    permanents: [
      { label: "Directeur général", number: 1, icon: FaUserTie },
      { label: "Secrétaire", number: 1, icon: FaLaptop },
      { label: "Agent Comptable", number: 1, icon: FaMoneyCheckAlt },
      { label: "Topographe", number: 1, icon: FaMapMarkedAlt },
      { label: "Technicien chef de chantier", number: 1, icon: FaHardHat },
      { label: "Conducteur des travaux", number: 2, icon: FaProjectDiagram },
      { label: "Chauffeurs", number: 2, icon: FaTruck },
      { label: "Ouvriers spécialisés", number: 16, icon: FaTools },
      { label: "Ouvriers non spécialisés", number: 20, icon: FaHammer },
    ],
    nonPermanents: [
      { label: "Chef de chantier", number: 1, icon: FaUserCog },
      { label: "Caporaux", number: 1, icon: FaUserCog },
      { label: "Ouvriers spécialisés", number: 10, icon: FaTools },
      { label: "Ouvriers non spécialisés", number: 18, icon: FaHammer },
    ],
  };

  const Card = ({ label, number, Icon }) => (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:scale-105 transition-transform">
      {/* أيقونة بحجم كبير */}
      <Icon className="text-[#E5702A] text-7xl mb-3" />
      <div className="bg-[#E5702A] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 text-lg">
        {number}
      </div>
      <div className="text-gray-800 text-center font-semibold text-sm">{label}</div>
    </div>
  );

  return (
    <div className="bg-[#FFF8F0] py-10 px-4">
      <h1 className="text-5xl font-extrabold text-[#6C2E0A] text-center mb-12 mt-20 tracking-wide drop-shadow-lg">
        MOYENS <span className="text-[#D97706]">HUMAINS</span>
      </h1>

      <h2 className="text-xl font-semibold text-[#6C2E0A] mb-4 text-center">
        Agents Permanents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-10">
        {data.permanents.map((item, index) => (
          <Card key={index} label={item.label} number={item.number} Icon={item.icon} />
        ))}
      </div>

      <h2 className="text-xl font-semibold text-[#6C2E0A] mb-4 text-center">
        Agents Non Permanents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {data.nonPermanents.map((item, index) => (
          <Card key={index} label={item.label} number={item.number} Icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default HumainSection;
