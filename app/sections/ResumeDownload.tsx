import React from "react";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ResumeDownload = () => {
  const { t, language } = useLanguage(); 
  console.log(language);
  const cvPath = language === 'fr' ? '/YoussefJemmaneFR.pdf' : '/YoussefJemmaneEN.pdf';
  const fileName = language === 'fr' ? 'Youssef_Jemmane.pdf' : 'Youssef_Jemmane.pdf';

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#386FA4] dark:text-[#60A5FA] transition-colors duration-200">
              {t("resume.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-200">
              {t("resume.description")}
            </p>
          </div>
          <div>
            <a
              href={cvPath}
              download={fileName}
              className="inline-flex items-center px-6 py-3 bg-[#386FA4] hover:bg-[#2f5981] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] text-white font-semibold rounded-lg transition duration-300"
            >
              <Download size={20} className="mr-2" />
              {t("resume.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;