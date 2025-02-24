import ThemeSwitcher from "../components/ThemeSwitcher";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function SettingsSection() {
  return (
    <div className="sticky top-1/2 right-4 -translate-y-1/2 flex flex-col gap-4 z-50 transform w-fit ml-auto">
      <div>
        <ThemeSwitcher />
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  );
}