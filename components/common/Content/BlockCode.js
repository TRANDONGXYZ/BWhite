import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

function BlockCode(props) {
  const {children, language} = props;

  return (
    <div className="text-sm md:text-md mb-4 w-full rounded-lg overflow-x-auto bg-code p-2 sm:p-4">
      <SyntaxHighlighter language={language}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default BlockCode;