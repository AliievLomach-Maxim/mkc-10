import UserControlledForm from '../UserControlledForm/UserControlledForm'

const App = () => {
  const login = (resObj) => {
    // do something..
    // fetch
    // to localStorage
    // etc...
    console.log('resObj', resObj)
  }
  return (
    <div>
      <UserControlledForm login={login} />
    </div>
  )
}

export default App
// // import UserForm from '../UserForm/UserForm'

// import { useState } from 'react'

// const App = () => {
//   // const login = (resObj) => {
//   //   // do something..
//   //   // fetch
//   //   // to localStorage
//   //   // etc...
//   //   console.log('resObj', resObj)
//   // }

//   const [inputValue, setInputValue] = useState('')

//   const handleChange = (e) => {
//     const { value } = e.target
//     console.log('value', value)
//     // if (!value.includes('@')) {
//     //   console.log('invalid email!')
//     //   // return
//     // }
//     if (value.includes('!')) {
//       console.log('error')
//       return
//     }
//     setInputValue(e.target.value)
//     // console.log('e', e.target.value.toUpperCase())
//   }
//   return (
//     <div>
//       <input type='text' placeholder='Search...' onChange={handleChange} value={inputValue} />
//       {/* <UserForm login={login} /> */}
//       <hr />
//       <hr />
//       {/* <UserForm login={login} /> */}
//     </div>
//   )
// }

// export default App
// const App = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const loginData = {
//       email: e.target.elements.email.value,
//       password: e.target.elements.password.value,
//     }
//     console.log('loginData', loginData)
//     e.target.reset()
//   }
//   // const handleSubmitAction = (formData) => {
//   //   // const email = formData.get('email')
//   //   // const password = formData.get('password')
//   //   // const loginData = { password, email }
//   //   // console.log('loginData', loginData)
//   //   //
//   //   const loginData = Object.fromEntries(formData)
//   //   console.log('loginData', loginData)
//   // }
//   return (
//     <div>
//       {/* <form action={handleSubmitAction}> */}
//       <form onSubmit={handleSubmit}>
//         {/* <label>
//           pls input your email
//           <input type='text' name='email' />
//         </label> */}
//         <label htmlFor='1'>pls input your email</label>
//         <input type='text' name='email' id='1' />
//         <input type='text' name='password' />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
