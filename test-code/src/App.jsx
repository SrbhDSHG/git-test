import RefAndEffect from './components/RefAndEffect'
import Deboounce from './components/debounce/Debounce'
import Throttle from './components/Throttle/ThrottleUsingCallback'
import ThrottleResize from './components/Throttle/ThrottleWindowSize'
import InfiniteScroll from './components/Throttle/InfiniteScroll'
import ThrottleAutoComSearch from './components/Throttle/ThrottleAutoComSearch'
import AutocompltSearch from './components/Throttle/AutocompltSearch'
import {
  Counter,
  CounterMorePolished,
} from './components/lifecycleBasics/counterWdButtn'
import Timer from './components/lifecycleBasics/TimerComponent'
import LogonMount from './components/lifecycleBasics/LogonMount'
import LogCounterWhnvalueChng from './components/lifecycleBasics/LogCounterWhnvalueChng'
import ToggleMessage from './components/lifecycleBasics/ToggleMessage'
function App() {
  return (
    <div style={{ padding: '30px' }}>
      {/* <RefAndEffect /> */}
      {/* <Deboounce /> */}
      {/* <Throttle /> */}
      {/* <ThrottleResize /> */}
      {/* <InfiniteScroll /> */}
      {/* <ThrottleAutoComSearch /> */}
      {/* <AutocompltSearch /> */}
      {/* <Counter /> */}
      {/* <CounterMorePolished /> */}
      {/* <Timer /> */}
      {/* <LogonMount /> */}
      {/* <LogCounterWhnvalueChng /> */}
      <ToggleMessage />
    </div>
  )
}

export default App
