const Counter = ({ value, increment }) => {
  return (
    <>
      <button onClick={increment}>Increment counter</button>
      <h2>{value}</h2>
    </>
  )
}

export default Counter

// import { useState } from 'react'

// const Counter = () => {
//   const [counter, setCounter] = useState(10)

//   const handleClick = () => {
//     setCounter(counter + 1) // 10+1
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Increment counter</button>
//       <h2>{counter}</h2>
//     </>
//   )
// }

// export default Counter
