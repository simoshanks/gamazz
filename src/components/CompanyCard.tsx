import { FaUserTie, FaMoneyBillWave, FaIdCard, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const CompanyCard = () => {
  return (
   <div className="bg-[#FFF8F0] p-8">
     <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-[#E5702A] mb-6 flex items-center gap-3 justify-center">
        
        Gamaz Travaux <span className="text-gray-500 text-lg font-normal">S.A.R.L</span>
      </h2>
      <div className="space-y-4">
        <p className="text-gray-700 flex items-center gap-3">
          <FaUserTie className="text-[#E5702A]" />
          <strong className="text-black">Gérant:</strong> Hmad Boutkhoum
        </p>
        <p className="text-gray-700 flex items-center gap-3">
          <FaMoneyBillWave className="text-[#E5702A]" />
          <strong className="text-black">Capital social:</strong> 1 500 000,00 Dhs
        </p>
        <p className="text-gray-700 flex items-center gap-3">
          <FaIdCard className="text-[#E5702A]" />
          <strong className="text-black">Registre de commerce:</strong> n°213/2003 (Azilal)
        </p>
        <p className="text-gray-700 flex items-center gap-3">
          <FaMapMarkerAlt className="text-[#E5702A]" />
          <strong className="text-black">Siège social:</strong> Hay Tanout, Azilal
        </p>
      </div>
    </div>
   </div>
  );
};

export default CompanyCard;
