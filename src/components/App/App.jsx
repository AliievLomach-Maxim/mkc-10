import { useEffect, useState } from 'react'

const getDefaultCounter = () => {
  const localData = localStorage.getItem('counter')
  // if (localData) {
  //   const newValue = JSON.parse(localData)
  //   return newValue
  // } else return 0
  return localData ? JSON.parse(localData) : 0
}

const App = () => {
  const [counter, setCounter] = useState(getDefaultCounter)

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter))
  }, [counter])

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  )
}

export default App
// import { useEffect, useState } from 'react'
// import Timer from '../Timer/Timer'

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const [counter2, setCounter2] = useState(0)

//   const [showTimer, setShowTimer] = useState(false)

//   // mounting
//   useEffect(() => {
//     console.log('mounting')
//   }, [])

//   // mounting + updating
//   useEffect(() => {
//     console.log('counter mounting + updating', counter)
//   }, [counter])

//   // only updating
//   useEffect(() => {
//     if (counter === 0) return

//     console.log('counter only updating', counter)
//   }, [counter])

//   // console.log('out of useEffect')

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>counter:{counter}</button>
//       <br />
//       <br />
//       <button onClick={() => setCounter2(counter2 + 1)}>counter2:{counter2}</button>
//       <br />
//       <br />
//       <button onClick={() => setShowTimer(!showTimer)}>
//         {showTimer ? 'Hide Timer' : 'Show Timer'}
//       </button>

//       <br />
//       <br />
//       {showTimer && <Timer />}
//     </div>
//   )
// }

// export default App
