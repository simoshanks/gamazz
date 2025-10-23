import contactImg from "@/assets/contact.png";

const Herocontact = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] w-full flex flex-col items-center justify-center"
    >
      {/* 🌄 Background Image */}
      <img
        src={contactImg}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75"
      />

      {/* 🌀 Moving Big Text */}
      <div className="absolute w-full overflow-hidden top-1/3 sm:top-1/4 md:top-1/3">
        <div className="inline-block animate-marquee text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide whitespace-nowrap">
          Vos Projets, Notre Expertise –{" "}
          <span className="text-[#5a2608]">Contactez Gamaz</span>
        </div>
      </div>

      {/* 🧭 Center Button */}
      <a
        href="https://charika.ma/societe-gamaz-travaux-138980"
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-[45vh] sm:mt-[50vh] md:mt-[55vh] px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-[#5a2608] text-white text-lg sm:text-xl md:text-2xl font-bold rounded-3xl shadow-xl hover:bg-[#472107] transition transform hover:scale-105 z-10"
      >
        Visitez-Nous
      </a>

      {/* 💫 Animation Style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 25s linear infinite;
            white-space: nowrap;
          }
        `}
      </style>
    </section>
  );
};

export default Herocontact;
