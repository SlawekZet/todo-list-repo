import { useTheme } from "../../context/ThemeContext";

export const BackgroundImage = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <div className="light-background" />
      ) : (
        <div className="dark-background" />
      )}
    </>
  );
};
