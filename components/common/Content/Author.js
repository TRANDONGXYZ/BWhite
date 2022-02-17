import React from 'react';

function Author(props) {
  const {children, fontWeight} = props;
  const fontsWeight = {
    'bold': 'font-bold',
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold'
  }
  const fontStyle = fontsWeight[fontWeight] || 'font-normal';

  return (
    <div className={`text-md md:text-base mt-2 ${fontStyle}`}>
      - {children}
    </div>
  );
}

export default Author;