import React, { useCallback, useRef, useState } from 'react'

function Throttle() {
  const [lastClicked, setLastClicked] = useState('')
  const lastClickedTime = useRef(0)

  const throttledClick = useCallback(() => {
    const now = Date.now()
    if (now - lastClickedTime.current > 1000) {
      lastClickedTime.current = now
      const time = new Date().toLocaleTimeString()
      console.log('Button clicked at', time)
      setLastClicked(time)
    }
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Throttle Button Test</h2>
      <p>Last clicked at: {lastClicked}</p>
      <button onClick={throttledClick}>Click Me Rapidly</button>
    </div>
  )
}

export default Throttle
