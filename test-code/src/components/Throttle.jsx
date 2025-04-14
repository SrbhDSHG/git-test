import React, { useRef, useState } from 'react'

function Throttle() {
  const [lastClickTime, setLastClickTime] = useState('')
  const throttledClick = useRef(null)

  function throttle(fn, delay) {
    let lastCall = 0
    return function (...args) {
      const now = Date.now()
      if (now - lastCall > delay) {
        lastCall = now
        fn(...args)
      }
    }
  }

  const handleClick = () => {
    const time = new Date().toLocaleTimeString()
    console.log('🚀 Button clicked at', time)
    setLastClickTime(time)
  }

  // Initialize throttled function only once
  if (!throttledClick.current) {
    throttledClick.current = throttle(handleClick, 2000)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Throttle Button Test</h2>
      <p>Last clicked at: {lastClickTime}</p>
      <button onClick={throttledClick.current}>Click Me Rapidly</button>
    </div>
  )
}

export default Throttle
