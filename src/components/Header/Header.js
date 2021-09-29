import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav >
      <NavLink to='/home' activeClassName='selected' className='navStyle'>
        Home
      </NavLink>
      <NavLink to='/about' activeClassName='selected' className='navStyle'>
        About
      </NavLink>
      <NavLink to='/friends' activeClassName='selected' className='navStyle'>
        Friends
      </NavLink>
      <NavLink to='/about/culture' activeClassName='selected' className='navStyle'>
        Culture
      </NavLink>
    </nav>
  );
};

export default Header;
