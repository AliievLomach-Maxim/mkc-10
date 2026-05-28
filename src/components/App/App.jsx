import User from '../User/User'

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Alex',
      age: 42,
      address: 'UK',
    },
    {
      id: 2,
      name: 'Alex 2',
      age: 42,
      address: 'UA',
    },
  ]
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  )
}

export default App
// import Button from '../Button/Button'
// import Title from '../Title/Title'
// import styles from './App.module.css'
// import clsx from 'clsx'

// const App = () => {
//   const isOnline = false

//   // const classnames = [styles.title, styles.base].join(' ')
//   // const classNames = clsx(['title', 'base'], isOnline ? 'online' : 'offline', { offline2: true })
//   return (
//     <>
//       {/* <div className='title base'>App</div> */}
//       {/* <div className={classnames}>App</div> */}
//       {/* <div className={`${styles.base} ${isOnline ? styles.online : styles.offline}`}>App</div> */}
//       {/* <div className={clsx(styles.base, isOnline && styles.online)}>App</div> */}
//       {/* <div className={styles.offline}>App</div> */}
//       <Button>Click me</Button>
//       <Button variant='warning'>Click me</Button>
//       <Button variant='error'>Click me</Button>
//       <Button variant='error' size='small'>
//         Click me
//       </Button>
//       <button>click </button>
//       <br />
//       <Title />
//     </>
//   )
// }

// export default App
