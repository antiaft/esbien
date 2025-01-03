import { ChangeEvent } from 'react'
import { updateIntl, useAppDispatch, useAppSelector } from 'universal-scripts'
import locales from 'src/locales'

import './SelectLanguage.css'

export default function SelectLanguage() {
  const locale = useAppSelector((s) => s.intl.lang)
  const dispatch = useAppDispatch()

  const options: { value: string; label: string }[] = [
    { value: 'es', label: 'Es' },
    {
      value: 'gal',
      label: 'Gal'
    }
  ]

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const getDefaultLang = (): string => {
      const userLang =
        document.documentElement.lang || window.navigator.language
      return Object.keys(locales).includes(userLang) ? userLang : 'en'
    }
    const lang = value === 'default' ? getDefaultLang() : value
    dispatch(
      updateIntl({
        lang,
        messages: locales[lang]
      })
    )
    document.cookie = `lang=${lang}`
  }

  return (
    <div className={`language-selector ${locale}`}>
      <select
        defaultValue={locale}
        onChange={handleChange}
        name="language-select"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
