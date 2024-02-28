import React, { useState } from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

const generateMarkdownPreview = (markdown) => {
  const html = new Showdown.Converter().makeHtml(markdown);
  return Promise.resolve(html);
};

const StyledTextarea = () => {
  const [value, setValue] = useState('');
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');

  const handleBoldClick = () => {
    setValue((prevValue) => prevValue + '**Bold Text**');
  };

  const commands = [
    {
      commands: [
        {
          icon: 'bold',
          execute: (state, api) => {
            const selectedText = state.text.substring(state.selection[0], state.selection[1]);
            const newText = `**${selectedText}**`;
            api.replaceSelection(newText);
          },
        },
      ],
    },
  ];

  return (
    <div>
      <button onClick={handleBoldClick}>Bold</button>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={generateMarkdownPreview}
        commands={commands}
      />
    </div>
  );
};

export default StyledTextarea;


