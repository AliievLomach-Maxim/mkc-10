import UserControlledFormik from '../UserControlledFormik/UserControlledFormik'

const App = () => {
  const login = (data) => {
    console.log('data', data)
  }
  return (
    <div>
      <UserControlledFormik login={login} />
    </div>
  )
}

export default App
