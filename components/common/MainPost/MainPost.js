import React from 'react';
import Link from 'next/link';

function MainPost(props) {
  return (
    <Link href="/posts/123">
      <div className="transition ease-in duration-150 w-full p-3 md:hover:shadow-post md:hover:cursor-pointer">
        {/* <div className="h-44 w-full lg:h-[500px]">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1" alt="" />
        </div> */}

        <div className="aspect-w-2 aspect-h-1">
          <img className="object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1" alt="" />
        </div>

        <div>
          <p className="text-sm mt-2">
            by&#160;
            <Link href="/about">
              <a>Tran Dong Ba</a>
            </Link> | Mar 12, 2021
          </p>
          <p className="text-2xl md:text-3xl font-bold mt-1 line-clamp-2">Đây là tiêu đề của bài viết nè</p>
          <p className="text-[16px] mt-1 line-clamp-5">Lorem ipsum dolor sit amet consect. Quia autem hic vne? Sapiente nobis aspernatur alias, mollitia non repellat. Sed hic culpa eligendi voluptatem nihil praesentium alias?</p>
        </div>
      </div>
    </Link>
  );
}

export default MainPost;