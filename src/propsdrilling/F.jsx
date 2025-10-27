import React from 'react'
import H from './H'

const F = ({name}) => {
  return (
    <div>F
        <h4>this is h comp{name}</h4>
      <H name={name}/>
    </div>
  )
}

export default F
