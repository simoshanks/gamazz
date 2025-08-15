import aboutImg from '@/assets/materiel.jpg';

const Heromatireil = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[50vh] w-full" // قلصت الطول من 80vh لـ 60vh باش الصورة ما تكونش طويلة بزاف
    >
      <img
        src={aboutImg}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75" 
        // object-cover باش تغطي كامل المساحة 
        // object-center باش تبقى مركزة 
        // brightness-75 باش نضيف تأثير ظلمة خفيف على الصورة
      />
      {/* هنا ممكن تزيد أي محتوى فوق الصورة */}
    </section>
  );
};

export default Heromatireil;
