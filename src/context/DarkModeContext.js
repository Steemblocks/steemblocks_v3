// DarkModeContext.js
import React, {
    createContext,
    useState,
    useContext,
    useEffect,
  } from "react";
  
  const DarkModeContext = createContext(undefined);
  
  export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(() => {
      const savedDarkMode = localStorage.getItem("darkMode");
      return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });
  
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem("darkMode", JSON.stringify(newMode));
        return newMode;
      });
    };
  
    useEffect(() => {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode) {
        setDarkMode(JSON.parse(savedDarkMode));
      }
    }, []);
  
    return (
      <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
  };
  
  export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
      throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
  };
  