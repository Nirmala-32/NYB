import React, { useEffect, useReducer } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'
let initialState={
  data:[],
  error:null,
  loading:false
};
let reducerfunction=(state,action)=>{
  switch(action.type){
    case 'start':
      console.log(state)
      return {...state,loading: true}
      case 'success':
        //console.log(state)
        return {...state, data: action.payload,loading: false, error: null}
        case 'fail':
          //console.log(state)
          return {...state, error: action.payload, loading: false}
default:
  return state
  }

}
const A = () => {
  let[state,dispatch]=useReducer(reducerfunction,initialState)
  const {data, error, loading}=state
  useEffect(()=>{
    let fecthdata=async()=>{
    try {
      dispatch({type:'start'})
      //console.log(state)
  let res=await axios.get("https://jsonplaceholder.typicode.com/posts")
  //console.log(res)
  dispatch({type:'success',payload: res.data})
 // console.log(state)
} catch (error) {
  console.log(error)
  dispatch({type:'fail',payload: error.message})
}
    }
    fecthdata()
    //console.log(state)
    //console.log(data)
  },[])
  console.log(data)
  if(state.loading)
    return <h1>Loading</h1>
    if(state.error)
      return <h1>{state.error}</h1>
  return (
    <div>A
      {data.map((m)=>(
        <div>
          <h3>{m.userId}</h3>
          <h4>{m.title}</h4>
          </div>
 ))}
      <B />
      <C />
    </div>
  )
}


export default A
