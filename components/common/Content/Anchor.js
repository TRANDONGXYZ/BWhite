import React from 'react';
import Link from 'next/link';

function Anchor(props) {
  const {href, children, color, bold} = props;
  const linkHref = href || '/';
  const colors = {
    'blue': 'text-blue-600',
    'red': 'text-red-600',
    'black': 'text-black'
  };

  const colorLink = colors[color] || 'text-blue-600';
  const isBold = (bold === 'bold' ? "font-semibold" : '');
  const isUnderline = (typeof children == 'string' ? 'underline' : '');

  return (
    <Link href={`${linkHref}`}>
      <a className={`${colorLink} ${isBold} ${isUnderline}`}>{children}</a>
    </Link>
  );
}

export default Anchor;