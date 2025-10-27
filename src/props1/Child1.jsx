import React from 'react'

const Child1 = ({data1}) => {
    console.log(data1)
  return (
    <div> Child1
      {/* <h4>this data from parent comp{data1}</h4> */}
      <button onClick={()=>data1(108)}>child-parent</button>
    </div>
  )
}

export default Child1
