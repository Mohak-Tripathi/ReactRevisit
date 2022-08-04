import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function UserList() {

    const [users, setUser] = useState([])


    useEffect(() => {
        Getdata()
    }, [])

    const Getdata = async () => {

        const getourdata = await fetch("https://reqres.in/api/users")

        const data = await getourdata.json()

        const data1 = data.data
        // console.log(data1)

        setUser(data1)
    }
    return (
        <div>


            {users.map((user) => (
                <h3 key={user.id}>    <Link to={`/users/${user.id}`}> {user.id}-{user.first_name} </Link>  </h3>
                            ))}
        </div>
    )
}

export default UserList