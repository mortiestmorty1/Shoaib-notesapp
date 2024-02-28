// text.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

export default function TEXT({ notes, setNotes }) {
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
    <section className="pane editor">
      <ReactQuill
        value={notes.find((note) => note.selected)?.body || ''}
        onChange={(newBody) => updateNote(newBody)}
        theme="snow" // You can change the theme if needed
      />
    </section>
  );
}

