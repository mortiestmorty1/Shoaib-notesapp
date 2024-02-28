import React, { useState, useRef, useEffect } from 'react';

const StyledTextarea = () => {
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const startPos = window.getSelection().anchorOffset;
      const endPos = window.getSelection().focusOffset;
      const selectedText = window.getSelection().toString();

      // Apply style to the selected text
      const styledText = isBold ? `<b>${selectedText}</b>` : selectedText;

      // Create a new range with the selected text
      const range = window.getSelection().getRangeAt(0);
      range.deleteContents();
      const fragment = range.createContextualFragment(styledText);
      range.insertNode(fragment);
    }
  }, [isBold]);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleInputChange = () => {
    const content = divRef.current.innerHTML;
    setContent(divRef.current.innerHTML);
    return content;
  };

  return (
    <div>
      <button onClick={handleBoldClick}>Bold</button>
      <div
        ref={divRef}
        contentEditable
        style={{ border: '1px solid #ccc', minHeight: '100px' }}
        dangerouslySetInnerHTML={{ __html: content }}
        onBlur={handleInputChange}
      />
        <p>{content}</p>
    </div>
  );
};

export default StyledTextarea;
