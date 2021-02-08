import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  }

  return (
    <ThemeContext.Provider value={[theme, themeToggle]}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };
