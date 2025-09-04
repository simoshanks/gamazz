import React from 'react';
import { domains } from '../data/db';


import { FaCheckCircle, FaClock, FaHandshake } from 'react-icons/fa';


const iconMap = {
  FaCheckCircle: FaCheckCircle,
  FaClock: FaClock,
  FaHandshake: FaHandshake,
};

const ConfianceSection = () => {
  return (
    <section className="bg-[#FFF8F0] py-12 px-5 text-center font-sans text-[#6C2E0A]">
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#6C2E0A" }}>
        Pourquoi nous choisir ?
      </h2>
      <p className="max-w-xl mx-auto mb-12 text-lg text-gray-700">
        Nous offrons des services de haute qualité, toujours à vos côtés à chaque étape.
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {domains.map(({ id, icon, title, description, color, bgColor }) => {
          const IconComponent = iconMap[icon];
          return (
            <div
              key={id}
              className="max-w-xs rounded-lg p-6 shadow-md transition-transform hover:scale-105 cursor-default"
              style={{ backgroundColor: bgColor, color }}
            >
              {IconComponent && <IconComponent size={50} className="mb-4" color={color} />}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className='text-black'>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ConfianceSection;