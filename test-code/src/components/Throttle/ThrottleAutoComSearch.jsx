import React, { useEffect, useRef, useState } from 'react'

function ThrottleAutoComSearch() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const throttledFn = useRef(null)

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
  const fetchSuggestions = (query) => {
    setLoading(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false)
        resolve([query + ' One', query + ' Two', query + ' Three'])
      }, 300)
    })
  }

  useEffect(() => {
    throttledFn.current = throttle(async (value) => {
      const results = await fetchSuggestions(value)
      setSuggestions(results)
    }, 500)
  }, [])

  const changeHandler = (e) => {
    const value = e.target.value
    setQuery(value)
    throttledFn.current(value)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2> Type in to seach </h2>
      <input
        placeholder="Enter the query"
        value={query}
        onChange={changeHandler}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {suggestions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ThrottleAutoComSearch
