import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent1 = () => {
    let[v,s]=useState(99)
console.log(v)
let setdata=(M)=>{
    console.log(M)
s(M)
}
    let increase=()=>{
        s(v+1)
       // console.log(v)
    }
    let decrease=()=>{
        s(v-1)
    }

  return (
    <div>Parent1
        {v}
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      {/* <Child1 data={v}/> */}
      <Child1 data1={setdata}/>
      <Child2 data={v}/>
    </div>
  )
}

export default Parent1
