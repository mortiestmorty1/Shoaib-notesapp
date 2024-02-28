import React, { useState, useRef, useEffect } from 'react';

const StyledTextarea = () => {
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [startPos, setStartPos] = useState(null);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (startPos !== null && textareaRef.current) {
      const endPos = textareaRef.current.selectionEnd;
      const selectedText = content.substring(startPos, endPos);

      // Apply style to the selected text
      const styledText = isBold ? `<b>${selectedText}</b>` : selectedText;

      // Update the content with the styled text
      setContent((prevContent) => {
        return (
          prevContent.substring(0, startPos) +
          styledText +
          prevContent.substring(endPos)
        );
      });

      setStartPos(null); // Reset start position
    }
  }, [isBold, startPos, content]);

  const handleBoldClick = () => {
    setIsBold(!isBold);
    if (!isBold && textareaRef.current) {
      setStartPos(textareaRef.current.selectionStart);
    }
  };

  const handleInputChange = (event) => {
    const content = event.target.value
    setContent(event.target.value);
    return content;
  };

  return (
    <div>
      <button onClick={handleBoldClick}>Bold</button>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={handleInputChange}
        rows={10}
        cols={50}
      />
      <p><b>{content}</b></p>
    </div>
  );
};

export default StyledTextarea;
