import React from 'react';

function Mark(props) {
  const {children, color} = props;
  const colors = {
    'yellow': 'bg-yellow-200',
    'red': 'bg-red-200'
  }
  const hightlightColor = colors[color] || 'bg-yellow-200';

  return (
    <span className={`text-md md:text-base px-1 rounded-md ${hightlightColor}`}>
      {children}
    </span>
  );
}

export default Mark;