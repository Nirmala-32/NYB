import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const H = () => {
  let d=useDispatch()
 let m= useSelector((s)=>s.count)
 //console.log(m)
  return (
    <div>
      H
      <button onClick={()=>{d({type:'Decrease'})}}>Decrease</button>
      <button onClick={()=>{d({type:'reset'})}}>reset</button>
    </div>
  )
}

export default H
