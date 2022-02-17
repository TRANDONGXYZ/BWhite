import React from 'react';

function Input(props) {
  const {placeholder} = props;

  return (
    <div className="relative">
      <input className="w-full max-w-md focus:ring-2 focus:ring-blue-200 focus:outline-none focus:bg-white bg-gray-100 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2" type="text" aria-label="Filter projects" placeholder={placeholder} />
    </div>
  );
}

export default Input;