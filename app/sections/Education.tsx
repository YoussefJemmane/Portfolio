import { motion } from 'framer-motion';
import EducationItem from '../components/EducationItem';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
<<<<<<< HEAD
  const { t } = useLanguage();

  const educations = [
    {
      degree: t('education.degree1'),
      institution: t('education.institution1'),
      date: t('education.date1'),
      location: t('education.location1'),
      details: []
    }
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
          {t('education')}
        </motion.h2>
        {educations.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
=======
    const educations = [
      {
        degree: "Bachelor's Degree in Software Engineering and Information Systems",
        institution: "ENSA, Ibn Tofail University",
        date: "",
        location: "Kenitra, Morocco",
        details: [
         
        ]
      }
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-[#D84747]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>
          {educations.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Education;
>>>>>>> 166d5ab49765598b8a795aee6fd3b191641a98b2
