import React from 'react';

function H2(props) {
  const {children} = props;

  return (
    <div className="text-2xl md:text-3xl font-bold mt-5">
      {children}
    </div>
  );
}

export default H2;