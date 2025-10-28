import React, { createContext, useState } from 'react'
import B from './B'
import C from './C'
 export let k=createContext(10)
console.log(k)
const A = () => {
  let[da,setdata]=useState(14)
  return (
    <div>A
      <k.Provider value={{data:da}}>
      <B />
      <C />
      </k.Provider>
     
    </div>
  )
}

export default A
