import { useState } from 'react'
import Login from './Login'
//import Parent from './props/Parent'
//import A from './propsdrilling/A'
//import Parent1 from './props1/Parent1'

//import A from './statelifting/A'
import Parent from './props2/child-child/Parent'
//import A from './Globalstate/usereducer-contextAPI/A'
//import A from './localstate/usereducer/A'
//import A from './Globalstate/contextAPI/A'
//import A from './Globalstate/Redux/A'
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import A from './map/A';
//import A from './Asynchronousdata/localstate/usereducer/A';
//import A from './Asynchronousdata/localstate/usestate/A';



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
   {/* <A/> */}
   {/* {/* <Parent/>} */}
   <Provider store={store}>
    <A/>
   </Provider>
  
    </>
  )
}

export default App
