





























// import React from "react";
// import { useEffect } from "react";

// const Counter = () => {
//   const [counter, setCounter] = React.useState(0);

//   useEffect(() => {
//     let id = setInterval(() => {
//       setCounter((preValue) => {
//         console.log(preValue);
//         if (preValue >= 5) {
//           clearInterval(id);
//           return 5;
//         }

//         return preValue + 1;
//       });
//     }, 1000);

//    return  function cleanup(){
//       clearInterval(id)
//     }



//   }, []);

//   return <div>Counter: {counter}</div>;
// };

// export default Counter;

// // import React, { useEffect, useState } from 'react'

// // function Counter() {

// //   const [age, setAge] = useState(12)
// //   const [counter, setCounter]= useState(10)

// // useEffect(()=>{

// // let id= setInterval(()=>{
// // console.log("running")

// // setCounter((prevValue)=>{
// //       console.log("prevValue")
// //         if(prevValue <=0){
// //       clearInterval(id)
// //             return 0
// //        }
// //         return prevValue - 1
// //     })

// // },1000)

// // return ()=>{
// //     clearInterval(id)
// // }

// // }, [])

// //   return (
// //     <div>

// //         <h1> Count: {counter} </h1>
// //         <button>Add</button>
// //         <p>you are {age} for driving </p>
// //         <h1>you are {age} for driving </h1>

// //         </div>
// //   )
// // }

// // export default Counter
