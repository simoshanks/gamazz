import { group } from 'console';

import logoFooter from "../assets/logofooter.jpg";

const Footer = () => {

  return (
    <footer className="relative z-10 bg-black text-white pt-[150px] pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">

          {/* Logo + description */}
          <div className="w-full md:w-1/4 mb-10 md:mb-0 text-center md:text-left">
            <img
              src={logoFooter}
              alt="Logo de l'entreprise"
              className="w-20 h-20 mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-400">
              Nous sommes une entreprise spécialisée dans la construction et la distribution d'eau potable.
            </p>
          </div>

          {/* Pages links */}
          <div className="w-full md:w-1/4 mb-10 text-center md:text-left">
            <h5 className="mb-4 font-semibold text-lg">Pages</h5>
            <ul className="list-none p-0 m-0 space-y-1">
              {[
                { name: "Accueil", link: "/" },
                { name: "Services", link: "/service" },
                { name: "Projets", link: "/projet" },
                { name: "À propos", link: "/about" },
                { name: "Contact", link: "/contact" },
              ].map((page, i) => (
                <li key={i}>
                  <a
                    href={page.link}
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/4 mb-10 text-center md:text-left">
            <h5 className="mb-4 font-semibold text-lg">Services</h5>
            <ul className="list-none p-0 m-0 space-y-1">
              {[
                { name: "Travaux Construction", link: "/construction" },
                { name: "Eau Potable", link: "/eau-potable" },
                { name: "Vente de Matériaux de Construction", link: "/vente-materiaux" },
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href={service.link}
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/4 mb-10 text-center md:text-left">
            <h5 className="mb-4 font-semibold text-lg">Contact</h5>
            <p className="m-0">📞 +212 6 00 00 00 00</p>
            <p className="m-0">📧 email@example.com</p>
          </div>

        </div>

        <hr className="border-gray-700 my-5" />

        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;