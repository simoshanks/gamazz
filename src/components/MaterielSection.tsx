import React from "react";
import {
  FaTractor,
  FaTruckPickup,
  FaIndustry,
  FaWater,
  FaTools,
  FaWarehouse,
  FaHardHat,
  FaCube,
} from "react-icons/fa";

const MaterielSection = () => {
  const data = [
    { label: "Chargeur sur pneus Caterpillar", number: 1, icon: FaTractor },
    { label: "Pelle sur pneu New Holland", number: 1, icon: FaTruckPickup },
    { label: "Tractopelle JCB", number: 1, icon: FaIndustry },
    { label: "Compresseur", number: 2, icon: FaTools },

    { label: "Camion Benne", number: 2, icon: FaTruckPickup },
    { label: "Pick Up (Toyota, Isuzu)", number: 2, icon: FaTruckPickup },

    { label: "Bétonnière", number: 3, icon: FaHardHat },
    { label: "Transformateur électrique", number: 2, icon: FaIndustry },
    { label: "Citerne d’eaux", number: 4, icon: FaWater },
    { label: "Vibro pondeuse à parping", number: 2, icon: FaCube },
    { label: "Brouettes", number: 16, icon: FaWarehouse },
    { label: "Pelles", number: 30, icon: FaTools },
    { label: "Pioches", number: 25, icon: FaTools },
    { label: "Tentes", number: 6, icon: FaWarehouse },
    { label: "Bois de coffrage", number: "9+", icon: FaWarehouse },
  ];

  const Card = ({ label, number, Icon }) => (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
      <Icon className="text-[#E5702A] text-7xl mb-3" />
      <div className="bg-[#E5702A] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 text-lg">
        {number}
      </div>
      <div className="text-gray-800 text-center font-semibold text-sm">{label}</div>
    </div>
  );

  return (
    <div className="bg-[#FFF8F0] py-10 px-4">
      <h1 className="text-3xl font-bold text-[#E5702A] text-center mb-10 mt-20">
        MOYENS MATERIELS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <Card key={index} label={item.label} number={item.number} Icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default MaterielSection;
