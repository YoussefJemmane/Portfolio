export const defaultLocale = "en";
export const locales = ["en", "fr"];

export interface Translation {
  [key: string]: string;
}

export const translations: Record<string, Translation> = {
  en: {
    "header.job": "Junior Developer",
    "header.country": "Morocco",
    experience: "Experience",
    "experience.title1": "Full Stack Developer Intern",
    "experience.company1": "Ibn Tofail University",
    "experience.date1": "12/2023 – 05/2024",
    "experience.location1": "Kenitra, Morocco",
    "experience.description1":
      "Developed from scratch a laboratories budget management app.",

    "experience.title2": "Back End Developer Intern",
    "experience.company2": "FeverTokens",
    "experience.date2": "11/2023 – 05/2024",
    "experience.location2": "Paris, France (Remotely)",
    "experience.description2.1":
      "Developed a dynamic calendar component that allows users to select dates and stores them in a table.",
    "experience.description2.2":
      "Created the FeverTokens Package-Oriented Transpiler Demo, converting smart contracts into packages.",

    "experience.title3": "Full Stack Developer Intern",
    "experience.company3": "Marsa Maroc",
    "experience.date3": "03/2023 – 04/2023",
    "experience.location3": "Casablanca, Morocco",
    "experience.description3":
      "Built a responsive full stack web application for managing ships, workers and reporting issues.",
    education: "Education",
    "education.degree1":
      "Bachelor's Degree in Software Engineering and Information Systems",
    "education.institution1": "ENSA, Ibn Tofail University",
    "education.date1": " ",
    "education.location1": "Kenitra, Morocco",
    projects: "Projects",
    "projects.title1": "Afnane Photography",
    "projects.description1":
      "A static website for Afnane Photography, a photography studio specializing in personalized and unique photo sessions.",

    "projects.title2": "CV Builder App",
    "projects.description2":
      "A user-friendly web application that simplifies and enhances the resume creation process.",

    "projects.title3": "Rent Cars App",
    "projects.description3":
      "A user-friendly web application that allows you to rent a car and manage your reservations there is also an admin panel to manage the cars and reservations.",
    "resume.title": "Download My Resume",
    "resume.description":
      "Get a comprehensive overview of my skills and experience",
    "resume.button": "Download Resume",
    skills: "Skills",
  },
  fr: {
    "header.job": "Développeur Junior",
    "header.country": "Maroc",
    experience: "Expérience",
    "experience.title1": "Stagiaire Développeur Full Stack",
    "experience.company1": "Université Ibn Tofail",
    "experience.date1": "12/2023 – 05/2024",
    "experience.location1": "Kenitra, Maroc",
    "experience.description1":
      "Développé à partir de zéro une application de gestion de budget des laboratoires.",

    "experience.title2": "Stagiaire Développeur Back End",
    "experience.company2": "FeverTokens",
    "experience.date2": "11/2023 – 05/2024",
    "experience.location2": "Paris, France (À distance)",
    "experience.description2.1":
      "Développé un composant de calendrier dynamique permettant aux utilisateurs de sélectionner des dates et de les stocker dans une table.",
    "experience.description2.2":
      "Créé la démo du transpileur orienté package FeverTokens, convertissant les contrats intelligents en packages.",

    "experience.title3": "Stagiaire Développeur Full Stack",
    "experience.company3": "Marsa Maroc",
    "experience.date3": "03/2023 – 04/2023",
    "experience.location3": "Casablanca, Maroc",
    "experience.description3":
      "Construit une application web full stack responsive pour la gestion des navires, des travailleurs et le signalement des problèmes.",
    education: "Éducation",
    "education.degree1": "Licence en Génie Logiciel et Systèmes d'Information",
    "education.institution1": "ENSA, Université Ibn Tofail",
    "education.date1": " ",
    "education.location1": "Kenitra, Maroc",
    projects: "Projets",
    "projects.title1": "Afnane Photography",
    "projects.description1":
      "Un site web statique pour Afnane Photography, un studio de photographie spécialisé dans les séances photo personnalisées et uniques.",

    "projects.title2": "Application de création de CV",
    "projects.description2":
      "Une application web conviviale qui simplifie et améliore le processus de création de CV.",

    "projects.title3": "Application de location de voitures",
    "projects.description3":
      "Une application web conviviale qui vous permet de louer une voiture et de gérer vos réservations avec un panneau d'administration pour gérer les voitures et les réservations.",
    "resume.title": "Télécharger Mon CV",
    "resume.description":
      "Obtenez un aperçu complet de mes compétences et de mon expérience",
    "resume.button": "Télécharger CV",
    skills: "Compétences",
  },
};
