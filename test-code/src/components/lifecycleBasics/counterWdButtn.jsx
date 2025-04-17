import { useState } from 'react'

// Challenge: Build this component from scratch
function Counter() {
  // state: count
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount((prevVal) => prevVal + 1)
  }
  const decrease = () => {
    setCount((prevVal) => (prevVal <= 0 ? 0 : prevVal - 1))
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

function CounterMorePolished() {
  const [counter, setCounter] = useState(0)
  const handleChange = (action) => {
    setCounter((prevVal) => {
      if (action == 'inc') return prevVal + 1
      if (action == 'dec') return prevVal > 0 ? prevVal - 1 : 0
      return 0
    })
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => handleChange('inc')}>Increase</button>
      <button onClick={() => handleChange('dec')}>Decrease</button>
      <button onClick={() => handleChange('reset')}>Reset</button>
    </div>
  )
}

export { CounterMorePolished, Counter }
