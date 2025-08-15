import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from '@/assets/hero-about.png';

const mainColor = "#E5702A";

const HeroAbout = () => {
    const navigate = useNavigate();
    const link = "/projets"; // غير الرابط اللي بغيت توجه ليه من بعد الضغط على الزرار

    const fullText = " Depuis 2003, construisons ensemble un avenir solide et durable.";

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
            className="relative overflow-hidden h-[50vh] p-0 m-0"
        >
            <img src={aboutImg}

                className="absolute top-0 left-0 w-full h-full object-cover"

            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 pt-20">
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                    {displayedText}
                    
                    {index < fullText.length && <span className="blinking-cursor">|</span>}
                </h1>
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

export default HeroAbout;