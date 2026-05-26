import User from '../User/User'
import Modal from '../Modal/Modal'

const App = () => {
  const user = {
    name: 'Alex',
    age: 42,
    info: 'Lorem',
  }
  const user2 = {
    name: 'Alex2',
    age: 42,
    info: 'Lorem',
    address: 'Ukraine',
  }
  const user3 = {
    name: 'Alex3',
    age: 42,
    info: 'Lorem',
    address: 'Ukraine',
  }
  const users = [user, user2, user3]

  // const usersRender = users.map((user) => <User user={user} />)
  return (
    <>
      {/* <Modal
        content={
          <>
            <h2>asd</h2>
            <h2>asd</h2>
            <h2>asd</h2>
          </>
        }
      /> */}
      <Modal>
        {users.map((user) => (
          <User user={user} />
        ))}
      </Modal>
      <hr />
      {users.map((user) => (
        <User user={user} />
      ))}
    </>
  )
}

export default App
