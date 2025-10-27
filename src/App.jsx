import { useState } from 'react'
import Login from './Login'
import Parent from './props/Parent'
//import A from './propsdrilling/A'
import Parent1 from './props1/Parent1'
import A from './statelifting/A'

function App() {
  var a=10
  var b="hi how are you"
  var c=true
  var obj={
    name:"varaprasad",
    age:30,
    city:"hyd"
  }
return (
    <>
    {/* <h3>hello</h3>
    <h2>{a}</h2>
    <h3>{b}</h3>
    <h4>{c}</h4>
    <h4>{obj.name}</h4>
    <h5>{obj.age}</h5> */}
   {/* <Login value={a}/> */}
   {/* <Parent/> */}
   {/* <A/> */}
   {/* <Parent1/> */}
   <A/>
    </>
  )
}

export default App
