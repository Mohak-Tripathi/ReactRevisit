import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from "./Components/Form"
import Stopwatch from './Components/Stopwatch'
import StopWatch2 from './Components/StopWatch2'
import Debounce from "./Components/debounce"
import FinalForm from './Components/NewForm/FinalForm'

function App() {
 

  return (
    <div>   
    <div className="App">
      <Form/>
   
    </div>

    {/* <div>    <Stopwatch/></div> */}
    <div>    <StopWatch2/></div>

    <FinalForm/>

{/* <div> <Debounce/> </div> */}
    </div> 
  )
}

export default App
