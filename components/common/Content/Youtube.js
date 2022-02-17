import React from 'react';

function Youtube(props) {
  const {src, caption} = props;

  return (
    <div className="mb-4">
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <p className="text-sm md:text-md italic font-normal text-center mt-1">{caption}</p>
    </div>
  );
}

export default Youtube;