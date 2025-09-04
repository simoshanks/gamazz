import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaGhost } from "react-icons/fa"; 

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erreur 404 : L'utilisateur a tenté d'accéder à une route inexistante :",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-white px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md text-center animate-fadeIn">
        
        <FaGhost className="mx-auto text-6xl text-orange-400 mb-4 animate-bounce" />

        <h1 className="text-6xl font-extrabold text-orange-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">
          Oups ! La page que vous recherchez n'existe pas.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition"
        >
          Retour à l'accueil
        </a>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Si vous pensez qu'il s'agit d'une erreur, contactez le support.
      </p>
    </div>
  );
};

export default NotFound;
