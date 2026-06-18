import { useContext } from 'react'
import { langContext } from '../../LangContext'
import { useLanguageContext } from '../../context/LanguageContextProvider'

const Modal = ({ children }) => {
  const langContext = useLanguageContext()
  const some = useContext(langContext)
  console.log('some in MODAL', some)
  return (
    <div>
      <h2>Modal Title</h2>
      <select
        name='lang'
        value={langContext.language}
        onChange={({ target: { value } }) => langContext.handleLang(value)}
      >
        <option value='ua'>UA</option>
        <option value='en'>EN</option>
        <option value='pl'>PL</option>
      </select>
      {children}
    </div>
  )
}

export default Modal
