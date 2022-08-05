import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ShowStudent.css";

const ShowStudent = () => {
  const [students, setStudents] = useState([]);
  const [sortControls, setSortControls] = useState({
    sortby: "first_name",
    sortorder: "aesc",
  });

  useEffect(() => {
    getStudentsData();
    // eslint-disable-next-line
  }, []);

  function getStudentsData() {
    axios
      .get("http://localhost:8080/data")
      .then(function (response) {
        setStudents(sortData(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setSortControls({ ...sortControls, [name]: value });
  }

  function handleUpdate(data) {
    //    console.log(data, "data")

    setStudents(data);
  }

  function sortData(studentData) {
    const { sortby, sortorder } = sortControls;

    console.log(sortby, sortorder, "hehe");

    const tempData = [...studentData];

    if (
      sortby === "first_name" ||
      sortby === "last_name" ||
      sortby === "gender"
    ) {
      tempData.sort(function (a, b) {
        // if (sortorder === "desc") {
        //   if (a.sortby < b.sortby) return 1;
        //   if (a.sortby > b.sortby) return -1;
        //   return 0;
        // } else {
        //   if (a.sortby > b.sortby) return -1;
        //   if (a.sortby < b.sortby) return 1;
        //   return 0;
        // }
        if (sortorder === "desc") {
          if (a[sortby] > b[sortby]) return -1;
          if (a[sortby] < b[sortby]) return 1;
          return 0;
        } else {
          if (a[sortby] > b[sortby]) return 1;
          if (a[sortby] < b[sortby]) return -1;
          return 0;
        }
      });
    } else {
      tempData.sort(function (a, b) {
        if (sortorder === "aesc") {
          return a[sortby] - b[sortby];
        } else {
          return b[sortby] - a[sortby];
        }
      });
    }
    console.log(tempData, "hehe");

    return tempData;
  }

  function handleDelete(id) {
console.log(id)
    return setStudents(students.filter((elem) => elem.id !== id));
  }

  return (
    <div>
      <div className='controls'>
        <div>
          Sort By:{" "}
          <select onChange={handleChange} name='sortby'>
            <option value='first_name'> First Name</option>
            <option value='last_name'> Last Name</option>
            <option value='gender'> Gender</option>
            <option value='tenth_score'> 10 th </option>
            <option value='twelth_score'> 12 th </option>
          </select>
        </div>

        <div>
          Order:{" "}
          <select onChange={handleChange} name='sortorder'>
            <option value='aesc'> Asc</option>
            <option value='desc'> Dsc</option>
          </select>
        </div>

        <div>
          <button onClick={() => handleUpdate(sortData(students))}>
            {" "}
            Sort
          </button>
        </div>
      </div>

      <table className='table' style={{ border: "1px solid black" }}>
        <thead>
          <tr className='row'>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => {
            return (
              <tr style={{ border: "1px solid black" }}>
                <td> {s.first_name} </td>
                <td> {s.last_name} </td>
                <td> {s.email} </td>
                <td> {s.age} </td>
                <td> {s.tenth_score} </td>
                <td className='twelth_score'>{s.twelth_score}</td>
                <td className='preferred_branch'>{s.preferred_branch}</td>
                <button onClick={()=>handleDelete(s.id)}> Delete </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowStudent;
