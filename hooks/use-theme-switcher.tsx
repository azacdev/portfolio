import { useEffect, useState, Dispatch, SetStateAction } from "react";

type ThemeMode = "light" | "dark" | null;

const useThemeSwitcher = (): [
  ThemeMode,
  Dispatch<SetStateAction<ThemeMode>>
] => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState<ThemeMode>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      let check: ThemeMode;
      if (mode === null) {
        // If mode is null, fetch from localStorage or use media query
        check = userPref === "dark" ? "dark" : "light";
      } else {
        // Otherwise, use the current mode
        check = mode;
      }

      setMode(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  useEffect(() => {
    if (mode !== null) {
      if (mode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
