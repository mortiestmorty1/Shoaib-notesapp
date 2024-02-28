import React, { useState, useRef } from 'react';

const StyledTextarea = () => {
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);
  const textareaRef = useRef(null);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleInputChange = (event) => {
    const { value, selectionStart, selectionEnd } = event.target;

    if (isBold) {
      const selectedText = value.substring(selectionStart, selectionEnd);
      const styledText = `<b>${selectedText}</b>`;

      // Update the content with the styled text
      setContent(
        value.substring(0, selectionStart) +
          styledText +
          value.substring(selectionEnd)
      );

      // Reset the bold button state
      setIsBold(false);
    } else {
      // Update the content without styling
      setContent(value);
    }
  };

  return (
    <div>
      <button onClick={handleBoldClick}>Bold</button>
      <div
        style={{ whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '5px' }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <textarea
        ref={textareaRef}
        value={content}
        onChange={handleInputChange}
        rows={10}
        cols={50}
      />
    </div>
  );
};

export default StyledTextarea;
