import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';

export default function TEXT({ notes, setNotes }) {
  const [selectedTab, setSelectedTab] = useState('write');

  const updateNote = (newBody, noteId) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === noteId) {
          return { ...note, body: newBody };
        }
        return note;
      });
    });
  };

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="pane editor">
      <ReactMde
        value={notes.find((note) => note.selected)?.content || ''}
        onChange={(newContent) => updateNote(newContent, notes.find((note) => note.selected)?.id)}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
}
