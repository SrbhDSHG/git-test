import React, { useState, useEffect } from 'react'

function ThrottleResize() {
  // State to track window size
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  // throttle function goes here
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
  // resize handler goes here
  useEffect(() => {
    const handleResize = throttle(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }, 1500)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  )
}

export default ThrottleResize
