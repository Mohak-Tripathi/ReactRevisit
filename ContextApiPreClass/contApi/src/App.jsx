import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Cart from './components/Body/Cart';
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
    <Navbar/>
    <Cart /> 
    </div>
  )
}


export default App
