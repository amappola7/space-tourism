import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="nav-bar">
      <img src="src/assets/shared/logo.svg" alt="Logo" className="" />
      <ul>
        <li>HOME</li>
        <li>DESTINATION</li>
        <li>CREW</li>
        <li>TECHNOLOGY</li>
      </ul>
      {/* BURGUER BUTTON */}
    </nav>
  );
}

export default NavBar;
