'use client';
import React, { createContext, useState, useContext} from "react";
import { themes} from "./themes";
import {ThemeContextType,ThemeProviderProps,} from './themesType'
// 创建主题 Context
const ThemeContext = createContext<ThemeContextType|undefined>({
  theme: themes.light,
  toggleTheme: ()=>{}
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark); // 初始主题为 light

  const toggleTheme = () :void => {
    console.log('chufa')
    setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider !');
  }
  return context;
};