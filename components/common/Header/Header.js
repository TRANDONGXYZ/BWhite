import React, { Fragment } from 'react';
import SmallAvatar from '../Avatar/SmallAvatar';
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';
import Option from '../Option/Option';
import SmallSearchBar from '../SearchBar/SmallSearchBar';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

function Header(props) {
  return (
    <div className="px-3 lg:px-10 py-4 mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <Menu className="lg:hidden relative" as="div">
          {( {open} ) => (
            <Fragment>
              <Menu.Button className="p-1 rounded-lg focus:ring-2 focus:ring-blue-200 hover:cursor-pointer mr-2 outline-none">
                <svg className="w-6 h-6 lg:mr-0" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0487 10.7986H3.04871" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.0487 6.79858H3.04871" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.0487 14.7986H3.04871" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.0487 18.7986H3.04871" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Menu.Button>
              <Transition
              show={open}
              as={Fragment}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
                <Menu.Items className="outline-none min-w-max origin-top-right absolute z-50 left-0 mt-2 space-y-4 bg-white rounded-lg shadow-lg p-3">
                  <Menu.Item>
                    {({ active }) => (
                      <Option icon="home" text="Home" link="/" />
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Option icon="tag" text="Categories" link="/categories" />
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Option icon="caffee" text="About me" link="/about" />
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <SmallSearchBar />
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Fragment>
          )}
        </Menu>
        <Logo />
      </div>
      <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <NavLink text="Home" link="/" />
        <NavLink icon="tag" text="Categories" link="/categories" />
        <NavLink text="About me" link="/about" />
        <SmallSearchBar />
      </div>
      <div className="flex items-center">
        <Link href="/posts/123">
          <a>
            <div className="transition ease-in duration-150 hover:bg-indigo-100 p-2 rounded-full">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3.00006C17.2626 2.73741 17.5744 2.52907 17.9176 2.38693C18.2608 2.24479 18.6286 2.17163 19 2.17163C19.3714 2.17163 19.7392 2.24479 20.0824 2.38693C20.4256 2.52907 20.7374 2.73741 21 3.00006C21.2626 3.2627 21.471 3.57451 21.6131 3.91767C21.7553 4.26083 21.8284 4.62862 21.8284 5.00006C21.8284 5.37149 21.7553 5.73929 21.6131 6.08245C21.471 6.42561 21.2626 6.73741 21 7.00006L7.5 20.5001L2 22.0001L3.5 16.5001L17 3.00006Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </Link>
        <Link href="/login">
          <a>
            <div className="transition ease-in duration-150 hover:bg-indigo-100 p-2 rounded-full mr-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </div>
          </a>
        </Link>
        <Link href="/login">
          <a><SmallAvatar /></a>
        </Link>
      </div>
    </div>
  );
}

export default Header;