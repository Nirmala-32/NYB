import React from 'react'
import F from './F'
import G from './G'

const C = ({data}) => {
  return (
    <div>C
      <h3>this is the data from c comp{data}</h3>
      <F data={data}/>
      <G data={data}/>
    </div>
  )
}

export default C
