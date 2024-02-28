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

  const handleContentChange = (content, _, source) => {
    // Update the selected note's content only if the change is not due to user typing
    if (source === 'user') {
      const updatedNotes = notes.map((note) =>
        note.selected ? { ...note, content } : note
      );
      setNotes(updatedNotes);
    }
  };

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['link', 'image'],
  ];

  return (
    <ReactQuill
      style={{ height: '100vh', width: '100vw' }}
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
