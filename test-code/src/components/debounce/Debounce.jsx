// Problem: Debounced Input Logger
// Write a function that logs the current value of an input box, but only after the user has stopped typing for 1 second.

import React, { useState, useRef, useEffect } from 'react'

function DebouncInput() {
  const [keylog, setKeylog] = useState('')
  const timeoutId = useRef(null)
  const inputLine = useRef(null)

  useEffect(() => {
    inputLine.current.focus()
  }, [])

  const handleChange = (e) => {
    const newValue = e.target.value

    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }
    timeoutId.current = setTimeout(() => {
      setKeylog(newValue)
      console.log('Debonce value', newValue)
    }, 1000)
  }

  return (
    <div>
      <h2>Type something</h2>
      <input
        ref={inputLine}
        type="text"
        id="search"
        placeholder="Type something..."
        onChange={handleChange}
      />
      <p>Final output: {keylog}</p>
    </div>
  )
}

export default DebouncInput
