import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { RxSketchLogo, RxDashboard, RxPerson, } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-center'>
        <div className="flex flex-col item-center">
          <Link href="/">
            <div className='bg-purple-900 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-400 w-full p-2'></span>
          <Link href="/">
            <div className='bg-gray-400 hover:bg-gray-600 cursos-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className='bg-gray-400 hover:bg-gray-600 cursos-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className='bg-gray-400 hover:bg-gray-600 cursos-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className='bg-gray-400 hover:bg-gray-600 cursos-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>

        </div>
      </div >
      <main className='ml-20 w-full'>{children}</main>
    </div >
  );
};

export default Sidebar;