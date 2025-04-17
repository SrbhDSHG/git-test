import React, { useEffect, useState } from 'react'

function ThrottledScroll() {
  const [scrollY, setScrollY] = useState(0)

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

  const handleScroll = () => {
    const scrollPos = window.scrollY
    setScrollY(scrollPos)
    console.log('📜 Scroll position:', scrollPos)
  }

  useEffect(() => {
    const throttledHandler = throttle(handleScroll, 500)
    window.addEventListener('scroll', throttledHandler)

    return () => {
      window.removeEventListener('scroll', throttledHandler)
    }
  }, [])

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h2>Scroll to test throttling</h2>
      <p>📍 Scroll position: {scrollY}px</p>
    </div>
  )
}

export default ThrottledScroll
