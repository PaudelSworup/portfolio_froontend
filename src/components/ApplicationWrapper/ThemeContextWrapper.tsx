import React, { ReactNode, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    const bodyElement = document.body;
    if (!isDarkMode) {
      bodyElement.style.backgroundImage = "none";
      bodyElement.style.backgroundColor = "#222";
    } else {
      bodyElement.style.backgroundColor = "";
      bodyElement.style.backgroundImage = "";
    }
  };

  return (
    <ThemeContext.Provider value={{ darkmode: isDarkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
