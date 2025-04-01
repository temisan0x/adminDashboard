import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';

function Header({children}) {
  return (
<>
<header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-xl">
          <input 
            placeholder="Search anything here" 
            className="w-full p-2 pl-10 text-sm border border-transparent font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-teal-600 transition-colors">
            <FaBell className="text-xl" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
              A
            </div>
            <span className="text-sm font-medium">Alexandro</span>
            <RiArrowDownSLine className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
    {children}
</>
  );
}

export default Header;