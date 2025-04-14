import React, { useEffect, useRef, useState } from 'react'

function RefAndEffect() {
  const [query, setQuery] = useState('')
  const debounceRef = useRef(null)
  const inputRef = useRef(null)
  // Log to console
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      // api call
      console.log('value of query', value)
    }, 500)
  }

  return (
    <div style={{ padding: '30px' }}>
      <h2>The query</h2>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type for search"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  )
}

export default RefAndEffect
