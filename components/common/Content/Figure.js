import React from 'react';

function Figure(props) {
  const {src, caption} = props;

  return (
    <div className="w-full mb-4">
      <div>
        <img className="object-contain w-full max-h-screen mx-auto" src={src} alt="" />
      </div>
      <p className="text-sm md:text-md italic font-normal text-center mt-1">{caption}</p>
    </div>
  );
}

export default Figure;