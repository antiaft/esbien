import { useTranslations } from '../../hooks/useTranslations';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { handleLanguageChange, currentLocale } = useTranslations()

  return (
    <div id="language-switcher">
      <button disabled={currentLocale === 'es'} onClick={() => handleLanguageChange('es')}>
        🇪🇸
      </button>
      <button disabled={currentLocale === 'gal'} onClick={() => handleLanguageChange('gal')}>
        🏴󠁥󠁳󠁧󠁡󠁿
      </button>
    </div>
  );
}

export default LanguageSwitcher;
