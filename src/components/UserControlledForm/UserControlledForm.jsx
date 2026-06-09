import { useId, useState } from 'react'
import { CiBeerMugFull } from 'react-icons/ci'

const defaultFormValue = {
  email: 'qwe@qwe.com',
  password: '****',
  select: '2',
  check: true,
}

const UserControlledForm = ({ login }) => {
  const [userFormValue, setUserFormValue] = useState(defaultFormValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    // do something.. resFromForm
    login(userFormValue)
    setUserFormValue(defaultFormValue)
  }

  const uniqIdForUserForm = useId()

  // const handleChangeEmail = ({ target: { value } }) => {
  //   setUserFormValue({
  //     ...userFormValue,
  //     email: value,
  //   })
  // }

  // const handleChangePassword = ({ target: { value } }) => {
  //   setUserFormValue({
  //     ...userFormValue,
  //     password: value,
  //   })
  // }

  // const handleChangeSelect = ({ target: { value } }) => {
  //   setUserFormValue({
  //     ...userFormValue,
  //     select: value,
  //   })
  // }

  const handleChange = ({ target: { value, name } }) => {
    setUserFormValue({
      ...userFormValue,
      [name]: value,
    })
  }

  const handleChangeCheck = ({ target: { checked } }) => {
    setUserFormValue({
      ...userFormValue,
      check: checked,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`${uniqIdForUserForm}_email`}>pls input your email</label>
      <br />
      <input
        type='text'
        name='email'
        id={`${uniqIdForUserForm}_email`}
        value={userFormValue.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor={`${uniqIdForUserForm}_password`}>pls input your Password</label>
      <br />
      <input
        type='text'
        name='password'
        id={`${uniqIdForUserForm}_password`}
        value={userFormValue.password}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor={`${uniqIdForUserForm}_select`}>pls choose..</label>
      <br />
      <select
        name='select'
        id={`${uniqIdForUserForm}_select`}
        value={userFormValue.select}
        onChange={handleChange}
      >
        <option value='' disabled>
          Choose...
        </option>
        <option value='1'>Red</option>
        <option value='2'>Yellow</option>
        <option value='3'>Green</option>
      </select>
      <br />
      <br />
      <input
        type='checkbox'
        name='check'
        checked={userFormValue.check}
        onChange={handleChangeCheck}
      />
      <br />
      <br />
      <button type='submit'>Submit</button>
      <hr />
      <hr />
      <CiBeerMugFull
        size={64}
        color={
          userFormValue.select === '1'
            ? 'red'
            : userFormValue.select === '2'
              ? 'yellow'
              : userFormValue.select === '3'
                ? 'green'
                : 'blue'
        }
      />
    </form>
  )
}

export default UserControlledForm
