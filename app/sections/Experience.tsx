import React from "react";
import { motion } from "framer-motion";
import ExperienceItem from "../components/ExperienceItem";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.title1'),
      company: t('experience.company1'),
      date: t('experience.date1'),
      location: t('experience.location1'),
      description: [
        t('experience.description1'),
      ],
    },
    {
      title: t('experience.title2'),
      company: t('experience.company2'),
      date: t('experience.date2'),
      location: t('experience.location2'),
      description: [
        t('experience.description2.1'),
        t('experience.description2.2'),
      ],
    },
    {
      title: t('experience.title3'),
      company: t('experience.company3'),
      date: t('experience.date3'),
      location: t('experience.location3'),
      description: [
        t('experience.description3'),
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
