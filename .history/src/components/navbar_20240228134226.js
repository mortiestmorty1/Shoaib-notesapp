import "../App.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWheatAwnCircleExclamation } from "@fortawesome/free-solid-svg-icons"

function navbar(){
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <FontAwesomeIcon className="navbar-Icon" icon={faWheatAwnCircleExclamation} />
                <h1 className="title">NOTES</h1>
            </nav>
        </div>
    )
}

export default navbar