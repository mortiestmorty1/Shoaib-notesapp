import "../App.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHighlighter } from "@fortawesome/free-solid-svg-icons"
import { faBold } from "@fortawesome/free-solid-svg-icons"
import { faItalic } from "@fortawesome/free-solid-svg-icons"
import { faUnderline } from "@fortawesome/free-solid-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { faListUl } from "@fortawesome/free-solid-svg-icons"
import { faListOl } from "@fortawesome/free-solid-svg-icons"
import { faTasks } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { useState } from "react"
import { render } from "@testing-library/react"
import Preview from "./preview.js"



function Editor(props) {
  const [selectedNote, setSelectedNote] = useState({
    id: 0,
    name: "",
    content: "",
    selected: false,
  });

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

  const handleHighlight = () => {
    const editorTextarea = document.querySelector(".editor-textarea");

    if (editorTextarea) {
      const selection = document.getSelection();
      const range = selection.getRangeAt(0);

      if (!range.collapsed) {
        const span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        range.surroundContents(span);
        selection.removeAllRanges();
      }
    }
  };

  return (
    <>
      <div className="switch">
        <button className="edit-option">write</button>
        <button className="preview option">preview</button>
      </div>
      <div className="editor-container">
        <button className="highlight" onClick={handleHighlight}>
          <FontAwesomeIcon className="highlight-Icon" icon={faHighlighter} />
        </button>
        <button className="bold">
          <FontAwesomeIcon className="bold-Icon" icon={faBold} />
        </button>
        <button className="italic">
          <FontAwesomeIcon className="italic-Icon" icon={faItalic} />
        </button>
        <button className="underline">
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
          value={selectedNote.content}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </>
  );
}

export default Editor;