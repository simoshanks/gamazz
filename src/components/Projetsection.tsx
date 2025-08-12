import { projects } from '../data/db.js';
import Cardprojet from './Cardprojet.js';

const mainColor = "#6C2E0A"; 

const Projetsection = () => {
  const handleSeeAll = () => {
    
  };

  return (
    <section className="py-[60px] px-[25px] bg-[#FFF8F0]">
      <h2 className="main-title text-center text-3xl font-bold mb-6">
        <strong>Nos projets réalisés</strong>
      </h2>
      <div className="flex flex-wrap justify-center gap-[40px] max-w-[1080px] mx-auto">
        {projects.map(proj => (
          <Cardprojet key={proj.id} {...proj} />
        ))}
      </div>
      <div className="text-center mt-[50px]">
        <button
          onClick={handleSeeAll}
          className="bg-[#6C2E0A] text-white border-none px-[36px] py-[14px] rounded-[12px] text-[1.2rem] font-extrabold cursor-pointer transition-colors duration-300 shadow-[0_6px_15px_rgba(230,112,42,0.6)] hover:bg-[#cc5d21]"
          type="button"
        >
          Voir tous les projets
        </button>
      </div>
    </section>
  );
};

export default Projetsection;
