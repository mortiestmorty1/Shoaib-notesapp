// text.js
import React, { useState, useEffect } from 'react';
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import '../App.css';

function TEXT({ notes, selectedNoteIndex, updateNoteContent }) {
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    // Update the editor content when the selected note changes
    if (selectedNoteIndex !== null && notes[selectedNoteIndex]) {
      setEditorContent(notes[selectedNoteIndex].content);
    }
  }, [selectedNoteIndex, notes]);

  // Handler to update the notes when the content changes
  const handleContentChange = (args) => {
    // Update the content of the selected note
    if (selectedNoteIndex !== null && notes[selectedNoteIndex]) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex].content = args.value;
      // Call updateNoteContent to update the state in the parent component (App.js)
      updateNoteContent(updatedNotes);
    }
  };

  return (
    <RichTextEditorComponent value={editorContent} change={handleContentChange}>
      {/* Your other JSX content */}
      {/* Inject the required services */}
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default TEXT;
