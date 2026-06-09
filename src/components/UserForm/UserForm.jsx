import { useId, useState } from 'react'

const UserForm = ({ login }) => {
  const [passwordValidation, setPasswordValidation] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    if (!password.value.includes('!')) {
      console.log('Need "!"')
      setPasswordValidation(false)
      return
    }
    const resFromForm = {
      email: email.value,
      password: password.value,
    }
    // do something.. resFromForm
    login(resFromForm)
    setPasswordValidation(true)
    e.target.reset()
  }
  //   const uniqIdForEmail = useId()
  //   const uniqIdForPassword = useId()
  const uniqIdForUserForm = useId()

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`${uniqIdForUserForm}_email`}>pls input your email</label>
      <br />
      <input type='text' name='email' id={`${uniqIdForUserForm}_email`} />
      <br />
      <br />
      <label htmlFor={`${uniqIdForUserForm}_password`}>pls input your Password</label>
      <br />
      <input
        type='text'
        name='password'
        id={`${uniqIdForUserForm}_password`}
        style={{ backgroundColor: !passwordValidation ? 'red' : 'inherit' }}
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default UserForm
