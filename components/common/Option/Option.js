import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Option(props) {
  const { icon, text, link } = props;

  return (
    <Link href={link}>
      <a>
        <button className="w-full transition ease-in duration-150 hover:bg-blue-100 hover:text-light-blue-800 group flex items-center rounded-md text-light-blue-600 text-md font-medium px-4 py-2">
          <div className="flex items-center justify-center">
            {icon !== undefined && <Image src={`/favicons/${icon}.svg`} alt="" width="18" height="18" />}
            <p className="ml-2">{text}</p>
          </div>
        </button>
      </a>
    </Link>
  );
}

export default Option;