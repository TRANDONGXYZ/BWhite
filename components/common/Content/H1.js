import React from 'react';

function H1(props) {
  const {children} = props;

  return (
    <div className="text-3xl md:text-4xl font-bold mt-5">
      {children}
    </div>
  );
}

export default H1;