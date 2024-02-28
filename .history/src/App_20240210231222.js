import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';
import data from "./components/data.js"
import { useState } from "react"
import Sidebar from "./components/sidebar.js"
import Editor from "./components/editor.js"
import TEXT from "./components/text.js"

function App() {
  const [notes, setNotes] = useState(data)
  const updateNote = (newBody) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.selected) {
          return { ...note, body: newBody };
        }
        return note;
      });
    });
  };
  return (
    <div className="App">
      <SplitPane split="vertical">
        <Pane
          size="25%"
          minSize="25%"
          maxSize="75%"
        >
          <Sidebar notes={notes} setNotes={setNotes} />
        </Pane>
        <Pane
          size="75%"
          minSize="25%"
          maxSize="75%"
        >
          <Editor notes={notes} setNotes={setNotes} />
          <TEXT currentNote={notes.find(note => note.selected)} updateNote={updateNote}/>
        </Pane>
      </SplitPane>
    </div>
  );
}

export default App;
