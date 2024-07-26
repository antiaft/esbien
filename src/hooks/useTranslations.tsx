import { useEffect, useState } from 'react';
import { Language } from '../types';

export const useTranslations = () => {
  const [currentLocale, setCurrentLocale] = useState<Language>('es');

  useEffect(() => {
    const storedLocale = localStorage.getItem('appLocale');
    if (storedLocale === 'es' || storedLocale === 'gal') {
      setCurrentLocale(storedLocale);
    } else {
      const browserLocale = navigator.language;
      if (browserLocale === 'es' || browserLocale === 'gal') {
        setCurrentLocale(browserLocale);
      } else {
        setCurrentLocale('es');
      }
    }
  }, []);

  const handleLanguageChange = (newLocale: Language) => {
    window.location.reload()
    localStorage.setItem('appLocale', newLocale);
  };

  return {
    handleLanguageChange,
    currentLocale,
    setCurrentLocale
  };
}

