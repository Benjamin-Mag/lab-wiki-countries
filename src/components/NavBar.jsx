// here we want to  : Navbar: Displaying the basic navbar with the LAB name

import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          LAB - WikiCountries
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
