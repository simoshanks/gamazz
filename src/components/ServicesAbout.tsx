import constructionImg from "@/assets/construction.jpeg";
import eauImg from "@/assets/eau-service.png";
import venteBg from "@/assets/vente.png";
import { NavLink } from "react-router-dom";

const ServicesAbout = () => {
    return (
        <>
            
            <div className="text-center py-12 bg-[#FFF8F0]">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-4xl font-extrabold text-[#6C2E0A]">
                        Nos Services
                    </h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Découvrez notre expertise dans la construction, l’installation d’eau potable
                    et la vente de matériaux de qualité.
                </p>
            </div>

            
            <section className="bg-[#FFF8F0] py-16 px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    
                    <div className="bg-white rounded-2xl p-12 flex flex-col justify-between min-h-[400px]">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
                                Construction
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Nous réalisons des projets de construction durables et de haute qualité,
                                en respectant les normes les plus strictes et en garantissant la satisfaction
                                de nos clients.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <NavLink
                                to={'/services'}
                                className="w-full sm:w-auto px-6 py-3 bg-[#cc5d21] text-white rounded-full font-medium hover:opacity-90 transition text-center"
                            >
                                En savoir plus
                            </NavLink>
                            <NavLink
                                to={'/contact'}
                                className="w-full sm:w-auto px-6 py-3 border-2 border-[#cc5d21] text-[#cc5d21] rounded-full font-medium hover:bg-[#cc5d21] hover:text-white transition text-center"
                            >
                                Contactez-nous
                            </NavLink>
                        </div>
                    </div>

                    
                    <div className="bg-gray-200 rounded-2xl min-h-[400px] max-h-[400px] flex items-center justify-center overflow-hidden">
                        <img
                            src={constructionImg}
                            alt="Construction"
                            className="w-full h-full object-cover"
                            loading="lazy" 
                        />
                    </div>

                    
                    <div className="bg-gray-200 rounded-2xl min-h-[400px] max-h-[400px] flex items-center justify-center overflow-hidden">
                        <img
                            src={eauImg}
                            alt="Eau Potable"
                            className="w-full h-full object-cover"
                            loading="lazy" 
                        />
                    </div>

                    
                    <div className="bg-white rounded-2xl p-12 flex flex-col justify-between min-h-[400px]">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
                                Installation de l’eau potable
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Nous assurons la mise en place complète des réseaux d’eau potable,
                                en utilisant des matériaux de qualité et en respectant les délais convenus.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <NavLink
                                to={'/services'}
                                className="w-full sm:w-auto px-6 py-3 bg-[#cc5d21] text-white rounded-full font-medium hover:opacity-90 transition text-center"
                            >
                                En savoir plus
                            </NavLink>
                            <NavLink
                                to={'/contact'}
                                className="w-full sm:w-auto px-6 py-3 border-2 border-[#cc5d21] text-[#cc5d21] rounded-full font-medium hover:bg-[#cc5d21] hover:text-white transition text-center"
                            >
                                Contactez-nous
                            </NavLink>
                        </div>
                    </div>

                </div>
            </section>

            
            <section
                className="relative w-full min-h-[60vh] flex items-center justify-center pb-20"
                style={{
                    backgroundImage: `url(${venteBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 40%, rgba(244,192,76,0.18) 100%)",
                    }}
                />

                <div className="relative z-10 text-center px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Vente de matériaux de construction
                    </h2>
                    <p className="text-white/90 max-w-2xl mx-auto mb-6">
                        Ciment, acier, briques, bois, outillage et plus — qualité pro, prix compétitifs,
                        livraison rapide sur chantier.
                    </p>
                    <NavLink
                        to={'/contact'}
                        className="w-full sm:w-auto inline-block px-6 py-3 rounded-full font-semibold text-center"
                        style={{ backgroundColor: "#E5702A", color: "#000" }}
                    >
                        Contactez-nous
                    </NavLink>
                </div>
            </section>
        </>
    );
};

export default ServicesAbout;
