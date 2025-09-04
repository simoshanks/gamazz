import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { projects } from "@/data/db";

const ProjetDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <p className="text-red-500 text-xl text-center mt-10 animate-pulse">
        Projet introuvable ⚠️
      </p>
    );

  // ترتيب العرض المخصص
  const fieldOrder = ["objet", "maitreOuvrage", "annee"];

  // نبني ترتيب المفاتيح (المخصص الأول، ومن بعد الباقي)
  const keysToDisplay = [
    ...fieldOrder.filter((key) => project[key]), // غير لي كاينين
    ...Object.keys(project).filter(
      (key) =>
        !["id", "imageUrl", "link", ...fieldOrder].includes(key)
    ),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />

      <main
        className="flex-grow container mx-auto px-4 py-20"
        style={{ marginTop: "5rem" }}
      >
        <h1 className="text-4xl font-extrabold mb-12 text-center text-[#6C2E0A]">
          {project.maitreOuvrage}
        </h1>
        {/* Section: Image + Details side by side */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Image */}
          {project.imageUrl && (
            <div className="md:w-1/2 flex justify-center">
              <img
                src={project.imageUrl}
                alt={project.objet}
                className="w-full rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}

          {/* Project Details */}
          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            {keysToDisplay.map((key) => (
              <div
                key={key}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#E5702A] mb-3 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {String(project[key])}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjetDetails;
