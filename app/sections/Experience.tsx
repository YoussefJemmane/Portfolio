import React from "react";
import { motion } from "framer-motion";
import ExperienceItem from "../components/ExperienceItem";
<<<<<<< HEAD
import { useLanguage } from "../context/LanguageContext";
=======
>>>>>>> 166d5ab49765598b8a795aee6fd3b191641a98b2

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.title1'),
      company: t('experience.company1'),
      date: t('experience.date1'),
      location: t('experience.location1'),
      description: [
<<<<<<< HEAD
        t('experience.description1'),
=======
        "Developed from scratch a laboratories budget management app.",
>>>>>>> 166d5ab49765598b8a795aee6fd3b191641a98b2
      ],
    },
    {
      title: t('experience.title2'),
      company: t('experience.company2'),
      date: t('experience.date2'),
      location: t('experience.location2'),
      description: [
<<<<<<< HEAD
        t('experience.description2.1'),
        t('experience.description2.2'),
=======
        "Developed a dynamic calendar component that allows users to select dates and stores them in a table.",
        "Created the FeverTokens Package-Oriented Transpiler Demo, converting smart contracts into packages.",
>>>>>>> 166d5ab49765598b8a795aee6fd3b191641a98b2
      ],
    },
    {
      title: t('experience.title3'),
      company: t('experience.company3'),
      date: t('experience.date3'),
      location: t('experience.location3'),
      description: [
<<<<<<< HEAD
        t('experience.description3'),
=======
        "Built a responsive full stack web application for managing ships, workers and reporting issues.",
>>>>>>> 166d5ab49765598b8a795aee6fd3b191641a98b2
      ],
    },
  ];
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-[#386FA4] dark:text-[#60A5FA] transition-colors duration-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('experience')}
      </motion.h2>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  </section>
  );
};

export default Experience;
