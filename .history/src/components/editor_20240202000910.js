import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeader,
  faBold,
  faItalic,
  faUnderline,
  faLink,
  faQuoteRight,
  faImage,
  faListUl,
  faListOl,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { getDefaultNormalizer } from "@testing-library/react";
import Test from "./test";



function Editor(props) {
  const [selectedNote, setSelectedNote] = useState({
    id: 0,
    name: "",
    content: "",
    selected: false,
  });
  const [fontSize, setFontSize] = useState("16px");
  const [fontWeight, setBold] = useState("normal");
  const [fontStyle, setItalic] = useState("normal");
  const [underline, setUnderline] = useState("none");

  useEffect(() => {
    const selected = props.notes.find((note) => note.selected);
    if (selected) {
      setSelectedNote({
        id: selected.id,
        name: selected.name,
        content: selected.content,
        selected: selected.selected,
      });
    }
  }, [props.notes]);

  const handleInputChange = (event) => {
    const { value } = event.target;

    setSelectedNote((prevSelectedNote) => ({
      ...prevSelectedNote,
      content: value,
    }));
  };

  useEffect(() => {
    props.setNotes((prevnotes) =>
      prevnotes.map((note) =>
        note.id === selectedNote.id ? { ...note, content: selectedNote.content } : note
      )
    );
  }, [selectedNote.content]);

  const handleFontSize = () => {
    setFontSize((prevFontSize) => (
      prevFontSize === "16px" ? "20px" : "16px"));
  };
  const handleBold = () => {
    setBold((prevfontWeight) => (
      prevfontWeight === "normal" ? "bold" : "normal"));
  };
  const handleItalic =()=>{
    setItalic((previtalic)=>(
      previtalic==="normal" ? "italic" : "normal"))
  }
  const handleUnderline =()=>{
    setUnderline((prevline)=>(
      prevline === "none" ? "underline":"none"
    ))
  }

  return (
    <>
      <div className="switch">
        <button className="edit-option">write</button>
        <button className="preview option">preview</button>
      </div>
      <div className="editor-container">
      <button className="textheight" onClick={handleFontSize}>
          <FontAwesomeIcon className="text-height-icon" icon={faHeader} />
        </button>
        <button className="bold" onClick={handleBold}>
          <FontAwesomeIcon className="bold-Icon" icon={faBold} />
        </button>
        <button className="italic" onClick={handleItalic}>
          <FontAwesomeIcon className="italic-Icon" icon={faItalic} />
        </button>
        <button className="underline" onClick={handleUnderline}>
          <FontAwesomeIcon className="underline-Icon" icon={faUnderline} />
        </button>
        <button className="addlink">
          <FontAwesomeIcon className="addlink-Icon" icon={faLink} />
        </button>
        <button className="doubleqoutes">
          <FontAwesomeIcon className="doubleqoutes-Icon" icon={faQuoteRight} />
        </button>
        <button className="addimgae">
          <FontAwesomeIcon className="addimgae-Icon" icon={faImage} />
        </button>
        <button className="unorderedlist">
          <FontAwesomeIcon className="unorderedlist-Icon" icon={faListUl} />
        </button>
        <button className="orderedlist">
          <FontAwesomeIcon className="orderedlist-Icon" icon={faListOl} />
        </button>
        <button className="todolist">
          <FontAwesomeIcon className="todolist-Icon" icon={faTasks} />
        </button>
      </div>
      <div className="editor">
        <textarea
          className="editor-textarea"
          style={{ fontSize: fontSize , 
                   fontWeight: fontWeight ,
                   fontStyle: fontStyle,
                   textDecoration: underline,
                  }}
          value={selectedNote.content}
          onChange={handleInputChange}
        ></textarea>
        <Test />
      </div>
    </>
  );
}

export default Editor;
