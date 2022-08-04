import React from 'react'

function Header(props) {
    console.log(props)
    return (
        <div>
            <img src={props.elem.image} alt="" />
            <h5> {props.elem.label} </h5>
        </div>
    )
}

export default Header