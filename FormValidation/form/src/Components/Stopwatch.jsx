import React, { useEffect } from "react";
import { useState, useRef } from "react";

export const Stopwatch = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    startInterval();

   return function cleanup() {
      clearInterval(ref.current);
    }
  }, []);

  function startInterval() {
    ref.current = setInterval(() => {
      setCounter((preValue) => {
        return preValue + 1;
      });
    }, 1000);
  }

  function handleStart() {
    startInterval();
  }

  function handlePause() {
    clearInterval(ref.current);
  }

  function handleReset() {
    clearInterval(ref.current);
    setCounter(0);
  }

  return (
    <>
      <div> Counter: {counter} </div>
      <button onClick={handleStart}> Start </button>
      <button onClick={handlePause}> Pause </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
};

export default Stopwatch;

// import React from "react";
// import { useEffect, useState, useRef } from "react";

// const Stopwatch = () => {
//   const [counter, setCounter] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     startInterval();

//     return function cleanup() {
//       clearInterval(ref.current);
//     };
//   }, []);

//   function startInterval() {
//     ref.current = setInterval(() => {
//       setCounter((preValue) => {
//         return preValue + 1;
//       });
//     }, 1000);
//   }

//   function handlePause() {
//     clearInterval(ref.current);
//   }

//   function handleStart() {
//     startInterval();
//   }

//   function handleReset() {
//     clearInterval(ref.current);
//     setCounter(0);
//   }

//   return (
//     <div>
//       <div>Counter: {counter} </div>

//       <button onClick={handlePause}> pause </button>

//       <button onClick={handleStart}> start </button>

//       <button onClick={handleReset}> reset </button>
//     </div>
//   );
// };

// export default Stopwatch;

// import React, {useState, useEffect, useRef} from 'react'

// const Stopwatch = () => {
//  const [counter, setCounter] = useState(0)

//  const ref= useRef(null)

//  useEffect(()=>{

// startInterval()

// return ()=>{
//     clearInterval(ref.current)
// }

//  },[])

// function startInterval(){

// ref.current = setInterval(() => {

//         setCounter((p) => p + 1)
//     }, 1000)

// }

//     return (
//     <div>
// <h2>  Counter: {counter} </h2>

// <button onClick={()=> clearInterval(ref.current)}> Pause</button>

// <button onClick={()=> startInterval()}> Start </button>

// <button onClick={()=> {

//     clearInterval(ref.current)
//     setCounter(0)
// }}> Reset </button>

//     </div>
//   )
// }

// export default Stopwatch;
