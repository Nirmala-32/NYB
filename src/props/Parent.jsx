import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  var name="Reshwanth"
 var role="Team lead"
 let [value,setvalue]= useState(35)
 console.log(value)
 //console.log(setvalue)
 //console.log(value)
 let a=20
 let b
 let val=(num)=>{
b=num
console.log(b)
 }
 val()
 let increase=()=>{
  a+=1
  console.log(a)
 }
 let decrease=()=>{
  a-=1
  console.log(a)
 }
 let Increase=()=>{
  setvalue(value+1)
 }
 let Decrease=()=>{
  setvalue(value-1)
 }
 return (
    <div>Parent
      
      {/* <h1>{name}</h1> */}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h1>By using state variable</h1>
      {value}
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    <Child data={val}/>
      {/* <h3>{role}</h3> */}
    </div>
  )
}
export default Parent
