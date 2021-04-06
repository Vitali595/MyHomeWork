import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes"
import "./Header.css"

function Header() {
    return (
        <div className="dropdown">
            <button className="dropbtn"/>
            <div className="dropdown-content">
                <nav>
                    <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                    <NavLink to={PATH.JUNIOR}>junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header
