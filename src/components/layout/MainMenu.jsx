import React from 'react';
import { FaSearch } from 'react-icons/fa';

function MainMenu({ children }) {
  return (
    <div>
      <aside>
        <input placeholder='Search anything here' />
        <FaSearch />
      </aside>
      {children}
    </div>
  )
}

export default MainMenu;