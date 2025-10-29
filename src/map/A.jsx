import React, { useState } from 'react'

const A = () => {
    let[data,setdata]=useState([{id:1,
        name:"Nirmala",
        age:29
},{
    id:2,
    name:"Reshwanth",
    age:3
},{
    id:3,
    name:"Prashanth",
    age:33
},{
    id:4,
    name:"suvi",
    age:50
}])
  return (
    <div>
        <h2>userdetails</h2>
        <ul>
           {data.map((K)=>(
         <li key={K.id}>
       <h3>{K.id}</h3>
        <h4>{K.name}</h4>
        <h5>{K.age}</h5>
        </li>
       ))}
            </ul>
      {/* {data.map((K)=>(
        <div>
        <h3>{K.id}</h3>
        <h4>{K.name}</h4>
        <h5>{K.age}</h5>
        </div>

      ))} */}
    </div>
  )
}

export default A
