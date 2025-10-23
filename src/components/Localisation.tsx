const Localisation = () => {
  return (
    <div className="bg-[#FFF8F0] py-10 px-4">
      <h1 className="text-5xl font-extrabold text-[#6C2E0A] text-center mb-12 mt-20 tracking-wide drop-shadow-lg">
        Localisation <span className="text-[#D97706]">GAMAZ</span>
      </h1>

      <div className="max-w-6xl mx-auto">
        {/* Grid Container */}
        
          
          {/* Carte de localisation */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-[#D97706] hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#6C2E0A] mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Notre Emplacement
            </h2>
            
            <div className="relative h-80 bg-gray-200 rounded-xl overflow-hidden">
              {/* Carte Google Maps intégrée */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d299.1795589778107!2d-6.570903078039577!3d31.9654996885817!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1761238174091!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            

            <div className="mt-4 p-4 bg-[#FFF8F0] rounded-lg">
              <p className="text-[#6C2E0A] font-semibold text-center">
                 Azilal, Maroc
              </p>
            </div>
          </div>


        </div>
      </div>
    
  );
};

export default Localisation;