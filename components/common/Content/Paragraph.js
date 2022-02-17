import React from 'react';

function Paragraph(props) {
  const {children} = props;

  return (
    <div className="text-md md:text-base mb-4">
      {children}
    </div>
  );
}

export default Paragraph;