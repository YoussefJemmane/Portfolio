import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactItem from "../components/ContactItem";
import photo from "@/app/assets/p.jpg";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsCollapsed(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    expanded: {
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
    collapsed: {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    }
  };

  const profileImageVariants = {
    expanded: { 
      opacity: 1, 
      scale: 1,
      display: "block"
    },
    collapsed: { 
      opacity: 0, 
      scale: 0.8,
      transitionEnd: {
        display: "none"
      }
    }
  };

  const nameVariants = {
    expanded: {
      fontSize: "2.25rem",
    },
    collapsed: {
      fontSize: "1.875rem",
    }
  };

  const jobTitleVariants = {
    expanded: {
      fontSize: "1.5rem",
    },
    collapsed: {
      fontSize: "1.125rem",
    }
  };

  const contactInfoVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      display: "block"
    },
    collapsed: {
      opacity: 0,
      x: 20,
      transitionEnd: {
        display: "none"
      }
    }
  };

  return (
    <motion.section
      variants={headerVariants}
      animate={isCollapsed ? "collapsed" : "expanded"}
      initial="expanded"
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          {/* Profile Image */}
          <motion.div
            variants={profileImageVariants}
            animate={isCollapsed ? "collapsed" : "expanded"}
            initial="expanded"
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <Image
              src={photo}
              alt="Profile"
              className="rounded-full w-[150px] h-[150px] object-cover"
            />
          </motion.div>

          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <motion.h1
              variants={nameVariants}
              animate={isCollapsed ? "collapsed" : "expanded"}
              initial="expanded"
              transition={{ duration: 0.3 }}
              className="font-bold text-[#386FA4] dark:text-[#60A5FA]"
            >
              Youssef Jemmane
            </motion.h1>
            <motion.h2
              variants={jobTitleVariants}
              animate={isCollapsed ? "collapsed" : "expanded"}
              initial="expanded"
              transition={{ duration: 0.3 }}
              className="text-[#386FA4] dark:text-[#60A5FA] italic font-medium"
            >
              {t("header.job")}
            </motion.h2>
          </div>

          {/* Contact Info and Switchers */}
          <div className="flex items-center space-x-4">
           

            {/* Contact Information */}
            <AnimatePresence>
              <motion.div
                variants={contactInfoVariants}
                animate={isCollapsed ? "collapsed" : "expanded"}
                initial="expanded"
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-2 pt-3 text-gray-700 dark:text-gray-300"
              >
                <ContactItem
                  icon={<Mail size={20} />}
                  text="youssef.jemmane@outlook.com"
                  href="mailto:youssef.jemmane@outlook.com"
                />
                <ContactItem
                  icon={<MapPin size={20} />}
                  text={`Casablanca, ${t("header.country")}`}
                />
                <ContactItem
                  icon={<Phone size={20} />}
                  text="+212 675-396915"
                  href="tel:+212675396915"
                />
                <ContactItem
                  icon={<Github size={20} />}
                  text="YoussefJemmane"
                  href="https://github.com/YoussefJemmane"
                />
                <ContactItem
                  icon={<Linkedin size={20} />}
                  text="Youssef Jemmaane"
                  href="https://www.linkedin.com/in/jemmaneyoussef/"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;