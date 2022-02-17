import React from 'react';
import Link from 'next/link';

function Post(props) {
  return (
    <div className="transition ease-in duration-150 w-full p-3 md:hover:shadow-post md:hover:cursor-pointer mt-8">
      <div className="aspect-w-2 aspect-h-1">
        <img className="object-cover" src="https://cdn.sanity.io/images/599r6htc/production/aca3aa4322d675c288973272c62e7d51ba02dcfb-4240x2000.png" alt="" />
      </div>
      <div>
        <p className="text-sm mt-2">
          by&#160;
          <Link href="/about">
            <a>Tran Dong Ba</a>
          </Link> | Mar 12, 2021
        </p>
        <p className="text-xl md:text-2xl font-bold mt-1 line-clamp-2">Cài Window Sandbox cho Windows 10 Pro</p>
        <p className="text-[16px] mt-1 line-clamp-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia autem hic voluptate sit at odit illum dignissimos totam sint magnam natus provident, officia saepe libero quasi? Autem unde aut non dolorem? Dolorum sapiente ab ratione?</p>
      </div>
    </div>
  );
}

export default Post;