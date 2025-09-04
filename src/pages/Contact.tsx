import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Herocontact from "@/components/Herocontact";

const Contact = () => {
  return (
    <div className="bg-[#FFF8F0] min-h-screen flex flex-col">
      <Navigation />
      <Herocontact />

      <main className="flex-grow flex flex-col items-center justify-start px-4 py-20 space-y-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6C2E0A] text-center">
          Contactez-Nous
        </h1>

        <div className="w-full max-w-5xl grid sm:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget as HTMLFormElement & {
                name: HTMLInputElement;
                email: HTMLInputElement;
                subject: HTMLInputElement;
                message: HTMLTextAreaElement;
              };

              const name = form.name.value;
              const email = form.email.value;
              const subject = form.subject.value;
              const message = form.message.value;

              const body = encodeURIComponent(
                `الاسم: ${name}\nالإيميل: ${email}\n\nالرسالة:\n${message}`
              );

              const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=gamazsarl03@gmail.com&su=${encodeURIComponent(
                subject
              )}&body=${body}`;
              window.open(mailtoLink, "_blank");

              alert("l'email est en cours d'ouverture pour envoyer le message ...");
            }}
            className="w-full bg-white p-8 rounded-2xl shadow-2xl space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97706] text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97706] text-black"
            />
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97706] text-black"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Votre message"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97706] text-black"
            />
            <button
              type="submit"
              className="w-full bg-[#6C2E0A] text-white py-3 rounded-2xl font-semibold hover:bg-[#5a2608] transition"
            >
              Envoyer le message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg flex flex-col space-y-6">
            <h2 className="text-3xl font-semibold text-[#6C2E0A]">Informations</h2>

            <div className="flex items-center space-x-3 text-lg text-[#6C2E0A]">
              <HiOutlineMail className="w-6 h-6" />
              <span>gamazsarl03@gmail.com</span>
            </div>

            <div className="flex items-center space-x-3 text-lg text-[#6C2E0A]">
              <HiOutlinePhone className="w-6 h-6" />
              <span>+212 6 61 79 11 18</span>
            </div>
                        <div className="flex items-center space-x-3 text-lg text-[#6C2E0A]">
              <HiOutlinePhone className="w-6 h-6" />
              <span>+212 6 28 88 75 29</span>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212661791118"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-lg text-green-600 hover:text-green-700"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>

            <p className="text-gray-700 text-base">
              N’hésitez pas à nous contacter pour toute demande d’information ou devis.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
