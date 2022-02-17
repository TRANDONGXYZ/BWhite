import React from 'react';

function Unordered(props) {
  const {children} = props;

  return (
    <div className="text-md md:text-base -mt-3 mb-2">
      <ul className="list-disc ml-5">
        {children}
      </ul>
    </div>
  );
}

export default Unordered;