import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
  let[value,setvalue]=useState(0)
  let datafromchild=(A)=>{
 console.log("data from child",A)
 setvalue(A)
  }
  return (
    <div>
      Parent
      {value}
      <Child1 data={datafromchild}/>
      <Child2 data={value}/>
    </div>
  )
}

export default Parent

