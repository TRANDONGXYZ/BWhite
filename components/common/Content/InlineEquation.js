import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function InlineEquation(props) {
  const { children } = props;

  return (
    <span className="text-md md:text-base px-1"><InlineMath>{children}</InlineMath></span>
  );
}

export default InlineEquation;