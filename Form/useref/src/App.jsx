import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import TimeOut from './components/TimeOut'
import StopWatch from './components/StopWatch'

function App() {

 
  return (
    <div className="App">
<Form/>   
<TimeOut/>
<StopWatch/>

   
    </div>
  )
}

export default App
