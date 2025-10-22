import { useNavigate } from "react-router-dom";

const Cardprojet = ({ objet, maitreOuvrage, imageUrl, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projet-details/${id}`)}
      className="w-80 h-[420px] bg-white rounded-[15px] shadow-md overflow-hidden cursor-pointer flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
    >
      {/* IMAGE*/}
      <img
        src={imageUrl}
        alt="projet"
        className="w-full h-[200px] object-cover"
        loading="lazy" 
      />

      {/* content*/}
      <div className="p-6 flex flex-col flex-grow items-center text-center">
        <h3 className="text-[1.3rem] font-bold mb-4 text-gray-900 font-sans line-clamp-2">
          {maitreOuvrage}
        </h3>

        <div className="mt-auto flex gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/projet-details/${id}`);
            }}
            className="px-5 py-3 border-2 border-[#cc5d21] text-[#cc5d21] rounded-[40px] font-semibold hover:bg-[#cc5d21] hover:text-white transition-colors duration-300"
          >
            Voir le projet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardprojet;
