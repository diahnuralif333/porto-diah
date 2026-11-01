import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
})

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('diah_porto_lang')
      if (saved === 'id' || saved === 'en') return saved
    } catch {
      // fallback
    }
    return 'id'
  })

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('diah_porto_lang', newLang)
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

