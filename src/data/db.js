

import projet1 from "../assets/projet1.jpg";
import projet2 from "../assets/projet2.jpg";
import projet3 from "../assets/projet3.jpg";

export const services = [{
    id: 1,
    icon: "FaWater",
    title: "Distribution d'eau",
    description: "Fourniture d'eau potable fiable et durable."
},
{
    id: 2,
    icon: "FaBuilding",
    title: "Construction",
    description: "Bâtiments modernes respectant les normes."
},
{
    id: 3,
    icon: "FaTools",
    title: "Vente de Matériaux de Construction",
    description: "Fourniture de matériaux de qualité pour tous vos projets."
}];
export const domains = [
  {
    id: 1,
    icon: "FaCheckCircle",
    title: "Qualité supérieure",
    description: "Nous soignons chaque détail pour vous garantir le meilleur résultat.",
    color: "#E5702A",      // اللون الرئيسي ممكن تستعمله لتلوين الأيقونة أو النص
    bgColor: "#fff"        // لون الخلفية ديال الكارت
  },
  {
    id: 2,
    icon: "FaClock",
    title: "Disponibilité 24/7",
    description: "Notre équipe est toujours là pour vous soutenir, à tout moment.",
    color: "#fff",
    bgColor: "#E5702A"
  },
  {
    id: 3,
    icon: "FaHandshake",
    title: "Partenaire de confiance",
    description: "Nos clients comptent sur nous grâce à notre honnêteté et engagement.",
    color: "#E5702A",
    bgColor: "#fff"
  }
];
export const projects = [
  {
    id: 1,
    objet: "Dar Talib à la C.T. Tabant",
    maitredouvrage: "Province D'azilal (INDH)",
    imageUrl: projet1,
    link: "/projets/1"
  },
  {
    id: 2,
    objet: "Dar Talib à la C.T. Tabant",
    maitredouvrage: "Province D'azilal (INDH)",
    imageUrl: projet2,
    link: "/projets/2"
  },
  {
    id: 3,
    objet: "Dar Talib à la C.T. Tabant",
    maitredouvrage: "Province D'azilal (INDH)",
    imageUrl: projet3,
    link: "/projets/3"
  },
];