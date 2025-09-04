import { NavLink } from 'react-router-dom';
import { projects } from '../data/db.js';
import Cardprojet from './Cardprojet.js';

const mainColor = "#6C2E0A";

const Projetsection = () => {
  const handleSeeAll = () => {
    
  };

  return (
    <section className="py-[60px] px-[25px] bg-[#FFF8F0]">
      <h2
        className="text-center text-3xl md:text-4xl font-bold mb-4"
        style={{ color: mainColor }}
      >
        Nos projets réalisés
      </h2>
      <p className="text-center text-lg text-gray-700 mb-8">
        Découvrez nos réalisations en construction et distribution d'eau potable.
      </p>

      
      <div className="flex flex-wrap justify-center gap-[40px] max-w-[1080px] mx-auto">
        {projects.slice(-3).map((proj) => (
          <Cardprojet key={proj.id} {...proj} />
        ))}
      </div>

      <div className="text-center mt-[50px]">
        <NavLink
          to="/projet"
          onClick={handleSeeAll}
          className="mt-5 px-20 py-3 bg-[#E5702A] text-white rounded-[40px] font-semibold hover:bg-[#cc5d21] transition-colors duration-300"
          type="button"
        >
          Voir tous les projets
        </NavLink>
      </div>
    </section>
  );
};

export default Projetsection;
