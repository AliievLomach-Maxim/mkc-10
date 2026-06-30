import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()
export const useLanguageContext = () => useContext(LanguageContext)

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('ua')

  const handleLang = (newLang) => {
    setLanguage(newLang)
  }
  const store = {
    language,
    handleLang,
  }
  return <LanguageContext.Provider value={store}>{children}</LanguageContext.Provider>
}

export default LanguageContextProvider
