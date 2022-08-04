import React, { useEffect } from 'react'
import { useState } from "react";
import axios from "axios"

function Todos() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const [Loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {

        console.log("Mounted")
        getData()

        //currying function it is-
        return () => {
            console.log("unmouting done")
        }

        //OR
        // return function cleanup(){
        //     console.log("unmouting done")   //cleanup function // cleanup is a callback function. We give to useEffect. React/useEffect call it when component is unmounted internally. You don't need to anything
        // }
        //Note- Both cleanup function and useEffect remains in call stack. 
        //Note- this cleanup function is forming closure. As function is returning another function. 
    }, [page])

    const getData = async () => {

        const data = await fetch(`http://localhost:8081/todos?_page=${page}&_limit=2`)
        const res = await data.json()
        // console.log(res)
        setTodos(res)
        setLoading(false)
    }

    return Loading ? ("Loading......") : (
        <div>

            <input onChange={(e) => setText(e.target.value)} type="text" placeholder='Yes' />
            <button onClick={() => {

                const payload = {
                    title: text,
                    status: false
                }
                axios.post("http://localhost:8081/todos", payload).then(() => {
                    getData()
                })


            }}>Submit</button>




            {todos.map(function (elem) {
                return (<div> {elem.id} {elem.title}   </div>)
            })}

            <button onClick={() => {
                setPage(page - 1)
            }}>Previous</button>

            <button onClick={() => {
                setPage(page + 1)
            }}>Forward</button>

        </div>
    )
}

export default Todos