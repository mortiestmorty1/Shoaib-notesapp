// text.js
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles
import '../App.css';

function TEXT({ notes, setNotes }) {
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    // Find the selected note and update the editor content
    const selectedNote = notes.find((note) => note.selected);
    if (selectedNote) {
      setEditorContent(selectedNote.content);
    } else {
      setEditorContent('');
    }
  }, [notes]);

  // Handler to update the selected note's content
  const handleContentChange = (content) => {
    const updatedNotes = notes.map((note) =>
      note.selected ? { ...note, content } : note
    );
    // Call setNotes to update the state in the parent component (App.js)
    setNotes(updatedNotes);
  };

  return (
    <ReactQuill
      value={editorContent}
      onChange={handleContentChange}
      theme="snow" // You can change the theme if needed
    />
  );
}

export default TEXT;
