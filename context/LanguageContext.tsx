import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  // Carregar idioma do localStorage ao montar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Salvar idioma no localStorage quando mudar
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro do LanguageProvider');
  }
  return context;
};
