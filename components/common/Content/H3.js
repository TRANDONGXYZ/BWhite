import React from 'react';

function H3(props) {
  const {children} = props;

  return (
    <div className="text-xl md:text-2xl font-bold mt-5">
      {children}
    </div>
  );
}

export default H3;