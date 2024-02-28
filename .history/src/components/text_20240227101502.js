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
      // No note is selected, clear the editor content
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

  // Toolbar configuration (you can customize it based on your needs)
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ['link', 'image'],

    ['clean'], // remove formatting button
  ];

  return (
    <ReactQuill
      value={editorContent}
      onChange={handleContentChange}
      theme="snow"
      modules={{
        toolbar: toolbarOptions,
      }}
    />
  );
}

export default TEXT;
