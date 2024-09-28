import React from 'react'
import { useDispatch } from 'react-redux'
import {increment, decrement, reset} from '../../featuree/counterSlice/counterSlice'
import "./CounterButton.css"
function CounterButton() {
    const dispatch = useDispatch();
  return (
    <>
       <div className='btn-sec1'>
        <button onClick={() => dispatch(decrement())} className='btn-decrement'>-</button>
        <button onClick={() => dispatch(increment())} className='btn-increment'>+</button>   {/* The dispatch sends an action (in this case, increment) to the Redux store.  */}
        </div>
        <div className='btn-sec2'>
            <button onClick={() => dispatch(reset())} className='btn-reset'>Reset</button>
        </div>
    </>
  )
}

export default CounterButton
