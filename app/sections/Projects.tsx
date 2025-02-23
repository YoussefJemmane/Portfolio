import React from 'react';
import { motion } from 'framer-motion';
import project1  from "@/app/assets/project1.png"
import project2  from "@/app/assets/project2.png"
import project3  from "@/app/assets/project3.png"
import ProjectCard from '../components/ProjectItem';
import { useLanguage } from '../context/LanguageContext';


const Projects = () => {
  const { t } = useLanguage();

  const projectsData = [
    {
      image: project3,
      projectName: t('projects.title1'),
      projectLink: "https://www.afnanephotography.com/",
      projectDescription: t('projects.description1'),
      projectTech: ["Next.js", "TailwindCSS"],
      projectExternalLinks: {
        github: "https://github.com/YoussefJemmane/AfnanePhotography",
      },
    },
    {
      image: project1,
      projectName: t('projects.title2'),
      projectLink: "",
      projectDescription: t('projects.description2'),
      projectTech: ["React", "Express", "MongoDB", "Node.js", "Tailwind", "DaisyUI", "Alpine.js", "Puppeteer"],
      projectExternalLinks: {
        github: "https://github.com/YoussefJemmane/CV_Builder",
        externalLink: "",
      },
    },
    {
      image: project2,
      projectName: t('projects.title3'),
      projectLink: "",
      projectDescription: t('projects.description3'),
      projectTech: ["Laravel", "Breeze", "Tailwind"],
      projectExternalLinks: {
        github: "https://github.com/YoussefJemmane/Location_voiture",
        externalLink: "",
      },
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
          {t('projects')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;