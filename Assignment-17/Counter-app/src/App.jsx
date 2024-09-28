import CounterButton from './components/counterButton/CounterButton'
import CounterDisplay from '../src/components/counterDisplay/CounterDisplay'
import './App.css'

function App() {
  return (
    <>
    <div className='main-body'>
      <CounterDisplay/>
      <CounterButton/>
    </div>
    </>
  )
}

export default App
