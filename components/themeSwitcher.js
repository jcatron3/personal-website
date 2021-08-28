import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const clickHandler = () =>
    setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark");

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4 dark:text-white"
      onClick={clickHandler}
    >
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </button>
  );
};

export default ThemeSwitch;