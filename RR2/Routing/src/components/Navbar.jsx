import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>

        <Link key={1} to="/"> Home</Link>
        <Link key = {2} to="/about"> About </Link>
        <Link key = {3} to="/users"> Users </Link>

    </div>
  )
}

export default Navbar