import Card from '../Card/Card'

const User = ({ user }) => {
  // const isOnline = true
  return (
    <Card>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h2>{user.info}</h2>
      {/* <p>{user.address}</p> */}
      {/* {user.address ? <p>{user.address}</p> : 'No Address'} */}
      {/* {isOnline && <p>{user.address}</p>} */}
      {user.address && <p>{user.address}</p>}
      <hr />
    </Card>
  )
}

export default User
