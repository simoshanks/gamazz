import { projects } from '../data/db.js';
import Cardprojet from './Cardprojet.js';

const mainColor = "#6C2E0A";

const Projetrealisee = () => {

  return (
    <section className="py-[60px] px-[25px] bg-[#FFF8F0]">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4" style={{ color: "#6C2E0A" }}>
        Nos projets réalisés
      </h2>
      <p className="text-center text-lg text-gray-700 mb-8">
        Découvrez nos réalisations en construction et distribution d'eau potable.
      </p>
      <div className="flex flex-wrap justify-center gap-[40px] max-w-[1080px] mx-auto">
        {projects.map(proj => (
          <Cardprojet key={proj.id} {...proj} />
        ))}
      </div>

    </section>
  );
};

export default Projetrealisee;
