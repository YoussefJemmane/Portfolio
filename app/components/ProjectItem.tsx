import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface ProjectExternalLinks {
  github?: string;
  externalLink?: string;
}

export interface Project {
  image: StaticImageData;
  projectName: string;
  projectLink: string;
  projectDescription: string;
  projectTech: string[];
  projectExternalLinks: ProjectExternalLinks;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    }}
  >
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <Image src={project.image} alt={project.projectName} />
    </motion.div>
    <div className="p-6">
      <motion.h3
        className="text-xl font-bold mb-2 text-[#386FA4] dark:text-[#60A5FA]"
        whileHover={{ scale: 1.05 }}
      >
        {project.projectName}
      </motion.h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.projectDescription}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.projectTech.map((tech, i) => (
          <motion.span
            key={i}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm"
            whileHover={{ backgroundColor: "#386FA4", color: "white" }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          {project.projectExternalLinks.github && (
            <motion.a
              href={project.projectExternalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-[#386FA4] dark:hover:text-[#60A5FA]"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github size={20} />
            </motion.a>
          )}
          {project.projectLink && (
            <motion.a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-[#386FA4] dark:hover:text-[#60A5FA]"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
