import React from 'react'
import { useDispatch } from 'react-redux'
import {increment, decrement, reset} from '../../featuree/counterSlice/counterSlice'
function CounterButton() {
    const dispatch = useDispatch();
  return (
    <>
       <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>   {/* The dispatch sends an action (in this case, increment) to the Redux store.  */}
        </div>
        <div>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    </>
  )
}

export default CounterButton
