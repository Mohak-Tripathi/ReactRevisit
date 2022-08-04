import React, { useState } from 'react'
import axios from "axios";

function Form() {

  const [age, setAge] = useState(20)
const skills = ["mern", "Html", "css"]

  const [formData, setFormData]= useState({

    "username": "",
    "age": "",
  })

  
  function handleChange(e){
// console.log(e.target.id, e.target.type)
setFormData({
    ...formData,
    [e.target.id]: e.target.value
})
  }

function handleSubmit(e){
    e.preventDefault()
    console.log(formData)

    axios.post("http://localhost:8090/todo", formData)
}
  
  return (
    <form onSubmit={handleSubmit}>
<input  onChange={handleChange} type="text" placeholder='Enter name' id="username"/>
<input  onChange={handleChange} type="number" placeholder='Enter age' id="age"/>

<input type="submit" value="submit" />

    </form>


  )
}

export default Form