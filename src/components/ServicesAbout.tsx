import { FaTools } from "react-icons/fa";
import constructionImg from "@/assets/const.jpg";
import eauImg from "@/assets/eau-service.png";
import venteBg from "@/assets/vente.png";

const ServicesAbout = () => {
    return (
        <>
            {/* عنوان القسم مع أيقونة */}
            <div className="text-center py-12 bg-[#FFF8F0]">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FaTools className="text-4xl text-[#cc5d21]" />
                    <h1 className="text-4xl md:text-5xl font-bold text-[#cc5d21]">
                        Nos Services
                    </h1>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Découvrez notre expertise dans la construction, l’installation d’eau potable
                    et la vente de matériaux de qualité.
                </p>
            </div>

            {/* ServicesAbout */}
            <section className="bg-[#FFF8F0] py-16 px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Bloc 1: Texte */}
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
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-[#cc5d21] text-white rounded-full font-medium hover:opacity-90 transition">
                                En savoir plus
                            </button>
                            <button className="px-6 py-3 border-2 border-[#cc5d21] text-[#cc5d21] rounded-full font-medium hover:bg-[#cc5d21] hover:text-white transition">
                                Contactez-nous
                            </button>
                        </div>
                    </div>

                    {/* Bloc 2: Image */}
                    <div className="bg-gray-200 rounded-2xl min-h-[400px] max-h-[400px] flex items-center justify-center overflow-hidden">
                        <img
                            src={constructionImg}
                            alt="Construction"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bloc 3: Image */}
                    <div className="bg-gray-200 rounded-2xl min-h-[400px] max-h-[400px] flex items-center justify-center overflow-hidden">
                        <img
                            src={eauImg}
                            alt="Eau Potable"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bloc 4: Texte */}
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
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-[#cc5d21] text-white rounded-full font-medium hover:opacity-90 transition">
                                En savoir plus
                            </button>
                            <button className="px-6 py-3 border-2 border-[#cc5d21] text-[#cc5d21] rounded-full font-medium hover:bg-[#cc5d21] hover:text-white transition">
                                Contactez-nous
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Vente Matériaux Section */}
            <section
                className="relative w-full min-h-[60vh] flex items-center justify-center pb-20"
                style={{
                    backgroundImage: `url(${venteBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
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
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 rounded-full font-semibold"
                        style={{ backgroundColor: "#E5702A", color: "#000" }}
                    >
                        Contactez-nous
                    </a>
                </div>
            </section>
        </>
    );
};

export default ServicesAbout;
