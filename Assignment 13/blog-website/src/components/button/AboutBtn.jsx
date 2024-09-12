import React from 'react'
import "../../index.css"
import "../../Components/Buttons/buttons.css"

function AboutBtn({text}) {
  return (
   <button className='btn btn-secondary '>{text}</button>
  )
}

export default AboutBtn