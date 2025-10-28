import React, { useReducer, useState } from 'react'
import B from './B'
import C from './C'

let initialstate={
  value:990
}
let reducerfunction=(state,action)=>{
switch(action.type){
  case "Increase":
    console.log(state)
    return {value:state.value+1}
    case "Decrease":
      console.log(state)
      return {value:state.value-1}
      case "reset":
        console.log(state)
        return {value:initialstate.value}
        default:
          break;
}

}
const A = () => {
  var [state,dispatch]=useReducer(reducerfunction,initialstate)
  console.log(state)
 // console.log(disptach)
  return (
    <div>A
      {state.value}
      <button onClick={()=>{dispatch({type:"Increase"})}}>Increase</button>
      <button onClick={()=>{dispatch({type:"Decrease"})}}>decrease</button>
      <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
      <B />
      <C />
    </div>
  )
}

export default A
