import React from 'react'
import D from './D'
import E from './E'

const B = ({name}) => {
  return (
    <div>B
        <h4>this is B comp {name}</h4>
      <D name={name}/>
      <E name={name}/>
    </div>
  )
}

export default B
