import { useEffect, useState } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    // Cleanup: clear interval on unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  )
}

export default Timer
