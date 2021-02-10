import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark')
    }
    else {
      setTheme('light');
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme ?? 'light');
  }, [])

  return (
    <ThemeContext.Provider value={[theme, themeToggle]}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };
