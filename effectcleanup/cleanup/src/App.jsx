import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'


function App() {

const [show, setShow]= useState(true)

  return (
    <div className="App">



      {show && <Counter/> }


      <button  onClick={()=>setShow(!show)} > {show ? "Hide" : "Show"} </button>



{/* <Counter2/> */}



    </div>

 
  )
}

export default App
