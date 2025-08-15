import { FaRegLightbulb } from "react-icons/fa";

const OurHistory = () => {
    return (
        <>
           <div className="bg-[#FFF8F0] pt-20">
             <div className="flex items-center justify-center mb-16  gap-4">
                {/* Icon m3a titre */}
                <FaRegLightbulb className="text-4xl text-[#E5702A]" />
                <h2 className="text-4xl font-extrabold text-[#6C2E0A]">
                    Notre Histoire
                </h2>
            </div>
            <div className="container  mx-auto px-4 py-10 relative">
                {/* الخط العمودي قريب من الدواير */}
                <div className="absolute top-0 bottom-6 left-[calc(38%-10rem)] w-[3px] bg-[#e67e22] rounded-full"></div>

                {/* Timeline item 1 */}
                <div className="relative mb-12 flex items-center max-w-2xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e67e22] text-white font-bold shadow-md z-10">
                            2003
                        </div>
                    </div>
                    <div className="ml-8 bg-white p-6 rounded-xl shadow-lg shadow-slate-700/10 w-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                        <h5 className="text-xl font-extrabold text-[#e67e22] mb-2 flex items-center gap-2">
                            🏗️ Fondation à Azilal
                        </h5>
                        <p className="text-[#6C2E0A] text-base leading-relaxed">
                            Gamaz a commencé avec une petite équipe passionnée, visant à construire un avenir solide et durable.
                        </p>
                    </div>
                </div>

                {/* Timeline item 2 */}
                <div className="relative mb-12 flex items-center max-w-2xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e67e22] text-white font-bold shadow-md z-10">
                            2013
                        </div>
                    </div>
                    <div className="ml-8 bg-white p-6 rounded-xl shadow-lg shadow-slate-700/10 w-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                        <h5 className="text-xl font-extrabold text-[#e67e22] mb-2 flex items-center gap-2">
                            💡 Innovation et Nouvelles Instructions
                        </h5>
                        <p className="text-[#6C2E0A] text-base leading-relaxed">
                            Introduction de nouvelles directives et innovations pour améliorer nos méthodes de travail.
                        </p>
                    </div>
                </div>

                {/* Timeline item 3 */}
                <div className="relative mb-12 flex items-center max-w-2xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e67e22] text-white font-bold shadow-md z-10">
                            2014
                        </div>
                    </div>
                    <div className="ml-8 bg-white p-6 rounded-xl shadow-lg shadow-slate-700/10 w-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                        <h5 className="text-xl font-extrabold text-[#e67e22] mb-2 flex items-center gap-2">
                            🚰 Installation d’eau potable à grande échelle
                        </h5>
                        <p className="text-[#6C2E0A] text-base leading-relaxed">
                            Nous avons déployé plusieurs projets d'installation d'eau potable pour améliorer la qualité de vie locale.
                        </p>
                    </div>
                </div>

                {/* Timeline item 4 */}
                <div className="relative mb-12 flex items-center max-w-2xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e67e22] text-white font-bold shadow-md z-10">
                            2025
                        </div>
                    </div>
                    <div className="ml-8 bg-white p-6 rounded-xl shadow-lg shadow-slate-700/10 w-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                        <h5 className="text-xl font-extrabold text-[#e67e22] mb-2 flex items-center gap-2">
                            🏢 Expansion et vente de matériaux
                        </h5>
                        <p className="text-[#6C2E0A] text-base leading-relaxed">
                            Nous avons ouvert notre réseau de vente de matériaux de construction, avec un service client reconnu.
                        </p>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default OurHistory;
