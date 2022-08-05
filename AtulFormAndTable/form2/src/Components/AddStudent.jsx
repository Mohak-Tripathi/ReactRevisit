import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AddStudent.css"

const AddStudent = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    age: 0,
    tenth_score: 0,
    twelth_score: 0,
    preferred_branch: "",
  });

  const [formErrors, setFormErrors] = useState([]);
  const [isSubmit, setSubmit] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formData));

    setSubmit(true)

    // if (errors1.length > 0) {
    //   console.log(errors1);
    //   alert(errors.join("\n"));
    //   return;
    // }
  }

  useEffect(() => {
    if (formErrors.length === 0 && isSubmit===true) {
      axios
        .post("http://localhost:8080/data", formData)
        .then(function (response) {
          console.log(response.data);
          alert("student added");
        })
        .catch(function (err) {
          console.log(err);
        });
    } 
    // eslint-disable-next-line
  }, [formErrors]);

  const validate = () => {
    const errors = [];

    //validate age
    if (+formData.age > 50) {
      errors.push("Age should not be greater than 50");
    }

    // validate 10 the score
    if (+formData.tenth_score > 100) {
      errors.push("10th score should be not be greater than 100");
    }

    // validate 12 the score
    if (+formData.twelth_score > 100) {
      errors.push("12th score should be not be greater than 100");
    }

    return errors;
  };

  return (
    <div className="App">

    <form className='addstudent' onSubmit={handleSubmit}>
      <div>
        Firstname:{" "}
        <input
          type='text'
          name='first_name'
          className='first_name'
          value={formData.first_name}
          placeholder='enter first name'
          onChange={handleChange}
        />
      </div>

      <div>
        {" "}
        Last Name:
        <input
          type='text'
          name='last_name'
          className='last_name'
          placeholder='enter last name'
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>

      <div>
        {" "}
        Email:
        <input
          type='email'
          name='email'
          className='email'
          placeholder='enter email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name='gender'
            className='male'
            type='radio'
            value={"male"}
            onChange={handleChange}
          />{" "}
          Female{" "}
          <input
            name='gender'
            className='female'
            type='radio'
            value={"female"}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        Age{" "}
        <input
          type='number'
          name='age'
          className='age'
          placeholder='enter age'
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type='number'
          name='tenth_score'
          className='tenth_score'
          placeholder='enter 10th score'
          value={formData.tenth_score}
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type='number'
          name='twelth_score'
          className='twelth_score'
          placeholder='enter 12th score'
          value={formData.twelth_score}
          onChange={handleChange}
        />{" "}
      </div>

      <div>
        "Branch":{" "}
        <select
          name='preferred_branch'
          className='preferred_branch'
          value={""}
          onChange={handleChange}
        >
          <option value='law'>law</option>
          <option value='commerce'>commerce</option>
          <option value='science'>science</option>
          <option value='sports'>sports</option>
          <option value='arts'>arts</option>
          <option value='acting'>acting</option>
        </select>
      </div>

      {/* <input className='submit' type='submit' value='Submit' /> */}
      <button type='submit'> Submit</button>

      {<div className='error'> {formErrors} </div>}
    </form>
    </div> 
  );
};

export default AddStudent;
