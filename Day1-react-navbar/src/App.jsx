import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"

function App() {

  const navbar= [
    {
      image: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title: "Top offers"
    },
    {
      image: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery"
    }
  ]


  return (
    <div className="App">

      <Navbar />

{navbar.map(function(elem){
  return <Header elem={elem}/> 
})}
      
    </div>
  )
}

export default App
