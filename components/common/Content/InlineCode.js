import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

function InlineCode(props) {
  const { children } = props;

  return (
    <span className={`px-1 text-md md:text-base rounded-md bg-gray-200 font-mono`}>
      {children}
    </span>
  );
}

export default InlineCode;