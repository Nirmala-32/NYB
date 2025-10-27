import React from 'react'
import D from './D'
import E from './E'

const B = ({data}) => {
  return (
    <div>B
      <h3>this is the data from B comp{data}</h3>
      <D data={data}/>
      <E data={data}/>
    </div>
  )
}

export default B
