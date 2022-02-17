import React from 'react';
import Image from 'next/image';
import smallAvatar from './smallAvatar.jpeg';
import Link from 'next/link';

function SmallAvatar(props) {
  return (
    <div>
      <div className="p-0.5 rounded-full bg-gray-300">
        <div className="p-0.5 rounded-full bg-white">
          <img className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" src="https://images.pexels.com/photos/6976104/pexels-photo-6976104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default SmallAvatar;