import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHandshake, FaLightbulb, FaLeaf } from "react-icons/fa";


const mainColor = "#E5702A";

const MessionVesion = () => {
    return (
        <>
            {/* Mission & Vision Row */}
            <div className="bg-[#FFF8F0] py-10">
                <main className="container mx-auto my-12 px-4">
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Mission Card */}
                    <section className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-[#6C2E0A] flex items-center mb-4">
                            <FaLeaf className="text-[#E5702A] mr-2" />
                            Notre Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Offrir des services et des produits de haute qualité pour contribuer au développement
                            des infrastructures, à l’accès à l’eau potable, et à la construction durable dans nos régions.
                        </p>
                    </section>

                    {/* Vision Card */}
                    <section className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-[#6C2E0A] flex items-center mb-4">
                            <FaLeaf className="text-[#E5702A] mr-2" />
                            Notre Vision
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Être un leader reconnu dans le domaine de la construction et des installations hydrauliques,
                            innovant constamment et inspirant confiance à nos clients.
                        </p>
                    </section>

                </div>
            </main>

            </div>
        </>
    );
};

export default MessionVesion;