// src/data/db.js
import projet1 from "../assets/projes/projet1.jpg";
import projet2 from "../assets/projes/projet2.jpg";
import projet3 from "../assets/projes/projet3.jpg";
import step1 from "../assets/steps/step1.jpg";
import step2 from "../assets/steps/step2.jpg";
import step3 from "../assets/steps/step3.jpg";
import step4 from "../assets/steps/step4.jpg";


export const services = [
  {
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
  }
];

export const domains = [
  {
    id: 1,
    icon: "FaCheckCircle",
    title: "Qualité supérieure",
    description: "Nous soignons chaque détail pour vous garantir le meilleur résultat.",
    color: "#E5702A",      
    bgColor: "#fff"        
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
    annee: 2013,
    maitreOuvrage: "Directeur Provinciale Des Eaux Et Foret et la lutte contre la désertification de Ouarzazate ",
    objet: "Exécution Des Travaux De Regarnis Et Entretien Des Plantations Anciennes Dans Le Périmètre De Targa-Zougharne-(100 Ha), CR Ighrem Nougdal Province De Ouarzazate",
    imageUrl: projet1,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
    
  },
  {
    id: 2,
    annee: 2013,
    maitreOuvrage: "Province D’azilal (INDH)",
    objet: "Aménagement Des Pistes rurales Et Des Ouvrages D’arts Dans La Province D’Azilal :Travaux De Dallage Des Voies Des Piétons Au Douar Talba À La Commune Rurale Agoudi N’lkheir",
    imageUrl: projet2,
     gallery: [
       {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]

  },
  {
    id: 3,
    annee: 2013,
    maitreOuvrage: "Directeur Provinciale Des Eaux Et Foret Et la lutte contre la désertification de Ouarzazate",
    objet: "Exécution Des Travaux De Regarnis Et Entretien Des Plantations Anciennes Dans Le périmètre d'Adha III (100 Ha), CR De Telouate - Province De Ouarzazate",
    imageUrl: projet3,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 4,
    annee: 2013,
    maitreOuvrage: "Commune Azilal",
    objet: "Marché N°05/2013/SST/CUAZ C/Pavage Des Rues Au Sous-Quartiers Tifarouine À La Municipalité D’azilal",
    imageUrl: projet1,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 5,
    annee: 2013,
    maitreOuvrage: "Directeur Provinciale Des Eaux et forêts",
    objet: "Exécution Des Travaux De Regarnis Et Entretien Des Plantations Anciennes Sur Une Superficie De 320 Ha",
    imageUrl: projet2,
    gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 6,
    annee: 2014,
    maitreOuvrage: "Commune Ouaoula",
    objet: "Réhabilitation Du Système Adduction En Eau Potable Au Centre Ouaoula À La Commune OUAOUALA",
    imageUrl: projet3,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 7,
    annee: 2014,
    maitreOuvrage: "Commune Beni Yagrine",
    objet: "Construction D’un Centre Commercial Communal",
    imageUrl: projet1,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 8,
    annee: 2014,
    maitreOuvrage: "Commune Foum Jemaa",
    objet: "Travaux D’aménagement Des Rues À Hay Akharchane Au Centre De Foum-Jemaa Province D’Azilal",
    imageUrl: projet2,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 9,
    annee: 2014,
    maitreOuvrage: "Commune sidi hammadi",
    objet: "Travaux D’extension Du Réseau D’adduction D’eau Potable Pour Les Localités Oulad Attou Bas Lablane, Oulad Salem Lablane Et Oulad Said Dohra De La Commune Rurale Sidi El Hammadi",
    imageUrl: projet3,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 10,
    annee: 2014,
    maitreOuvrage: "Directeur provinciale des eaux et forêt et de la lutte contre la désertification de Tiznit",
    objet: "Exécution Des Travaux De Réhabilitation Et D’entretien De la piste De lm Ntizkt -sur 6 Kms commune Rurale de Ait Ahmed , cercle D'anzi province de Tiznit. ",
    imageUrl: projet1,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 11,
    annee: 2016,
    maitreOuvrage: "Commune Azilal",
    objet: "Pavage Des Rues Aux Quartiers : Bouhadi, Une Partie quartier AL-MASSIRA IGHIR  NIHAHANE ET AGHROUIZE AU QUARTIER AIT KHLIFT",
    imageUrl: projet2,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 12,
    annee: 2016,
    maitreOuvrage: "Commune Foum Jemaa",
    objet: "Entretien D’un Ouvrage D’Art Au Douar Ait Hmida Foum-Jemaa",
    imageUrl: projet3,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 13,
    annee: 2017,
    maitreOuvrage: "Conseil Provincial d’Azilal",
    objet: "Travaux de Construction d’un Centre Social à la Commune Territoriale Tabante, Province d’AZILAL",
    imageUrl: projet2,
    gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 14,
    annee: 2018,
    maitreOuvrage: "Conseil Provincial d’Azilal",
    objet: "Travaux de Construction d’un Centre Social à la Commune Territoriale Tillougite, Province d’AZILAL",
    imageUrl: projet2,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 15,
    annee: 2019,
    maitreOuvrage: "Conseil Provincial d’Azilal",
    objet: "Adduction En Eau Potable Des Douars Arg et Timdgaizine à la C.T Ait Majden,province d'AZILAL .",
    imageUrl: projet1,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
   {
    id: 16,
    annee: 2020,
    maitreOuvrage: "Province D’Azilal (INDH)",
    objet: "Travaux De Construction De Dar Talib À La Ct Azilal, Province Azilal",
    imageUrl: projet2,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
   {
    id: 17,
    annee: 2021,
    maitreOuvrage: "Commune Tabant",
    objet: "Travaux De Construction Et Equipement De La Maison Communale",
    imageUrl: projet3,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
   {
    id: 18,
    annee: 2022,
    maitreOuvrage: "Province D’Azilal (INDH)",
    objet: "Centre de Santé Tabant",
    imageUrl: projet1,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
   {
    id: 19,
    annee: 2023,
    maitreOuvrage: "Province D’Azilal (INDH)",
    objet: "Dar Talib à la C.T. Tabant",
    imageUrl: projet2,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },

  
  {
    id: 20,
    annee: 2024,
    maitreOuvrage: "ASSOCIATION AIT BOUMGAZ POUR LES OEUVRES SOCIALES",
    objet: "TRAVAUX DE CONSTRUCTION D’UN CENTRE D’ACCUEIL DES CARAVANES MEDICALES A LA C.T. TABANT PROVINCE D’AZILAL",
    imageUrl: projet3,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  },
  {
    id: 21,
    annee: 2025,
    maitreOuvrage: "Conseil Provincial d’Azilal",
    objet: "Travaux de la mise à niveau du souk hebdomadaire à la CT de Tanant, province d’Azilal",
    imageUrl: projet1,
     gallery: [
      {
        image: step1,
        description: "Etape 1"
      },
      {
        image: step2,
        description: "Etape 2"
      },
      {
        image: step3,
        description: "Etape 3"
      },
            {
        image: step4,
        description: "Etape 4"
      },
           {
        image: step1,
        description:  "Etape 5"
      },
      {
        image: step2,
        description:  "Etape 6"
      },
      {
        image: step3,
        description:  "Etape 7"
      },
      {
        image: step4,
        description: "Etape 8"
      },
            {
        image: step4,
        description:  "Etape 9"
      },
            {
        image: step4,
        description:  "Etape 10"
      },
    ]
  }
];
