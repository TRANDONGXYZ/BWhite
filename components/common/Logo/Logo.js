import React from 'react';
import Link from 'next/dist/client/link';

function Logo(props) {
  return (
    <Link href='/'>
      <a className="text-xl md:text-3xl font-bold">
        BWhite
      </a>
    </Link>
  );
}

export default Logo;