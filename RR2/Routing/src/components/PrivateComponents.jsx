import React from 'react'
import {Navigate} from "react-router-dom"

import {useContext} from "react"
import { AuthContext } from './contexts/AuthContext'

function PrivateComponents({children}) {
  
  const {isAuth} = useContext(AuthContext)
    

  if(!isAuth){
      return <Navigate to ="/login" replace={true}/>
  }
  return children
}

export default PrivateComponents