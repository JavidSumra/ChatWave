import React, { createContext, useState } from "react";
interface ThemeContextProps {
  theme: string;
  setTheme: (color: string) => void;
}
const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  setTheme: () => {},
});
const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
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
