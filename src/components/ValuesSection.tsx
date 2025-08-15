const ValuesSection = ({
  values = [
    { icon: "💡", title: "Innovation", desc: "Nous innovons constamment pour nos clients." },
    { icon: "🤝", title: "Confiance", desc: "Nous bâtissons des relations solides et fiables." },
    { icon: "🌱", title: "Durabilité", desc: "Nous priorisons les solutions durables." },
  ],
  colors = { dark: "#1e1e1e", primary: "#E5702A" },
}) => {
  return (
    <section className="bg-[#FFF8F0] py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-center font-extrabold mb-12"
          style={{
            color: colors.dark,
            fontSize: "3rem",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          Nos valeurs d’excellence
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {values.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="w-72 h-72 flex flex-col items-center justify-center p-8 text-center cursor-default rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_15px_30px_rgba(244,192,76,0.5)]"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              }}
            >
              <div className="mb-6 text-4xl">{icon}</div>
              <h3
                className="font-extrabold mb-4"
                style={{
                  color: colors.primary,
                  fontSize: "1.8rem",
                }}
              >
                {title}
              </h3>
              <p className="text-gray-800 text-base font-medium leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;