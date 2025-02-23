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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="absolute top-4 right-4 flex items-center"
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Languages size={20} className="text-[#386FA4] hover:text-[#2f5981] transition-colors" />
      </div>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 min-w-[120px] z-50"
        >
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLocale(lang);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                locale === lang ? 'text-[#386FA4] font-medium' : 'text-gray-700 dark:text-gray-300'
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
