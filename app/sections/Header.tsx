import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactItem from "../components/ContactItem";
import photo from "@/app/assets/p.jpg";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Header = () => {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0">
          <div className="flex-shrink-0">
            <Image
              src={photo}
              alt="Profile"
              className="rounded-full w-[150px] h-[150px] object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#386FA4] dark:text-[#60A5FA] transition-colors duration-200">
              Youssef Jemmane
            </h1>
            <h2 className="text-xl md:text-2xl text-[#386FA4] dark:text-[#60A5FA] italic font-medium mt-2 transition-colors duration-200">
              {t("header.job")}
            </h2>
          </div>
          <div className="flex flex-col space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-200">
            <LanguageSwitcher />
            <ThemeSwitcher />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
