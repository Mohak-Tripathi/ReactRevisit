import React from "react";
import { useState, useEffect } from "react";
import "./Form.css"
import axios from "axios"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    gender: "",
    salary: "",
  });

  const [isSubmit, setSubmit] = useState(false)
const [formErrors, setFormErrors] = useState({})


  function handleChange(e){

    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e){

    e.preventDefault()

    setFormErrors(Validate(formData))
    setSubmit(true)

  }

function Validate(values){
const errors= {}

if(!values.name){

    errors.name= "Name is required"
}
if(!values.address){
    errors.address= "Address is required"
}
if(!values.gender){
    errors.gender= "Gender is required"
}
if(!values.salary){
    errors.salary= "Salary is required"
}

return errors


}

useEffect(()=>{
if(Object.keys(formErrors).length===0 && isSubmit){
    alert("Form Submitted Successfully")
    axios.post("http://localhost:8080/finaldata", formData)
}

},[formErrors])


  return (
    <>
<div className='App'>

    <form onSubmit={handleSubmit}>
    <h1>Employee Detailes</h1>
      <div className="filler">
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          placeholder='Enter your Name'
          onChange={handleChange}
        />

<span>{formErrors.name}</span>
      </div>

      <div className="filler">
        <label>Address</label>
        <input
          type='text'
          name='address'
          value={formData.address}
          placeholder='Enter your Address'
          onChange={handleChange}
        />
           <span>{formErrors.address}</span>
      </div>

      <div className="filler">
        <label>Gender</label>
        <input
          type='text'
          name='gender'
          value={formData.gender}
          placeholder='Enter your gender'
          onChange={handleChange}
        />
           <span>{formErrors.gender}</span>
      </div>

      <div className="filler">
        <label>Salary</label>
        <input
          type='text'
          name='salary'
          value={formData.salary}
          placeholder='Enter your gender'
          onChange={handleChange}
        />
           <span>{formErrors.salary}</span>
      </div>

      <button type='submit'> Submit</button>
      </form>

      </div>
    </>
  );
};

export default Form;

