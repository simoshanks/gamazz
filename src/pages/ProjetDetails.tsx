import { useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { projects } from "@/data/db";

const ProjetDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const [selectedStep, setSelectedStep] = useState(
    project?.gallery && project.gallery.length > 0 ? project.gallery[0] : null
  );

  if (!project)
    return (
      <p className="text-red-500 text-xl text-center mt-10 animate-pulse">
        Projet introuvable 
      </p>
    );

  const fieldOrder = ["objet", "maitreOuvrage", "annee"];
  const keysToDisplay = [
    ...fieldOrder.filter((key) => project[key]),
    ...Object.keys(project).filter(
      (key) => !["id", "imageUrl", "link", "gallery", ...fieldOrder].includes(key)
    ),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-20" style={{ marginTop: "5rem" }}>
        <h1 className="text-4xl font-extrabold mb-12 text-center text-[#6C2E0A]">
          {project.maitreOuvrage}
        </h1>

        {/* Section: Image + Details */}
        <div className="flex flex-col md:flex-row gap-12">
          {project.imageUrl && (
            <div className="md:w-1/2 flex justify-center">
              <img
                src={project.imageUrl}
                alt={project.objet}
                className="w-full rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}

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

{/* Section: étapes du projet */}
{project.gallery && project.gallery.length > 0 && (
  <div className="mt-16">
    <h2 className="text-4xl font-extrabold mb-12 text-center text-[#6C2E0A]">
      Quelques étapes du projet
    </h2>

    {/* Mobile Layout */}
    <div className="flex flex-col gap-8 md:hidden">
      {/* Big Selected Step */}
      {selectedStep && (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img
            src={selectedStep.image}
            alt="Étape sélectionnée"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-[#6C2E0A] mb-2">
              Étape sélectionnée
            </h3>
            <p className="text-gray-600 text-sm">{selectedStep.description}</p>
          </div>
        </div>
      )}

      {/* Thumbnails scrollable horizontally */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {project.gallery.map((step, index) => (
          <div
            key={index}
            onClick={() => setSelectedStep(step)}
            className={`min-w-[100px] cursor-pointer bg-white rounded-xl shadow-md overflow-hidden border-2 transition-transform duration-300 hover:scale-105 ${
              selectedStep === step ? "border-[#E5702A]" : "border-transparent"
            }`}
          >
            <img
              src={step.image}
              alt={`Étape ${index + 1}`}
              className="w-full h-20 object-cover"
            />
            <p className="text-xs font-medium text-[#6C2E0A] py-1 text-center">
              Étape {index + 1}
            </p>
          </div>
        ))}
      </div>
    </div>

{/* Desktop Layout */}
<div className="hidden md:flex gap-8">
  {/* Image Large */}
  {selectedStep && (
    <div className="flex w-full gap-6">
      {/* Large Image */}
      <div className="w-2/3 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <img
          src={selectedStep.image}
          alt="Étape sélectionnée"
          className="w-full h-[28rem] object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#6C2E0A] mb-3">
            Étape sélectionnée
          </h3>
          <p className="text-gray-600">{selectedStep.description}</p>
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div  className="w-1/3 grid grid-cols-1 gap-4 h-[50px]">
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {project.gallery.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedStep(step)}
                  className={`cursor-pointer bg-white rounded-xl shadow-md overflow-hidden border-2 transition-transform duration-300 hover:scale-105 ${
                    selectedStep === step ? "border-[#E5702A]" : "border-transparent"
                  }`}
                >
                  <img
                    src={step.image}
                    alt={`Étape ${index + 1}`}
                    className="w-full h-20 object-cover"
                    loading="lazy"
                  />
                  <p className="text-xs font-medium text-[#6C2E0A] py-1 text-center">
                    Étape {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>



  </div>
)}

        






      </main>

      <Footer />
    </div>
  );
};

export default ProjetDetails;
