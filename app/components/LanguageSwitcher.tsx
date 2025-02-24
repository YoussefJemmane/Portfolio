import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { locales } from "../i18n/config";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center" ref={dropdownRef}>
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 cursor-pointer transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Languages size={20} className="text-[#386FA4]" />
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg py-1 min-w-[120px] z-50">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLocale(lang);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm rounded-md transition-colors ${
                locale === lang
                  ? "bg-gray-200 dark:bg-gray-700 font-medium"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {lang === "en" ? "🇬🇧 English" : "🇫🇷 Français"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
