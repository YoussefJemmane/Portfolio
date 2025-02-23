"use client";
import Header from "./sections/Header";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import { motion } from "framer-motion";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import AnimatedSection from "./components/AnimatedSection";
import ResumeDownload from "./sections/ResumeDownload";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 text-black dark:text-gray-100 transition-colors duration-200"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 bg-white dark:bg-gray-900"
          >
            <Header />
          </motion.div>
          <AnimatedSection>
            <Experience />
          </AnimatedSection>
          <AnimatedSection>
            <Education />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <ResumeDownload />
          </AnimatedSection>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
