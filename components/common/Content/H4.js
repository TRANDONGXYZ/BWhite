import React from 'react';

function H4(props) {
  const {children} = props;

  return (
    <div className="text-lg md:text-xl font-bold mt-5">
      {children}
    </div>
  );
}

export default H4;