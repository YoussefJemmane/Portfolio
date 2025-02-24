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
      className="relative flex items-center"
      ref={dropdownRef}
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 cursor-pointer transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme === "light" && <Sun size={20} className="text-[#386FA4]" />}
        {theme === "dark" && <Moon size={20} className="text-[#386FA4]" />}
        {theme === "system" && <Monitor size={20} className="text-[#386FA4]" />}
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg py-1 min-w-[120px] z-50">
          <button
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm rounded-md transition-colors ${
              theme === "light"
                ? "bg-gray-200 dark:bg-gray-700 font-medium"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
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
            className={`w-full px-4 py-2 text-left text-sm rounded-md transition-colors ${
              theme === "dark"
                ? "bg-gray-200 dark:bg-gray-700 font-medium"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
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
            className={`w-full px-4 py-2 text-left text-sm rounded-md transition-colors ${
              theme === "system"
                ? "bg-gray-200 dark:bg-gray-700 font-medium"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
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
