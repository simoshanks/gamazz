import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import herovideo from '@/assets/TRAVAUX.mp4';

const mainColor = "#6C2E0A";

const HeroSection = () => {
  const navigate = useNavigate();
  const link = "/projets"; // غير الرابط اللي بغيت توجه ليه من بعد الضغط على الزرار

  const fullText = "Construire l'avenir__ ";
  const coloredText = "Eau potable & Bâtiment";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="relative overflow-hidden h-[80vh] p-0 m-0"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 pt-20">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          {displayedText}
          {index === fullText.length && (
            <span style={{ color: mainColor }}>{coloredText}</span>
          )}
          {index < fullText.length && <span className="blinking-cursor">|</span>}
        </h1>
        <button
          onClick={() => navigate(link)}
          className="mt-5 px-8 py-3 border-2 border-[#cc5d21] text-[#cc5d21] rounded-[10px] font-semibold hover:bg-[#cc5d21] hover:text-white transition-colors duration-300"
        >
          Voir le projet
        </button>
      </div>

      <style >{`
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
      `}</style>
    </section>
  );
};

export default HeroSection;
