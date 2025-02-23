"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
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
    <div
      ref={dropdownRef}
      className="absolute top-2 right-16 flex items-center"
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme === "light" && (
          <Sun
            size={20}
            className="text-[#386FA4] hover:text-[#2f5981] transition-colors"
          />
        )}
        {theme === "dark" && (
          <Moon
            size={20}
            className="text-[#386FA4] hover:text-[#2f5981] transition-colors"
          />
        )}
        {theme === "system" && (
          <Monitor
            size={20}
            className="text-[#386FA4] hover:text-[#2f5981] transition-colors"
          />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 min-w-[120px] z-50">
          <button
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              theme === "light" ? "text-[#386FA4] font-medium" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <Sun size={16} />
              Light
            </span>
          </button>
          <button
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              theme === "dark" ? "text-[#60A5FA] font-medium" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <Moon size={16} />
              Dark
            </span>
          </button>
          <button
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              theme === "system" ? "text-[#386FA4] font-medium" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <Monitor size={16} />
              System
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
