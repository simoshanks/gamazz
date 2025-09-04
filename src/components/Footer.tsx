import Moyens from "@/pages/Moyens";
import logoFooter from "../assets/logofooter.jpg";
import { 
  BsTelephoneFill, 
  BsEnvelopeFill, 
  BsFacebook, 
  BsWhatsapp, 
  BsLinkedin, 
  BsInstagram 
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-white pt-20 pb-6 mt-12">
      <div className="container mx-auto px-4">
        {/* GRID responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">

          {/* Logo + description */}
          <div className="space-y-3">
            <img
              src={logoFooter}
              alt="Logo de l'entreprise"
              className="w-16 h-16 mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Nous sommes une entreprise spécialisée dans la construction et la
              distribution d'eau potable.
            </p>
          </div>

          {/* Pages links */}
          <div>
            <h5 className="mb-2 font-semibold text-sm">Pages</h5>
            <ul className="space-y-1 text-sm">
              {[
                { name: "Accueil", link: "/" },
                { name: "Services", link: "/services" },
                { name: "Projets", link: "/projet" },
                { name: "À propos", link: "/about" },
                { name: "Contact", link: "/contact" },
              ].map((page, i) => (
                <li key={i}>
                  <a
                    href={page.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="mb-2 font-semibold text-sm">Moyens</h5>
            <ul className="space-y-1 text-sm">
              {[
                { name: "Moyens humains", link: "/moyen-humain" },
                { name: "moyens matériels", link: "/moyen-materiel" },
              ].map((moyens, i) => (
                <li key={i}>
                  <a
                    href={moyens.link}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {moyens.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-2 font-semibold text-sm">Contact</h5>
            <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start space-x-2">
              <BsTelephoneFill className="text-sm" />
              <span>+212 6 61 79 11 18</span>
            </p>
                        <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start space-x-2">
              <BsTelephoneFill className="text-sm" />
              <span>+212 6 28 88 75 29</span>
            </p>

            {/* WhatsApp */}
            <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start space-x-2 mt-2">
              <a 
                href="https://wa.me/212661791118" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-500 transition-colors duration-300"
              >
                <BsWhatsapp className="text-sm" />
                <span>WhatsApp</span>
              </a>
            </p>

            <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start space-x-2 mt-2">
              <BsEnvelopeFill className="text-sm" />
              <span>gamazsarl03@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
