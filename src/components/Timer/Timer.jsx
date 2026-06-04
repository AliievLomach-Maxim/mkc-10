import { useEffect } from 'react'

const Timer = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(Date.now())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <div>Timer</div>
}

export default Timer
