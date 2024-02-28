import "../App.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"



function Sidebar(props){
  function handleClick() {
    props.setNotes((prevnotes) => [
      ...prevnotes,
      {
        id: prevnotes.length + 1,
        name: " Note" + " " + (prevnotes.length + 1),
        content: "New Note",
        selected: false,
        body: "",
      },
    ]);
  }
  
      function handleSelect(_id){
        props.setNotes((prevnotes) => {
          const newnotes = prevnotes.map((note) => {
            if (note.id === _id) {
              note.selected = true
            } else {
              note.selected = false
            }
            return note
          })
          return newnotes
        })
        
    }
      
    return(
        
        <div className="sidebar-container">
            <h1>NOTES</h1>
            <button className="addbutton" onClick={handleClick}>
                <FontAwesomeIcon className="addbutton-Icon" icon={faPlus} />
            </button>
            <ul className="notes-list">
                {props.notes.map((note) => (
                    <li key={note.id} className="all the notes">
                        <button className="select-notes" 
                        onClick={() => handleSelect(note.id)}>
                            <h3>{note.name}</h3>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar

