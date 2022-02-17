import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer(props) {
  return (
    <div className="grid grid-cols-2 py-5 mt-20">
      <div className="text-2xl sm:text-4xl font-bold text-center flex items-center justify-center">
        <Link href="/">
          <a>
            <p>BWhite.</p>
          </a>
        </Link>
      </div>
      <div className="mx-auto">
        <p className="text-base font-medium">Contact me</p>
        <Link href="https://www.youtube.com/channel/UCFl-A_txzgtDxa38Tm8MFEQ">
          <a>
            <div className="flex items-center">
              <Image src="/favicons/youtube.svg" alt="" width="18" height="18" />
              <span className="ml-1">Youtube</span>
            </div>
          </a>
        </Link>
        <Link href="https://github.com/TRANDONGXYZ">
          <a>
            <div className="flex items-center">
              <Image src="/favicons/github.svg" alt="" width="18" height="18" />
              <span className="ml-1">Github</span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;