import React, { useEffect, useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'


const A = () => {
  let[data,setdata]=useState()
  useEffect(()=>{
    let fetchdata = async()=>{
    try {
      let res=await axios.get('https://jsonplaceholder.typicode.com/posts') 
  //console.log(res)
  setdata(res.data)
    }
  catch (e) {
     console.log(e) 
    }
  }
fetchdata()
  },[])
  console.log(data)
     
  return (
    <div>A
      <B />
      <C />
    </div>
  )
}

export default A
