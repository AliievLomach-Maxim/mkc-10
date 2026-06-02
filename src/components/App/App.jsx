import { useState } from 'react'
import Counter from '../Counter/Counter'

const App = () => {
  // const [counter, setCounter] = useState(10)
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  })

  // const handleUpdateCounter1 = () => {
  //   setCounters({ ...counters, counter1: counters.counter1 + 1 })
  // }

  // const handleUpdateCounter2 = () => {
  //   setCounters({ ...counters, counter2: counters.counter2 + 1 })
  // }

  // const handleUpdateCounter3 = () => {
  //   setCounters({ ...counters, counter3: counters.counter3 + 1 })
  // }
  const handleUpdateCounters = (key) => {
    setCounters({ ...counters, [key]: counters[key] + 1 })
  }
  // const handleClick = () => {
  //   setCounter(counter + 1) // 10+1
  // }

  const total = counters.counter1 + counters.counter2 + counters.counter3

  return (
    <div>
      <h1>Counter</h1>
      <hr />
      <br />
      {/* <button onClick={handleClick}>Increment counter</button>
      <h2>{counter}</h2> */}
      <Counter value={counters.counter1} increment={() => handleUpdateCounters('counter1')} />
      <Counter value={counters.counter2} increment={() => handleUpdateCounters('counter2')} />
      <Counter value={counters.counter3} increment={() => handleUpdateCounters('counter3')} />
      <hr />
      <h2>Total: {total}</h2>
    </div>
  )
}

export default App
// // hooks > function
// // useName

// import { useState } from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(10)
//   // const [user, setUser] = useState(10)
//   // const [field, setField] = useState(10)

//   // const [reactVariable, someFn] = useState(10)
//   // someFn(100) >
//   // App()
//   // const [reactVariable, someFn] = useState(100)
//   // someFn(1000) >
//   // App()
//   // const [reactVariable, someFn] = useState(1000)

//   const handleClick = () => {
//     // reactVariable++
//     // someFn(counter + 1) // 10+1
//     setCounter(counter + 1) // 10+1
//     console.log('counter', counter)
//   }
//   return (
//     <div>
//       <h1>Counter</h1>
//       <hr />
//       <br />
//       <button onClick={handleClick}>Increment counter</button>
//       <h2>{counter}</h2>
//     </div>
//   )
// }

// export default App

// const button = document.getElementById('someId')
// // 1.
// button.addEventListener('click', (event) => {})

// // 2.
// const handleClick = (event) => {
//   console.log('click')
// }
// button.addEventListener('click', handleClick)
// import data from '../../data.json'

// const App = () => {
//   // 2.
//   // const handleClick = (event) => {
//   //   console.log('event', event)
//   // }
//   // const handleClick = (value) => {
//   //   console.log('value', value)
//   // }

//   const handleCLick = (id) => {
//     console.log(id)
//   }

//   const handlePreview = () => {
//     console.log('handlePreview')
//   }

//   const handleChange = (event) => {
//     console.log('event', event.target.value)
//   }

//   return (
//     <div>
//       {/* <button
//         id='someId'
//         className='some'
//         onClick={(event) => {
//           console.log('click')
//         }}
//       > */}
//       {/* <button id='someId' className='some' onClick={handleClick}> */}
//       {/* <button id='someId' className='some' onClick={() => handleClick(100)}>
//         get 100
//       </button> */}
//       <ul>
//         {data.map((el) => (
//           <li key={el.id}>
//             <p>{el.title}</p>
//             <button onClick={handlePreview}>Open preview</button>
//             <button onClick={() => handleCLick(el.id)}>Get more details</button>
//           </li>
//         ))}
//       </ul>
//       <input type='text' name='some' id='someId' onChange={handleChange} />
//     </div>
//   )
// }

// export default App

// // const button = document.getElementById('someId')
// // // 1.
// // button.addEventListener('click', (event) => {})

// // // 2.
// // const handleClick = (event) => {
// //   console.log('click')
// // }
// // button.addEventListener('click', handleClick)
