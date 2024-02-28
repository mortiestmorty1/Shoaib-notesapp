import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import React from 'react';
import '../App.css';

function TEXT({ notes }) {
  // Extract the content from the first note (you may need to adjust this based on your data structure)
  const initialContent = notes.length > 0 ? notes[0].content : '';

  // Handler to update the notes when the content changes
  const handleContentChange = (args) => {
    // Update the content of the first note (you may need to adjust this based on your data structure)
    const updatedNotes = [...notes];
    updatedNotes[0].content = args.value;
    // Call setNotes to update the state in the parent component (App.js)
    // setNotes(updatedNotes);
  };

  return (
    <RichTextEditorComponent value={initialContent} change={handleContentChange}>
      {/* Your other JSX content */}
      {/* Inject the required services */}
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default TEXT;
