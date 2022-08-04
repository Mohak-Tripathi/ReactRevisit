import React, { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import { useNavigate } from "react-router-dom"

function Login() {

    const { handleChange } = useContext(AuthContext)
    const navigate = useNavigate()


    return (
        <div>

            <input type="text" placeholder='Enter' />
            <input type="text" placeholder='Pass' />
            <button onClick={() => {
                handleChange(true)
                navigate(-3)
            }} > Submit</button>


        </div>
    )
}

export default Login