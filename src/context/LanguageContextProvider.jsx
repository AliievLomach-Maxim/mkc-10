import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()
export const useLanguageContext = () => useContext(LanguageContext)

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('ua')

  const handleLang = (newLang) => {
    setLanguage(newLang)
  }
  return (
    <LanguageContext.Provider
      value={{
        language,
        handleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
