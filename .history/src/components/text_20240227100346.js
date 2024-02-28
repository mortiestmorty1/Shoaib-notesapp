// text.js
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../App.css';

function TEXT({ notes, setNotes }) {
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    const selectedNote = notes.find((note) => note.selected);
    if (selectedNote) {
      setEditorContent(selectedNote.content);
    } else {
      setEditorContent('');
    }
  }, [notes]);
  const handleContentChange = (content) => {
    const updatedNotes = notes.map((note) =>
      note.selected ? { ...note, content } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <ReactQuill
      value={editorContent}
      onChange={handleContentChange}
      theme="snow"
    />
  );
}

export default TEXT;
