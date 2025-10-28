import React, { createContext, useReducer } from 'react'
import B from './B'
import C from './C'
export let p=createContext()
let initialstate={
  count:0
}
let reducerfunction=(state,action)=>{
  console.log(action)
  switch(action.type){
    case "Increase":
      return {count:state.count+1}
      case "Decrease":
        return {count:state.count-1}
        case "reset":
          return initialstate
  }

}
const A = () => {
  let[state,dispatch]=useReducer(reducerfunction,initialstate)
  return (
    <div>A
      {state.count}
      <p.Provider value={{state,dispatch}}>
         <B />
       <C />
      </p.Provider>
     
    </div>
  )
}

export default A
