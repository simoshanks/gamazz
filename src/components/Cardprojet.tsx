import { useNavigate } from "react-router-dom";

const Cardprojet = ({ objet, maitredouvrage, imageUrl, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="max-w-xs bg-white rounded-[15px] shadow-md overflow-hidden cursor-pointer flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
    >
      <img
        src={imageUrl}
        alt={objet}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[1.5rem] font-bold mb-4 text-gray-900 font-sans">{objet}</h3>
        <p className="text-gray-600 flex-grow leading-6">{maitredouvrage}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(link);
          }}
          className="mt-5 self-start px-6 py-3 border-2 border-[#cc5d21] text-[#cc5d21] rounded-[10px] font-semibold hover:bg-[#cc5d21] hover:text-white transition-colors duration-300"
        >
          Voir le projet
        </button>
      </div>
    </div>
  );
};

export default Cardprojet;
