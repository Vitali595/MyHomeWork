import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes"
import "./Header.css"

function Header() {
    return (
        <div className="dropdown">
                <div className="fixed-social">
                    <div>
                        <a className="fixed-el">
                            <span>
                                <NavLink className={"links"} to={PATH.PRE_JUNIOR}>pre_junior</NavLink>
                                <NavLink className={"links"} to={PATH.JUNIOR}>junior</NavLink>
                                <NavLink className={"links"} to={PATH.JUNIOR_PLUS}>junior+</NavLink>
                            </span>
                        </a>

                    </div>
                </div>

        </div>
    )
}

export default Header
