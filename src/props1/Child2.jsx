import React from 'react'

const Child2 = ({data}) => {
    console.log(data)
  return (
    <div>
      Child2
      <h6>thge data from parent comp{data}</h6>
    </div>
  )
}

export default Child2
