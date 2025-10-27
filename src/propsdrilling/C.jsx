import React from 'react'
import F from './F'
import G from './G'

const C = ({name}) => {
  return (
    <div>C
        <h4>this is c comp {name}</h4> 
      <F name={name}/>
      <G name={name}/>
    </div>
  )
}

export default C
