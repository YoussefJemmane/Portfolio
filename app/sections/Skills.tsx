import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import JavaIcon from "@/app/assets/skills/java.svg";
import SQLIcon from "@/app/assets/skills/sql.svg";
import PHPIcon from "@/app/assets/skills/php.svg";
import PythonIcon from "@/app/assets/skills/python.svg";
import MongoDBIcon from "@/app/assets/skills/mongodb.svg";
import MySQLIcon from "@/app/assets/skills/mysql.svg";
import SQLiteIcon from "@/app/assets/skills/sqlite.svg";
import GitIcon from "@/app/assets/skills/git.svg";
import VercelIcon from "@/app/assets/skills/vercel.svg";
import TypeScriptIcon from "@/app/assets/skills/typescript.svg";
import LinuxIcon from "@/app/assets/skills/linux.svg";
import BashIcon from "@/app/assets/skills/bash.svg";
import PowerShellIcon from "@/app/assets/skills/pwsh.svg";
import LaravelIcon from "@/app/assets/skills/laravel.svg";
import NextjsIcon from "@/app/assets/skills/nextjs.svg";
import ExpressIcon from "@/app/assets/skills/express.svg";
import AlpineJSIcon from "@/app/assets/skills/alpinejs.svg";
import TailwindCSSIcon from "@/app/assets/skills/tailwindcss.svg";
import LivewireIcon from "@/app/assets/skills/livewire.svg";
import UMLIcon from "@/app/assets/skills/uml.svg";

import { useLanguage } from "../context/LanguageContext";
import SkillIcon from "../components/SkillIcon";

const Skills = () => {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const skills = [
    { Icon: JavaIcon, name: "Java" },
    { Icon: TypeScriptIcon, name: "TypeScript" },
    { Icon: SQLIcon, name: "SQL" },
    { Icon: PHPIcon, name: "PHP" },
    { Icon: PythonIcon, name: "Python" },
    { Icon: MongoDBIcon, name: "MongoDB" },
    { Icon: MySQLIcon, name: "MySQL" },
    { Icon: SQLiteIcon, name: "SQLite" },
    { Icon: GitIcon, name: "Git" },
    { Icon: VercelIcon, name: "Vercel" },
    { Icon: LinuxIcon, name: "Linux" },
    { Icon: BashIcon, name: "Bash" },
    { Icon: PowerShellIcon, name: "PowerShell" },
    { Icon: LaravelIcon, name: "Laravel" },
    { Icon: ExpressIcon, name: "Express" },
    { Icon: NextjsIcon, name: "Next.js" },
    { Icon: AlpineJSIcon, name: "Alpine.js" },
    { Icon: TailwindCSSIcon, name: "TailwindCSS" },
    { Icon: LivewireIcon, name: "Livewire" },
    { Icon: UMLIcon, name: "UML" },
  ];

  useEffect(() => {
    if (!isDragging) {
      controls.start({
        x: "-100%",
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isDragging, controls]);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-[#386FA4] dark:text-[#60A5FA] transition-colors duration-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("skills")}
        </motion.h2>
        <div
          className="overflow-hidden cursor-grab"
          ref={containerRef}
          onMouseEnter={() => setIsDragging(true)}
          onMouseLeave={() => setIsDragging(false)}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={containerRef}
            animate={controls}
            style={{
              width: `${skills.length * 100}px`,
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {skills.concat(skills).map((skill, index) => (
              <SkillIcon key={index} Icon={skill.Icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
