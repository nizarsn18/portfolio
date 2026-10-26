import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, personalData } from '../data';

const ThemeLanguageContext = createContext(null);

export const ThemeLanguageProvider = ({ children }) => {
  // Theme state: 'dark' by default
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('nizar_portfolio_theme');
      if (savedTheme) return savedTheme;
    }
    return 'dark';
  });

  // Language state: 'fr' by default
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('nizar_portfolio_lang');
      if (savedLang) return savedLang;
    }
    return 'fr';
  });

  // Apply theme to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('nizar_portfolio_theme', theme);
  }, [theme]);

  // Apply lang to document element
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('nizar_portfolio_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const switchLanguage = (targetLang) => {
    if (targetLang) {
      setLang(targetLang);
    } else {
      setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
    }
  };

  const t = content[lang] || content.fr;

  return (
    <ThemeLanguageContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        setLang: switchLanguage,
        toggleLanguage: () => switchLanguage(),
        t,
        personalData
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within ThemeLanguageProvider');
  }
  return context;
};
