import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavLink(props) {
  const {icon, text, link} = props;

  return (
    <Link href={link}>
      <a>
        <button className="transition ease-in duration-150 hover:bg-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-blue-100 text-light-blue-600 text-md font-medium px-4 py-2">
          <div className="flex items-center justify-center">
            {icon !== undefined && <div className="mr-1"><img src={`/favicons/${icon}.svg`} alt="" /></div>}
            <p>{text}</p>
          </div>
        </button>
      </a>
    </Link>
  );
}

export default NavLink;