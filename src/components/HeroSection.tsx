import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import herovideo from '@/assets/T1.mp4';

const mainColor = "#E5702A";

const HeroSection = () => {
  const navigate = useNavigate();
  const link = "/projets";

  const fullText = "Construire l'avenir__ ";
  const coloredText = "Eau potable & Bâtiment";

  const [displayedText, setDisplayedText] = useState("");
  const [displayedColoredText, setDisplayedColoredText] = useState("");
  const [index, setIndex] = useState(0);
  const [coloredIndex, setColoredIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);

  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  
  useEffect(() => {
    if (index === fullText.length && coloredIndex < coloredText.length) {
      const timeout = setTimeout(() => {
        setDisplayedColoredText((prev) => prev + coloredText.charAt(coloredIndex));
        setColoredIndex(coloredIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (coloredIndex === coloredText.length) {
      const subtitleTimeout = setTimeout(() => setShowSubtitle(true), 300);
      return () => clearTimeout(subtitleTimeout);
    }
  }, [index, coloredIndex]);

  return (
    <section id="home" className="relative overflow-hidden h-[80vh] p-0 m-0">
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={herovideo} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 pt-20">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
          {displayedText}
          <span style={{ color: mainColor }}>{displayedColoredText}</span>
          {(index < fullText.length || coloredIndex < coloredText.length) && (
            <span className="blinking-cursor">|</span>
          )}
        </h1>

        {showSubtitle && (
          <h2 className="text-white text-lg md:text-2xl mb-6 opacity-0 animate-fadeIn">
            Votre sécurité Est Notre Priorité
          </h2>
        )}

        <NavLink to={'/projet'}
          onClick={() => navigate(link)}
          className="mt-5 px-20 py-3 bg-[#E5702A] text-white rounded-[40px] font-semibold hover:bg-[#cc5d21] transition-colors duration-300"
        >
          Voir le projet
        </NavLink>
      </div>

      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: white;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
