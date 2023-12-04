import { useTheme } from "../../context/ThemeContext";
export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="header">
        <h1>TODO</h1>
        <button className="theme-switcher" onClick={toggleTheme}>
          {theme === "light" ? (
            <img src="./icon-moon.svg" alt="icon of a moon" />
          ) : (
            <img src="./icon-sun.svg" alt="icon of sun" />
          )}
        </button>
      </div>
    </>
  );
};
