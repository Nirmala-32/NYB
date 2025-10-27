import React, { useState } from 'react'
import B from './B'
import C from './C'

const A = () => {
  let[v,s]=useState(122)
  return (
    <div>A
      <h3>this is the data from A comp{v}</h3>
      <B data={v}/>
      <C data={v}/>
    </div>
  )
}

export default A
