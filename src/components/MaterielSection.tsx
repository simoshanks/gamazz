import React from "react";
import {
   FaTruck,
  FaTractor,
  FaTruckPickup,
  FaIndustry,
  FaTools,
  FaWarehouse,
  FaHardHat,
  FaCube,
  FaCogs,
  FaHammer,
  FaTruckMoving,
  FaRoad,
  FaOilCan,
  FaMountain,
} from "react-icons/fa";
import { GiWheelbarrow, GiConcreteBag,GiWaterTank ,GiWoodenFence  } from "react-icons/gi";
import { MdFrontLoader } from "react-icons/md";
import { LuPickaxe } from "react-icons/lu";
import { TbBackhoe,TbTransformFilled } from "react-icons/tb";
import { GrVirtualMachine } from "react-icons/gr";
import { PiShovelFill } from "react-icons/pi";
import { FaTents } from "react-icons/fa6";

const MaterielSection = () => {
  const data = [
    { label: "Chargeur sur pneus Caterpillar", number: 1, icon: MdFrontLoader },
    { label: "Pelle sur pneu New Holland", number: 1, icon: FaTruckMoving },
    { label: "Tractopelle JCB", number: 1, icon: TbBackhoe },
    { label: "Compresseur", number: 2, icon: FaOilCan },
    { label: "Camion Benne", number: 2, icon: FaTruck },
    { label: "Pick Up (Toyota, Isuzu)", number: 2, icon: FaTruckPickup },
    { label: "Bétonnière", number: 3, icon: GiConcreteBag },
    { label: "Transformateur électrique", number: 2, icon: TbTransformFilled },
    { label: "Citerne d’eaux", number: 4, icon: GiWaterTank },
    { label: "Vibro pondeuse à parping", number: 2, icon: GrVirtualMachine },
    { label: "Brouettes", number: 16, icon: GiWheelbarrow },
    { label: "Pelles", number: 30, icon: PiShovelFill  },
    { label: "Pioches", number: 25, icon: LuPickaxe  },
    { label: "Tentes", number: 6, icon: FaTents  },
    { label: "Bois de coffrage", number: "9+", icon: GiWoodenFence  },
  ];

  const Card = ({ label, number, Icon }) => (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer">
      <Icon className="text-[#6C2E0A] text-7xl mb-3" />
      <div className="bg-[#6C2E0A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 text-lg">
        {number}
      </div>
      <div className="text-gray-800 text-center font-semibold text-sm">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFF8F0] py-10 px-4">
      <h1 className="text-5xl font-extrabold text-[#6C2E0A] text-center mb-12 mt-20 tracking-wide drop-shadow-lg">
        MOYENS <span className="text-[#D97706]">MATERIELS</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <Card
            key={index}
            label={item.label}
            number={item.number}
            Icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MaterielSection;
;
