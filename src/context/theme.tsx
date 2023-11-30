import React, { createContext, useState } from "react";
interface ThemeContextProps {
  theme: string;
  setTheme: (color: string) => void;
}
const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});
const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const valueToShare = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={valueToShare}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
