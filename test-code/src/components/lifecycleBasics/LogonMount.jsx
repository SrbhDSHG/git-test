// Create a React component that logs: "Component mounted"
// only once, when the component is first rendered.

// Instructions:
// Use useEffect.
// The effect should run only on mount.
// Use console.log() to log the message.

import React, { useEffect } from 'react'

function LogonMount() {
  useEffect(() => {
    console.log('Component mounted')

    return () => {
      console.log('Component unmounted')
    }
  }, [])
  return <div>LogonMount</div>
}

export default LogonMount
