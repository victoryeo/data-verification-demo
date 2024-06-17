import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import localizationData from '../../../../utils/src/language';
interface LanguageContextType {
  language: string;
  changeLanguage: (language: string) => void;
  lang: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguageContext must be used within a LanguageProvider'
    );
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    setLanguage(localStorage.getItem('kawasaki-language') || 'en');
  }, []);

  const changeLanguage = (value: string) => {
    setLanguage(value);
    localStorage.setItem('kawasaki-language', value);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, lang: localizationData.lang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
