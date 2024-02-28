import "../App.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import Logo from "./logo.svg"
function navbar(){
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <img className="logo"src={Logo} alt="logo" />
                <h1 className="title">NOTES</h1>
            </nav>
        </div>
    )
}

export default navbar