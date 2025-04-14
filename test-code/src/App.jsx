import RefAndEffect from './components/RefAndEffect'
import Deboounce from './components/Debounce'
import Throttle from './components/ThrottleUsingCallback'
import ThrottleResize from './components/ThrottleWindowSize'
import InfiniteScroll from './components/InfiniteScroll'
function App() {
  return (
    <div style={{ padding: '30px' }}>
      {/* <RefAndEffect /> */}
      {/* <Deboounce /> */}
      <Throttle />
      {/* <ThrottleResize /> */}
      {/* <InfiniteScroll /> */}
    </div>
  )
}

export default App
