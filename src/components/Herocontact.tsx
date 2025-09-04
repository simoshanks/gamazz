import contactImg from '@/assets/contact.png';

const Herocontact = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[50vh] w-full flex flex-col items-center justify-center"
    >
      {/* Background Image */}
      <img
        src={contactImg}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75"
      />

      {/* Moving Big Text */}
<div className="absolute w-full overflow-visible top-1/3">
  <div className="inline-block animate-marquee text-white text-6xl md:text-7xl font-extrabold tracking-wide whitespace-nowrap">
    Vos Projets, Notre Expertise – <span className='text-[#5a2608]'>Contactez Gamaz</span>
  </div>
</div>
      {/* Big Center Button Below Text */}
      <a
        href="https://charika.ma/societe-gamaz-travaux-138980"
        className="relative mt-56 px-12 py-5 bg-[#5a2608] text-white text-2xl font-bold rounded-3xl shadow-xl hover:bg-[#5a2608] transition transform hover:scale-105 z-10"
      >
        Visitez-Nous
      </a>
      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Herocontact;
