import React from 'react'

function Child({data}) {
  console.log(data)
  data(25)
  return (
    <div>
      Child
      <h2>the data from parent component</h2>
    </div>
  )
}
export default Child


