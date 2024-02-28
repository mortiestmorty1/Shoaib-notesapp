import "../App.css"
import React from "react"
import Logo from "./logo.svg"
function navbar(props){
    function gettitle(){
        const selectedNote = props.notes.find((note) => note.selected);
        if (selectedNote) {
            return selectedNote.name;
        } else {
            return "Notes";
        }
    }
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <img className="logo"src={Logo} alt="logo" />
                <h1 className="title">{selectedNote.name}</h1>
            </nav>
        </div>
    )
}

export default navbar