import React from 'react'
import { useSelector } from 'react-redux'
import "./CounterDisplay.css"
function CounterDisplay() {
    const count = useSelector((e) => e.counter.value); // As the state in the store changes, useSelector in CounterDisplay.js detects the change and updates the displayed value automatically.
  return (
    <>
    <div><h1>Counter App</h1></div> {/*now counter is incremented by one (in case of increment otherwise use others). */}
    <div className='counting'><h2>{count}</h2></div>
    </>
  )
}

export default CounterDisplay