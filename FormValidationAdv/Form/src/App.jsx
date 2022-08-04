import "./App.css";
import Form from "./Components/Form"
import TableData from "./Components/Table"
import React from "react"
import { Routes, Route } from "react-router-dom";


function App() {
  

  return (
<>

{/* 
<Routes>    
<Route path="/" element={<Form/>}/>
<Route path="/table" element={<TableData/>}/>

</Routes> */}


<Form/>
<TableData/>


</>

  );
}

export default App;
