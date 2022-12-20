import { useEffect, useState } from "preact/hooks";

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
    <button class="absolute top-6 right-8" onClick={() => handleClick()}>
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}
