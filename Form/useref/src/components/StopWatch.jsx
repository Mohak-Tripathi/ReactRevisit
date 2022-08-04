import React, { useRef, useEffect, useState } from 'react'


function StopWatch() {


    const [count, setCount] = useState(0);

    const Counterref = useRef(null)


    useEffect(() => {

        startInterval()
    }, [])

    const startInterval = () => {
        Counterref.current = setInterval(() => {

            setCount((p) => p + 1)
        }, 1000)

    }

    return (
        <div>

            <h3>Counter: {count} </h3>
            <button onClick={() => {
                clearInterval(Counterref.current)
            }} > Pause</button>


            <button onClick={() => {
                startInterval()
            }}>Start </button>


            <button onClick={() => {
                clearInterval(Counterref.current)
                setCount(0)
            }}>Reset </button>




            </div>



        
    )
}

export default StopWatch