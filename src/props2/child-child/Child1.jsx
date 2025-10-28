import React, { useState } from 'react'

const Child1 = ({data}) => {
let[value,setvalue]=useState(110)
console.log(data)
  return (
    <div>
      Child1
      {value}
      <button onClick={()=>{data(value)}}>data to child to parent</button>
    </div>
  )
}

export default Child1
