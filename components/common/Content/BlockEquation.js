import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function BlockEquation(props) {
  const { children, caption } = props;

  return (
    <div className="mb-4">
      <div className="text-md md:text-base">
        <BlockMath>{children}</BlockMath>
      </div>
      {caption && <p className="text-sm md:text-md italic text-center">{caption}</p>}
    </div>
  );
}

export default BlockEquation;