import { useTheme } from "../../context/ThemeContext";

export const BackgroundImage = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <img
          src="./bg-desktop-light.jpg"
          alt="an image of mountains"
          className="desktop-light-background"
        />
      ) : (
        <img
          src="./bg-desktop-dark.jpg"
          alt="an image of a hallway"
          className="desktop-dark-background"
        />
      )}
    </>
  );
};
