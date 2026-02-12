import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLanguage, translations } from './translations'

const LanguageContext = createContext(null)

const getByPath = (source, path) =>
  path.split('.').reduce((value, key) => (value ? value[key] : undefined), source)

const formatValue = (value, params) => {
  if (typeof value !== 'string' || !params) {
    return value
  }

  return Object.keys(params).reduce(
    (result, key) => result.replace(new RegExp(`\\{${key}\\}`, 'g'), params[key]),
    value
  )
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('moiraLanguage')
    return stored && translations[stored] ? stored : defaultLanguage
  })

  useEffect(() => {
    localStorage.setItem('moiraLanguage', language)
    document.documentElement.lang = language
  }, [language])

  const t = useMemo(() => {
    return (path, params) => {
      const value = getByPath(translations[language], path)
      const fallback = getByPath(translations[defaultLanguage], path)
      const resolved = value !== undefined ? value : fallback

      return formatValue(resolved ?? path, params)
    }
  }, [language])

  const contextValue = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t]
  )

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
