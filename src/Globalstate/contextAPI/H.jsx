import React, { useContext } from 'react'
import {k} from './A'
const H = () => {
  let {data}=useContext(k)
  console.log(data)
  return (
    <div>
      H
    </div>
  )
}

export default H
