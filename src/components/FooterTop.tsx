import footerTopImg from "../assets/footerTop.png"; // عدّل المسار حسب مكان الملف

const FooterTop = () => {
  return (
    // div خارجي باللون الجانبي
    <div className="relative bg-[#FFF8F0]">
      {/* Container محدود العرض */}
      <div className="container mx-auto px-4">
        <section
          className="
            relative
            z-20
            text-white
            bg-cover
            bg-center
            bg-no-repeat
            min-h-[400px]
            flex
            items-center
            justify-center
            shadow-md
            rounded-lg
            -mb-20  /* يخلي الـsection تنزل على الفوتر */
          "
          style={{ backgroundImage: `url(${footerTopImg})` }}
        >
          {/* Overlay شبه شفاف */}
          <div className="absolute inset-0 bg-black/50 z-10 rounded-lg"></div>

          {/* النص فوق overlay */}
          <p className="relative z-20 font-bold font-sans text-2xl md:text-4xl max-w-4xl text-center">
            Commencez dès maintenant votre projet avec <span className="text-yellow-400">GAMAZ</span>, partenaire de confiance pour un avenir durable et de qualité.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FooterTop;

