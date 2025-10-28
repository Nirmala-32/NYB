import React from 'react'
import B from './B'
import C from './C'
import { useDispatch, useSelector } from 'react-redux'

const A = () => {
 let s= useSelector((state)=>state.count)
 let dispatch=useDispatch()
 console.log(s)
  return (
    <div>A
      {s}
      <button onClick={()=>{dispatch({type:"Increase"})}}>Increase</button>
      <B />
      <C />
    </div>
  )
}

export default A
