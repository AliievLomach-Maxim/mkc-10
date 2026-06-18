import { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [counter, setCounter] = useState(0)

  const intervalId = useRef()
  // let intervalId
  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log(Date.now())
    }, 1000)
    return () => {
      clearInterval(intervalId.current)
    }
  }, [])

  // console.log('intervalId', intervalId.current)

  const handleStop = () => {
    console.log('intervalId', intervalId.current)
    clearInterval(intervalId.current)
  }

  return (
    <div>
      <h2>Timer</h2>
      <button onClick={handleStop}>Stop Timer</button>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  )
}

export default Timer
