import React from 'react'
import H from './H'

const F = ({data}) => {
  return (
    <div>F
      <h3>this is the data from F comp{data}</h3>
      <H data={data}/>
    </div>
  )
}

export default F
