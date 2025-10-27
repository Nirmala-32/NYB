import React from 'react'
import B from './B'
import C from './C'

const A = () => {
    let username="Reshwanth"
  return (
    <div>A
        <h4>this is A comp{username}</h4>
      <B name={username}/>
      <C  name={username}/>
    </div>
  )
}

export default A
