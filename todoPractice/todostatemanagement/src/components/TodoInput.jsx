import React, {useState} from 'react'

const TodoInput = ({getData}) => {
 const [text, setText] = useState("")
 
 
    return (
    <>
    <input type="text" placeholder="Enter Text" onChange= {(e)=> setText(e.target.value)} /> 

    <button onClick={()=> getData(text)}>  Add Todo </button>
    {text}

    </>
  )
}

export default TodoInput











// import React from "react";

// function TodoInput({ getData }) {
//   const [text, setText] = React.useState([]);

//   return (
//     <div>
//       <input
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//         type='text'
//       />
//       <button
//         onClick={() => {
//           getData(text);
//         }}
//       >
//         {" "}
//         Submit
//       </button>
//     </div>
//   );
// }

// export default TodoInput;
