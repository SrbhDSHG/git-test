//  Throttled Search Suggestion (Autocomplete)
// Concepts: Throttling, useRef, API fetch

import axios from 'axios'
import React, { useState } from 'react'

function AutocompltSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState('')
  const [loading, setLoading] = useState(false)

  function throttle(fn, delay) {
    let lastCall = 0
    return function (...args) {
      let now = Date.now()
      if (now - lastCall > delay) {
        lastCall = now
        fn(...args)
      }
    }
  }

  const fetchSuggestions = async (searchTerm) => {
    if (!searchTerm.trim()) return
    setLoading(true)
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${searchTerm}`
      )
      const books = res.data?.docs?.slice(0, 10) || []
      setResults(books.map((book) => book.title))
    } catch (err) {
      console.log('fetch error', err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    throttledFetchSuggns(value)

    // or  Call throttled function [ throttledFetchSuggns(value)] directly within the handleChange as an Anonymous Function:
    //   throttle(() => fetchSuggestions(value), 500)()
  }

  // create throtlled fucntion on mouont
  const throttledFetchSuggns = throttle((query) => {
    fetchSuggestions(query)
  }, 500)

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Search Books</h2>
      <input
        type="text"
        placeholder="Type book title..."
        value={query}
        onChange={handleChange}
        style={{ width: '100%', padding: '10px', fontSize: '1rem' }}
      />

      {loading && <p>Loading...</p>}

      {!loading && results.length > 0 && (
        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
          {results.map((title, idx) => (
            <li
              key={idx}
              style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}
            >
              {title}
            </li>
          ))}
        </ul>
      )}

      {!loading && query && results.length === 0 && <p>No results found.</p>}
    </div>
  )
}

export default AutocompltSearch
