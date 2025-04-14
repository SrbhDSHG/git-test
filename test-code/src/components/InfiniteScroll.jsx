import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function InfiniteScroll() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const loadingRef = useRef(false)

  // 🔁 Fetch Data
  const fetchMoreData = async () => {
    setLoading(true)
    loadingRef.current = true
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      )
      setPosts((prev) => [...prev, ...res.data])
      setPage((prev) => prev + 1)
    } catch (err) {
      console.error('Failed to fetch data', err)
    } finally {
      setLoading(false)
      loadingRef.current = false
    }
  }

  // ⏱️ Throttle Helper
  function throttle(fn, delay) {
    let lastCall = 0
    return (...args) => {
      const now = new Date().getTime()
      if (now - lastCall >= delay) {
        lastCall = now
        fn(...args)
      }
    }
  }

  // 👂 Scroll Handler
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300
      if (scrollBottom && !loadingRef.current) {
        fetchMoreData()
      }
    }, 2000)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ⏱️ Initial Load
  useEffect(() => {
    fetchMoreData()
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
          <p>{post.body}</p>
        </div>
      ))}
      {loading && <p>Loading more...</p>}
    </div>
  )
}

export default InfiniteScroll
