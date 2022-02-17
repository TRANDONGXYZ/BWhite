import React from 'react';
import Image from 'next/image';

function Alert(props) {
  const {children, color, icon} = props;
  const colors = {
    'blue': 'bg-blue-100 text-blue-900',
    'yellow': 'bg-yellow-100 text-yellow-900'
  };
  const backgroundColor = colors[color] || 'bg-blue-100 text-blue-900';

  return (
    <div className={`text-md md:text-base ${backgroundColor} px-4 py-3 rounded-md flex items-center mb-4`}>
      <div className="mr-2">
        <img src={`/favicons/${icon}.svg`} alt="" width="24" height="24" />
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

export default Alert;