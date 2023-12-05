import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    let newTheme = "";
    if (theme === "light") {
      newTheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      newTheme = "light";
      localStorage.setItem("theme", "light");
    }
    setTheme(newTheme);
  };

  useEffect(() => {
    const themeLs = localStorage.getItem("theme");
    if (themeLs) {
      setTheme(themeLs);
    }
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themeValues = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};
