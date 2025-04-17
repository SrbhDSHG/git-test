import React, { useEffect, useState } from 'react'

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowMessage((prevState) => !prevState)
    }, 2000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <h1> Exercise 3: Toggle a message every 2 seconds</h1>
      <p> Message: {showMessage ? 'Hello!' : 'Goodbye!'}</p>
    </div>
  )
}

export default ToggleMessage
