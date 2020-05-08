import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'Assets/logo.svg';

export function Header() {
  return (
    <div className="header">
      <a href="/"><img className="logo" src={logo} alt="logo" /></a>
      <ul className="header__right">
        <li>
          <Link to="/login">Sign In</Link>
        </li>
        <li>
          <Link to="/create" className="header__right__newblog">
            Create Blog
          </Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </div>
  );
}
