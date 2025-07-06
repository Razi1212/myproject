import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-14 bg-zinc-900 text-white">
      <div className="flex h-full w-full justify-between p-3">
        <div className="flex text-xl font-extrabold">
          <span className="text-indigo-800">Web</span>
          <span className="text-white">Dev</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex">
          <ul className="flex">
            <Link href="/">
              <li className="ml-10 hover:border-b text-xl">Home</li>
            </Link>

            <Link href="/About">
              <li className="ml-10 hover:border-b text-xl">About</li>
            </Link>

            <Link href="/Project">
              <li className="ml-10 hover:border-b text-xl">Project</li>
            </Link>

            <Link href="/Contact">
              <li className="mx-10 hover:border-b text-xl">Contact</li>
            </Link>

            <Link href="/Blog">
              <li className="mx-10 hover:border-b text-xl">Blog</li>
            </Link>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="sm:hidden bg-zinc-800 text-white flex flex-col items-center py-4">
          <Link href="/">
            <a className="py-2 text-xl">Home</a>
          </Link>
          <Link href="/Project">
            <a className="py-2 text-xl">Project</a>
          </Link>
          <Link href="/Contact">
            <a className="py-2 text-xl">Contact</a>
          </Link>
          <Link href="/Blog">
            <a className="py-2 text-xl">Blog</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
