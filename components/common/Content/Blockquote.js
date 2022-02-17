import React from 'react';

function Blockquote(props) {
  const {children, border, fontWeight} = props;
  const colors = {
    'yellow': 'border-yellow-200',
    'red': 'border-red-200'
  };
  const borderColor = colors[border] || 'border-gray-200';
  const fontsWeight = {
    'bold': 'font-bold',
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold'
  }
  const fontStyle = fontsWeight[fontWeight] || 'font-normal';

  return (
    <div className={`mb-4 text-md md:text-base border-l-4 pl-6 ${borderColor} ${fontStyle}`}>
      {children}
    </div>
  );
}

export default Blockquote;