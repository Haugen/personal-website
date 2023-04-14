import { useEffect, useState } from "preact/hooks";

import MoonIcon from "../icons/Moon";
import SunIcon from "../icons/Sun";

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("fluffy_theme") ?? "light"
  );

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("fluffy_theme", theme);
  }, [theme]);

  if (!isMounted) return null;

  return (
    <button class="h-6 w-6" onClick={() => handleClick()}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
