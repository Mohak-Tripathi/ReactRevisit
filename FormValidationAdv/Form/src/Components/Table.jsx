import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

function TableData() {
  const [employeedata, setEmployeeData] = useState([]);
  const [operation, setOperation] = useState([]);
  const [operation1, setOperation1] = useState([]);

  const getData = async () => {
    const data = await fetch("http://localhost:8080/finaldata");
    const data1 = await data.json();
    console.log(data1);
    setEmployeeData(data1);
    setOperation(data1);
     setOperation1(data1);
  };

useEffect(()=>{
getData()
},[])

function handleSort(e){

const newarr= [...operation]


if(e.target.value=="asc"){

    newarr.sort(function(a,b){
        return a.salary- b.salary
    })
}else{

    newarr.sort(function(a,b){
        return b.salary- a.salary
    })
}
setOperation(newarr)


}


function handleName(e){

    const newarr1= [...operation1]
    
    
    if(e.target.value=="asc"){
    
        newarr1.sort(function(a,b){
            if(a.name > b.name) return 1
            if(a.name<b.name) return -1
            return 0
        })
    }else{
    
        newarr1.sort(function(a,b){
            if(a.name > b.name) return -1;
            if(a.name<b.name) return 1;
            return 0
        })
    }
    setOperation1(newarr1)
    
    
    }




  return (

<>

<select name="" id="" onChange={handleSort}>

    <option value="asc"> Asc</option>
    <option value="desc"> Desc</option>

</select>

<select name="" id="" onChange={handleName}>

    <option value="asc"> Asc</option>
    <option value="desc"> Desc</option>

</select>
<ul>
{operation.map((elem) => {
            return (
              <>
                <li>{elem.id} {elem.name} {elem.address} {elem.gender} {elem.salary}</li>
              </>
            );
          })}


</ul>

</>








    // <Table striped bordered hover>
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>Name</th>
    //       <th>Address</th>
    //       <th>Gender</th>
    //       <th>       Salary</th>


    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       {operation.map((elem) => {
    //         return (
    //           <>
    //             <td>{elem.id}</td>
    //             <td>{elem.name}</td>
    //             <td>{elem.address}</td>
    //             <td>{elem.gender}</td>
    //             <td>{elem.salary}</td>
    //           </>
    //         );
    //       })}
    //     </tr>
    //   </tbody>
    // </Table>



  );
}

export default TableData;
