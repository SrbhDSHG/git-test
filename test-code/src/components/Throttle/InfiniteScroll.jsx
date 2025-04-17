// Core Concepts Covered
// ✅ Throttling
// ✅ useRef for persistent mutable value
// ✅ Scroll detection
// ✅ Event listeners + cleanup
// ✅ Performance optimization
// ✅ Lazy loading via infinite scroll

import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function InfiniteScroll() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const throttleRef = useRef(null)

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

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
      )
      const newPosts = res.data.products

      if (newPosts.length === 0) return

      setPosts((prev) => [...prev, ...newPosts])
      setPage((prev) => prev + 1)
    } catch (err) {
      console.log('Error fetching', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    throttleRef.current = throttle(() => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.body.offsetHeight

      const nearBottom = windowHeight + scrollY >= fullHeight - 100

      if (nearBottom && !loading) {
        fetchData()
      }
    }, 300)

    const scrollHandler = () => throttleRef.current()

    window.addEventListener('scroll', scrollHandler, { passive: true })

    // Run once in case content doesn't fill viewport
    scrollHandler()

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [loading])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Infinite Scroll Throttle Demo</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            margin: '10px 0',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.description}</p> {/* DummyJSON uses description not body */}
        </div>
      ))}
      {loading && <p>Loading more...</p>}
    </div>
  )
}

export default InfiniteScroll
