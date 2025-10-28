import React, { useContext } from 'react'
import {p} from './A'
const H = () => {
  let {state,dispatch}=useContext(p)
  console.log(state)
  return (
    <div>
      H
       <button onClick={()=>{dispatch({type:"Increase"})}}>Increase</button>
    </div>
  )
}

export default H
