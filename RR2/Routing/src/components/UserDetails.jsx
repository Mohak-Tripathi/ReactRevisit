import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import {AuthContext} from './contexts/AuthContext';
import {Navigate} from "react-router-dom"

function UserDetails() {
  const { id } = useParams();

const {isAuth} = useContext(AuthContext)

// console.log("MOHAK", isAuth)

  const [user, setUser] = useState({})

  useEffect(() => {
    Inddata()
  }, [])

  const Inddata = async () => {

    const individualData = await fetch(`https://reqres.in/api/users/${id}`)

    const getData = await individualData.json();

    const data2 = getData.data

    console.log(data2)
    setUser(data2)

  }

if(!isAuth){
  return <Navigate to ={"/login"} />
}

  return (
    <div>
      <div>  UserID : {id} </div>
      <div> First Name : {user.first_name}</div>

      <div> Email : {user.email}</div>

      <img src={user.avatar} alt="" />
    </div>
  )
}

export default UserDetails