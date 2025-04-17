import React, { useEffect, useState } from 'react'

function LogCounterWhnvalueChng() {
  const [count, setCount] = useState(0)

  const buttonHandler = () => {
    setCount((prevValue) => prevValue + 1)
  }

  useEffect(() => {
    console.log('Count changed', count)
  }, [count])

  return (
    <div>
      <h1> Exercise 2: Log whenever a counter value changes </h1>
      <p>
        Goal: Create a component that has a counter (count) with a button to
        increase it. Use useEffect to log to the console every time the count
        value changes.
      </p>
      <h2>Count: {count}</h2>
      <button onClick={buttonHandler}>Increase</button>
    </div>
  )
}

export default LogCounterWhnvalueChng
