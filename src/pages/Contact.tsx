import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Herocontact from "@/components/Herocontact";

const Contact = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navigation />
            <Herocontact/>
            <br />

            {/* Main content */}
            <main className="flex-grow flex flex-col items-center justify-start px-4 py-20 space-y-16">
                {/* Page Title */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#6C2E0A] text-center">
                    Contactez-Nous
                </h1>

                {/* Form + Info Section */}
                <div className="w-full max-w-5xl grid sm:grid-cols-2 gap-8">
                    {/* Left Column: Contact Form */}
                    <form
                        action="https://formspree.io/f/YOUR_FORM_ID"
                        method="POST"
                        className="w-full bg-white p-8 rounded-2xl shadow-2xl space-y-4"
                    >
                        <input type="text" name="_gotcha" className="hidden" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Nom complet"
                            required
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Sujet"
                            required
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                        />
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Votre message"
                            required
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#6C2E0A] text-white py-3 rounded-2xl font-semibold hover:bg-[#5a2608] transition"
                        >
                            Envoyer le message
                        </button>
                    </form>

                    {/* Right Column: Contact Info */}
                    <div className="bg-gray-50 p-10 rounded-2xl shadow-lg flex flex-col space-y-6">
                        <h2 className="text-3xl font-semibold text-[#6C2E0A]">Informations</h2>

                        <div className="flex items-center space-x-4 text-2xl text-[#6C2E0A]">
                            <HiOutlineMail className="w-9 h-9" />
                            <span>Email: contact@votre-domaine.ma</span>
                        </div>

                        <div className="flex items-center space-x-4 text-2xl text-[#6C2E0A]">
                            <HiOutlinePhone className="w-9 h-9" />
                            <span>Téléphone: +212 6 12 34 56 78</span>
                        </div>

                        <p className="text-gray-700 text-lg">
                            N’hésitez pas à nous contacter pour toute demande d’information ou devis.
                        </p>
                    </div>
                </div>

                {/* Location Card */}
                <div className="w-full max-w-5xl bg-gray-50 p-8 rounded-2xl shadow-lg flex flex-col space-y-4">
                    <h2 className="text-2xl font-semibold text-[#6C2E0A]">Localisation</h2>
                    <p>Zone Industrielle, Azilal, Maroc</p>
                    <div className="w-full h-56 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d251.57935025319492!2d-6.571011156260874!3d31.96537867188906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda49a8b15b82733%3A0x233c01288788e8d8!2sAzilal!5e0!3m2!1sfr!2sma!4v1755272890529!5m2!1sfr!2sma"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
